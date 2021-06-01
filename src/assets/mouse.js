//캔버스와 컨텍스트 생성
const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext('2d');

//현재 포인트들의 좌표
const points = [{x: 0, y:0}, {x: canvas.height, y: 0}, {x: canvas.height, y: canvas.height}, {x:0, y:canvas.height}];
//3가지 디스플레이할 목표도형의 포인트들 및 목표
let triPoints = [{x: canvas.height / 2, y:canvas.height / 10}, {x: canvas.height / 2, y: 0}, {x: canvas.height, y: canvas.height * 9 / 10}, {x: 0, y: canvas.height * 9 / 10}];
let cirPoints = [{x: canvas.height / 2, y: 0}, {x: canvas.height, y: canvas.height / 2}, {x: canvas.height / 2, y: canvas.height}, {x: 0, y: canvas.height / 2}];
let squPoints = [{x: 0, y:0}, {x: canvas.height, y: 0}, {x: canvas.height, y: canvas.height}, {x:0, y:canvas.height}];
let target = "square";

//현재 색상
const color = [{r: 0, g: 0, b:0}];
//3가지 디스플레이할 목표색상 및 카운터
const colors = [{r: 141, g: 215, b: 192}, {r:255, g:87, b:104}, {r: 1, g: 165, b: 228}];
const colorIndex = {color: 0, count: 0};

//애니메이션 호출
requestAnimationFrame(animate.bind(ctx));

//재귀적 호출을 위한 애니메이션 함수
function animate(){
  draw(this);
  requestAnimationFrame(animate.bind(ctx));
}

//그려주는 함수
function draw(ctx){

  if(target === "square"){
    points.forEach((point, n) => {
      point.x += (squPoints[n].x - point.x) / 5;
      point.y += (squPoints[n].y - point.y) / 5;
    })
  } else if(target === "triangle"){
    points.forEach((point, n) => {
      point.x += (triPoints[n].x - point.x) / 5;
      point.y += (triPoints[n].y - point.y) / 5;
    })
  } else {
    points.forEach((point, n) => {
      point.x += (cirPoints[n].x - point.x) / 5;
      point.y += (cirPoints[n].y - point.y) / 5;
    })
  }

  //캔버스를 초기화 및 스타일설정
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b})`;

  //그리기 시작
  ctx.beginPath();
  //만약 circle을 그려야한다면
  if(target === "circle"){
    //만약 circle로 변화과정이 끝났다면 arc를 사용해서 진짜 circle을 그려준다
    if(Math.abs(points[0].x - cirPoints[0].x) < 1){
      ctx.arc(canvas.height / 2, canvas.height / 2, canvas.height / 2, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();
    }
    //아직 circle로 변화중이라면 점 4개로 circle을 그려준다
    else {
      ctx.moveTo(points[0].x, points[0].y);
      points.forEach((point, n) => {
        ctx.quadraticCurveTo(squPoints[n].x, squPoints[n].y, point.x, point.y)
      })
      ctx.quadraticCurveTo(squPoints[0].x, squPoints[0].y, points[0].x, points[0].y);
      ctx.fill();
      ctx.closePath();
    }
  }
  //만약 triangle 또는 square를 그려야한다면
  else {
    //그린다
    ctx.moveTo(points[0].x, points[0].y);
    for(let point of points){
      ctx.lineTo(point.x, point.y);
    }
    ctx.lineTo(points[0].x, points[0].y);
    ctx.fill();
    ctx.closePath();
  }
}

//윈도우가 로드되면
window.onload = () => {
  //scroll 또는 mousemove 이벤트가 감지되면 커스텀 커서의 좌표를 변경해주는 함수를 실행
  window.addEventListener("scroll", matchCursor);
  window.addEventListener("mousemove", matchCursor);

  //hover했을때 반응해야하는 element들에 이벤트리스너를 붙여준다.
  //logo를 위한 이벤트리스너
  document.getElementsByClassName("center__cont")[0].addEventListener("mouseover", setTargetToTriangle);
  document.getElementsByClassName("center__cont")[0].addEventListener("mouseleave", setTargetToSquare);
  //subject 각각을 위한 이벤트리스너
  const subjects = document.getElementsByClassName("subject__each");
  for(let subject of subjects){
    subject.addEventListener("mouseover", setTargetToTriangle);
    subject.addEventListener("mouseleave", setTargetToSquare);
  }
  //img를 위한 이벤트리스너
  document.getElementsByClassName("main__img")[0].addEventListener("mouseover", setTargetToCircle);
  document.getElementsByClassName("main__img")[0].addEventListener("mouseleave", setTargetToSquare);

  //색을 0.1초마다 다음 단계의 색으로 변경한다
  setInterval(changeColor, 100);
}

//커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시키는 함수
function matchCursor(e) {
  let mouseCursor = document.querySelector(".cursor");
  mouseCursor.style.left = e.pageX + "px";
  mouseCursor.style.top = e.pageY - scrollY + "px";
}

//타켓을 설정해주는 함수들
function setTargetToTriangle(){
  target = "triangle";
}

function setTargetToSquare(){
  target = "square";
}

function setTargetToCircle(){
  target = "circle";
}

//색을 변경해주는 함수
function changeColor(){
  if(colorIndex.count === 11){
    colorIndex.color++;
    colorIndex.count = 0;
  }
  if(colorIndex.color % 3 === 0){
    color.r = colors[0].r - (colors[0].r - colors[1].r) / 10 * colorIndex.count;
    color.g = colors[0].g - (colors[0].g - colors[1].g) / 10 * colorIndex.count;
    color.b = colors[0].b - (colors[0].b - colors[1].b) / 10 * colorIndex.count++;
  }
  else if(colorIndex.color % 3 === 1){
    color.r = colors[1].r - (colors[1].r - colors[2].r) / 10 * colorIndex.count;
    color.g = colors[1].g - (colors[1].g - colors[2].g) / 10 * colorIndex.count;
    color.b = colors[1].b - (colors[1].b - colors[2].b) / 10 * colorIndex.count++;
  } else{
    color.r = colors[2].r - (colors[2].r - colors[0].r) / 10 * colorIndex.count;
    color.g = colors[2].g - (colors[2].g - colors[0].g) / 10 * colorIndex.count;
    color.b = colors[2].b - (colors[2].b - colors[0].b) / 10 * colorIndex.count++;
  }
}
