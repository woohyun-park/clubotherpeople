import { Component, OnInit } from '@angular/core';
import { AppService } from "../app.service";

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private appService: AppService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.animateOrbit();
  }

  //로고를 눌렀을때 홈페이리자면 페이지를 리로드. 다른 페이지라면 홈페이지로 이동
  reload(): void{
    if(this.router.routerState.snapshot.url === '/home'){
      location.reload();
    } else{
      this.router.navigate(['/home']);
    }
  }

  animateOrbit(): void {
    let count = 0;
    setInterval(() => {
      const path = <HTMLElement>(document.querySelector(".center__orbit--path"));
      if(count % 3 === 0){
        path.style.fill = this.appService.actionColors[count % 3];
      } else if(count % 3 === 1){
        path.style.fill = this.appService.actionColors[count % 3];
      } else {
        path.style.fill = this.appService.actionColors[count % 3];
      }
      count++;
    }, 1000);
  }

  displayOrbit(): void{
    //orbit의 투명도를 1로 설정
    const orbit = <HTMLElement>(document.querySelector(".center__orbit"));
    orbit.style.opacity = "1";

    //square, triangle, circle을 차례로 scale 및 색변경
    const square = <HTMLElement>(document.querySelector(".center__text--square"));
    const triangle = <HTMLElement>(document.querySelector(".center__text--triangle"));
    const circle = <HTMLElement>(document.querySelector(".center__text--circle"));
    square.style.transform = "scale(1.1)";
    square.style.color = this.appService.actionColors[0];
    const timer = setTimeout(() => {
      //혹시라도 전단계가 실행이 되지 않을 수 있으니, 전단계인 square도 다시한번 상태변경
      square.style.transform = "scale(1.1)";
      square.style.color = this.appService.actionColors[0];
      triangle.style.transform = "scale(1.15)";
      triangle.style.color = this.appService.actionColors[1];
      setTimeout(() => {
        //역시 전단계가 실행이 되지 않을 수 있으니, 전단계와 전전단계 모두 다시한번 상태변경
        square.style.transform = "scale(1.1)";
        square.style.color = this.appService.actionColors[0];
        triangle.style.transform = "scale(1.15)";
        triangle.style.color = this.appService.actionColors[1];
        circle.style.transform = "scale(1.1) skewX(-15deg)";
        circle.style.color = this.appService.actionColors[2];
      }, 100);
    }, 100);
  }

  hideOrbit(): void{
    const orbit = <HTMLElement>(document.querySelector(".center__orbit"));
    orbit.style.opacity = "0";

    const square = <HTMLElement>(document.querySelector(".center__text--square"));
    const triangle = <HTMLElement>(document.querySelector(".center__text--triangle"));
    const circle = <HTMLElement>(document.querySelector(".center__text--circle"));
    circle.style.transform = "scale(1) skewX(-15deg)";
    circle.style.color = this.appService.baseColor;
    const timer = setTimeout(() => {
      circle.style.transform = "scale(1) skewX(-15deg)";
      circle.style.color = this.appService.baseColor;
      triangle.style.transform = "scale(1)";
      triangle.style.color = this.appService.baseColor;
      setTimeout(() => {
        circle.style.transform = "scale(1) skewX(-15deg)";
        circle.style.color = this.appService.baseColor;
        triangle.style.transform = "scale(1)";
        triangle.style.color = this.appService.baseColor;
        square.style.transform = "scale(1)";
        square.style.color = this.appService.baseColor;
      }, 100);
    }, 100);
  }
}
