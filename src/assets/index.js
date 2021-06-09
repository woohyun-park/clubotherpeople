//
// ANIMATION RELATED
//

//캔버스와 컨텍스트 생성
const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext('2d');

//애니메이션 호출
requestAnimationFrame(animate.bind(ctx));

//재귀적 호출을 위한 애니메이션 함수
function animate(){
  draw(this);
  requestAnimationFrame(animate.bind(ctx));
}

//
// MOUSE RELATED
//

//현재 포인트들의 좌표
const points = [{x: 0, y:0}, {x: canvas.height, y: 0}, {x: canvas.height, y: canvas.height}, {x:0, y:canvas.height}];
//3가지 디스플레이할 목표도형의 포인트들 및 목표
const triPoints = [{x: canvas.height / 2, y:canvas.height / 10}, {x: canvas.height / 2, y: canvas.height / 10}, {x: canvas.height, y: canvas.height * 9 / 10}, {x: 0, y: canvas.height * 9 / 10}];
const cirPoints = [{x: canvas.height / 2, y: 0}, {x: canvas.height, y: canvas.height / 2}, {x: canvas.height / 2, y: canvas.height}, {x: 0, y: canvas.height / 2}];
const squPoints = [{x: 0, y:0}, {x: canvas.height, y: 0}, {x: canvas.height, y: canvas.height}, {x:0, y:canvas.height}];
const noPoints = {x: canvas.height / 2, y: canvas.height / 2};

let target = "square";

//커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시키는 함수
function matchCursor(e) {
  const mouseCursor = document.querySelector(".cursor");
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

function setTargetToNoPoint(){
  target = "noPoint";
}

//다음 점의 위치를 calculate
function calculatePoint(){
  if(target === "noPoint"){
    points.forEach((point, n) => {
      point.x += (noPoints.x - point.x) / 5;
      point.y += (noPoints.y - point.y) / 5;
    })
  }
  else if(target === "square"){
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
}

function drawCircle(){
  //만약 circle로 변화과정이 끝났다면 arc를 사용해서 진짜 circle을 그려준다
  if(Math.abs(points[0].x - cirPoints[0].x) < 1){
    ctx.arc(canvas.height / 2, canvas.height / 2, canvas.height / 2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  }
  //아직 circle로 변화중이라면 점 4개로 circle을 그려준다
  else {
    ctx.moveTo(points[0].x, points[0].y);
    //canvas.height / 20을 해주는 이유는 원에 가깝게 만들기 위한 커스텀
    ctx.quadraticCurveTo(squPoints[1].x - canvas.height / 20, squPoints[1].y, points[1].x, points[1].y);
    ctx.quadraticCurveTo(squPoints[2].x - canvas.height / 20, squPoints[2].y, points[2].x, points[2].y);
    ctx.quadraticCurveTo(squPoints[3].x + canvas.height / 20, squPoints[3].y, points[3].x, points[3].y);
    ctx.quadraticCurveTo(squPoints[0].x + canvas.height / 20, squPoints[0].y, points[0].x, points[0].y);
    ctx.fill();
    ctx.closePath();
  }
}

function drawElse(){
  //그린다
  ctx.moveTo(points[0].x, points[0].y);
  for(let point of points){
    ctx.lineTo(point.x, point.y);
  }
  ctx.lineTo(points[0].x, points[0].y);
  ctx.fill();
  ctx.closePath();
}

//그려주는 함수
function draw(ctx){
  calculatePoint();

  //캔버스를 초기화 및 스타일설정
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b})`;

  ctx.beginPath();
  //만약 circle을 그리는 경우와 그 외(triangle, square, noPoint)를 그리는 경우로 분기
  if(target === "circle"){
    drawCircle();
  } else {
    drawElse();
  }
}

//
// EVENT LISTENER RELATED
//

//윈도우가 로드되면
window.onload = () => {
  document.getElementsByClassName("cursor")[0].style.display = "block";

  //scroll 또는 mousemove 이벤트가 감지되면 커스텀 커서의 좌표를 변경해주는 함수를 실행
  window.addEventListener("scroll", matchCursor);
  window.addEventListener("mousemove", matchCursor);

  attachEventListener();
  observeUrlChange();

  changeColorIter();
}

function attachEventListenerLogo(){
  const elem = document.getElementsByClassName("center__cont")[0];
  if(elem != undefined){
    elem.addEventListener("mouseover", setTargetToNoPoint);
    elem.addEventListener("mouseleave", setTargetToSquare);
  }
}

function attachEventListenerTitle(title){
  const elem = document.getElementsByClassName(`${title}`)[0];
  if(elem != undefined){
    elem.addEventListener("mouseover", () => {
      setTargetToNoPoint();
      elem.style.transform = "scale(1.1)";
      setHovered(title, true);
    })
    elem.addEventListener("mouseleave", () => {
      setTargetToSquare();
      elem.style.transform = "scale(1)";
      setHovered(title, false);
    })
  }
}

function attachEventListenerSubjects(){
  const elems = document.getElementsByClassName("subject__each");
  for(let elem of elems){
    elem.addEventListener("mouseover", () => {
      setTargetToTriangle();
      elem.style.filter = "grayscale(0)";
      elem.style.transform = "scale(1.05)";
    });
    elem.addEventListener("mouseleave", () => {
      setTargetToSquare();
      elem.style.filter = "grayscale(1)";
      elem.style.transform = "scale(1)";
    });
    elem.addEventListener("click", setTargetToSquare);
  }
}

function attachEventListenerMainImg(){
  const elem = document.getElementsByClassName("main__img")[0];
  if(elem != undefined){
    elem.addEventListener("mouseover", () => {
      setTargetToCircle();
      elem.style.filter = "grayscale(0)";
      elem.style.transform = "scale(1.01)";
    });
    elem.addEventListener("mouseleave", () => {
      setTargetToSquare();
      elem.style.filter = "grayscale(1)";
      elem.style.transform = "";
    });
  }
}

function attachEventListenerBack(){
  const elem = document.getElementsByClassName("detail__back")[0];
  if(elem != undefined){
    elem.addEventListener("mouseover", () => {
      setTargetToTriangle();
      elem.style.transform = "scale(1.1)";
      isBackHovered = true;
    })
    elem.addEventListener("mouseleave", () => {
      setTargetToSquare();
      elem.style.transform = "scale(1)";
      isBackHovered = false;
    })
    elem.addEventListener("click", () => {
      isBackHovered = false;
      setTargetToSquare();
    })
  }
}

function attachEventListenerImage(){
  const elems = document.getElementsByTagName("img");
  if(elems.length != 0){
    for(let elem of elems){
      elem.addEventListener("mouseover", setTargetToCircle);
      elem.addEventListener("mouseleave", setTargetToSquare);
    }
  }
}

function attachEventListenerMusic(){
  const elems = document.getElementsByTagName("iframe");
  if(elems.length != 0){
    for(let elem of elems){
      elem.addEventListener("mouseover", setTargetToNoPoint);
      elem.addEventListener("mouseleave", setTargetToSquare);
    }
  }
}

function attachEventListener(){
  //hover했을때 반응해야하는 element들에 이벤트리스너를 붙여준다.

  attachEventListenerLogo();

  attachEventListenerTitle("left__text");
  attachEventListenerTitle("right__text");
  attachEventListenerTitle("subject__title");

  attachEventListenerMainImg();

  attachEventListenerSubjects();

  attachEventListenerBack();
  attachEventListenerTitle("detail__title");

  attachEventListenerMusic();
  attachEventListenerImage();
}

function observeUrlChange(){
  //MutationObserver를 사용하여 urlchange를 감지한다
  let lastUrl = location.href;
  new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
      lastUrl = url;
      onUrlChange();
    }
  }).observe(document, {subtree: true, childList: true});
}

function onUrlChange() {
  attachEventListener();
}

//
// COLOR RELATED
//

//현재 색상
const color = [{r: 141, g: 215, b:192}];
//3가지 디스플레이할 목표색상 및 카운터
const colors = [{r: 141, g: 215, b: 192}, {r:255, g:87, b:104}, {r: 1, g: 165, b: 228}];
const colorIndex = {color: 1, count: 0};

let isBackHovered = false;
let isDetailTitleHovered = false;
let isLeftTitleHovered = false;
let isRightTitleHovered = false;
let isSubjectTitleHovered = false;

function getHovered(elem){
  if(elem == "left__text"){
    return isLeftTitleHovered;
  } else if(elem == "right__text"){
    return isRightTitleHovered;
  } else if(elem == "subject__title"){
    return isSubjectTitleHovered;
  } else if(elem == "detail__back"){
    return isBackHovered;
  } else if(elem == "detail__title"){
    return isDetailTitleHovered;
  } return NULL;
}

function setHovered(elem, bool){
  if(elem == "left__text"){
    isLeftTitleHovered = bool;
  } else if(elem == "right__text"){
    isRightTitleHovered = bool;
  } else if(elem == "subject__title"){
    isSubjectTitleHovered = bool;
  } else if(elem == "detail__back"){
    isBackHovered = bool;
  } else if(elem == "detail__title"){
    isDetailTitleHovered = bool;
  }
}

function changeColorIter(){
  //색을 0.1초마다 다음 단계의 색으로 변경한다
  setInterval(() => {
    changeColor();
    changeTitleColorAll();
  }, 100);
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

function changeTitleColor(title){
  const elem = document.getElementsByClassName(`${title}`)[0];
  const elemConts = document.getElementsByClassName(`${title}--cont`);
  if(elem != undefined){
    if(getHovered(title)){
      elem.style.color = `rgb(${color.r}, ${color.g}, ${color.b})`;
      for(let each of elemConts){
        each.style.webkitTextStrokeColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
      }
    } else {
      elem.style.color = "black";
      for(let each of elemConts){
        each.style.webkitTextStrokeColor = "black";
      }
    }
  }
}

function changeBackColor(){
  const elem = document.getElementsByClassName("detail__back")[0];
  if(elem != undefined){
    if(isBackHovered){
      elem.style.color = `rgb(${color.r}, ${color.g}, ${color.b})`;
    } else {
      elem.style.color = "black";
    }
  }
}

function changeOrbitColor(){
  const elem = document.getElementsByClassName("center__orbit--path")[0];
  if(elem != undefined){
    elem.style.fill = `rgb(${color.r}, ${color.g}, ${color.b})`;
  }
}

function changeTitleColorAll(){
  changeOrbitColor();
  changeTitleColor("left__text");
  changeTitleColor("right__text");
  changeTitleColor("subject__title");
  changeTitleColor("detail__title");
  changeBackColor();
}
