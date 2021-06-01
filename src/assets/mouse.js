let canvas = document.getElementsByTagName("canvas")[0];
let ctx = canvas.getContext('2d');
let points = [{x: 0, y:0}, {x: canvas.height, y: 0}, {x: canvas.height, y: canvas.height}, {x:0, y:canvas.height}];
let colors = [{r: 141, g: 215, b: 192}, {r:255, g:87, b:104}, {r: 1, g: 165, b: 228}];
let color = [{r: 0, g: 0, b:0}];
let colorIndex = {color: 0, count: 0};

let triPoints = [{x: canvas.height / 2, y:canvas.height / 10}, {x: canvas.height / 2, y: 0}, {x: canvas.height, y: canvas.height * 9 / 10}, {x: 0, y: canvas.height * 9 / 10}];
let cirPoints = [{x: canvas.height / 2, y: 0}, {x: canvas.height, y: canvas.height / 2}, {x: canvas.height / 2, y: canvas.height}, {x: 0, y: canvas.height / 2}];
let squPoints = [{x: 0, y:0}, {x: canvas.height, y: 0}, {x: canvas.height, y: canvas.height}, {x:0, y:canvas.height}];
let target = "square";

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
  //   if(points[0].x < canvas.height / 2)
  //     points[0].x += 10;
  //   if(points[3].x > canvas.height / 2)
  //     points[3].x -= 10;
  // } else {
  //   if(points[0].x > 0)
  //     points[0].x -= 10;
  //   if(points[3].x < canvas.height)
  //     points[3].x += 10;
  // }

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

  // ctx.arc(50, 100, 50, 0, 2 * Math.PI);
  // ctx.moveTo(50, 50);
  // ctx.quadraticCurveTo(100, 50, 100, 100);
  // ctx.quadraticCurveTo(100, 150, 50, 150);
  // ctx.quadraticCurveTo(0, 150, 0, 100);
  // ctx.quadraticCurveTo(0, 50, 50, 50);

  if(target === "circle"){
    if(Math.abs(points[0].x - cirPoints[0].x) < 1){
      ctx.arc(canvas.height / 2, canvas.height / 2, canvas.height / 2, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();
      console.log("hi");
    } else {
      ctx.moveTo(points[0].x, points[0].y);
      points.forEach((point, n) => {
        ctx.quadraticCurveTo(squPoints[n].x, squPoints[n].y, point.x, point.y)
      })
      ctx.quadraticCurveTo(squPoints[0].x, squPoints[0].y, points[0].x, points[0].y);
      ctx.fill();
      ctx.closePath();
    }
  } else {
    ctx.moveTo(points[0].x, points[0].y);
    for(let point of points){
      ctx.lineTo(point.x, point.y);
    }
    ctx.lineTo(points[0].x, points[0].y);
    ctx.fill();
    ctx.closePath();
  }
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

  document.getElementsByClassName("main__img")[0].addEventListener("mouseover", mouseOverCircle);
  document.getElementsByClassName("main__img")[0].addEventListener("mouseleave", mouseLeave);
  setInterval(changeColor, 100);
}

//커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴
function cursor(e) {
  mouseCursor.style.left = e.pageX + "px";
  mouseCursor.style.top = e.pageY - scrollY + "px";
}

function mouseOver(){
  target = "triangle";
}

function mouseLeave(){
  target = "square";
}

function mouseOverCircle(){
  target = "circle";
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
