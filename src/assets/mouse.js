let canvas = document.getElementsByTagName("canvas")[0];
let ctx = canvas.getContext('2d');
let points = [{x: 0, y:0}, {x:0, y:canvas.height}, {x: canvas.width, y: canvas.height}, {x: canvas.width, y: 0}];
let pointsTri = {x: canvas.width / 20, y: canvas.height / 100};
let pointsTriIndex = 0;
let isHovered = false;
let colors = [{r: 141, g: 215, b: 192}, {r:255, g:87, b:104}, {r: 1, g: 165, b: 228}];
let color = [{r: 0, g: 0, b:0}];
let colorIndex = {color: 0, count: 0};

requestAnimationFrame(animate.bind(ctx));

function animate(){
  draw(this);
  requestAnimationFrame(animate.bind(ctx));
}

function draw(ctx){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // ctx.fillStyle = "black";
  ctx.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b})`;
  ctx.beginPath();
  // if(isHovered){
  //   if(points[0].x < canvas.width / 2)
  //     points[0].x += 10;
  //   if(points[3].x > canvas.width / 2)
  //     points[3].x -= 10;
  // } else {
  //   if(points[0].x > 0)
  //     points[0].x -= 10;
  //   if(points[3].x < canvas.width)
  //     points[3].x += 10;
  // }
  if(isHovered){
    if(pointsTriIndex < 10){
      points[0].x += pointsTri.x;
      points[1].y -= pointsTri.y;
      points[2].y -= pointsTri.y;
      points[3].x -= pointsTri.x;
      pointsTriIndex++;
    }
  } else {
    if(pointsTriIndex >= 0){
      points[0].x -= pointsTri.x;
      points[1].y += pointsTri.y;
      points[2].y += pointsTri.y;
      points[3].x += pointsTri.x;
      pointsTriIndex--;
    }
  }

  ctx.moveTo(points[0].x, points[0].y);
  for(let point of points){
    ctx.lineTo(point.x, point.y);
  }
  ctx.lineTo(points[0].x, points[0].y);
  ctx.fill();
  ctx.closePath();
}


let mouseCursor = document.querySelector(".cursor");
// let navLinks = document.querySelectorAll(".gnb li a"); //메뉴 링크
//window 객체에 scroll & mouse 이벤트를 추가하고 cursor함수 실행되도록 함
window.addEventListener("scroll", cursor);
window.addEventListener("mousemove", cursor);

window.onload = () => {
  document.getElementsByClassName("center__cont")[0].addEventListener("mouseover", mouseOver);
  document.getElementsByClassName("center__cont")[0].addEventListener("mouseleave", mouseLeave);
  const subjects = document.getElementsByClassName("subject__each");
  for(let subject of subjects){
    subject.addEventListener("mouseover", mouseOver);
    subject.addEventListener("mouseleave", mouseLeave);
  }
  setInterval(changeColor, 100);
}

//커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴
function cursor(e) {
  mouseCursor.style.left = e.pageX + "px";
  mouseCursor.style.top = e.pageY - scrollY + "px";
}

function mouseOver(e){
  isHovered = true;
}

function mouseLeave(e){
  isHovered = false;
}

// let colors = [{r: 141, g: 215, b: 192}, {r:255, g:87, b:104}, {r: 1, g: 165, b: 228}];

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
