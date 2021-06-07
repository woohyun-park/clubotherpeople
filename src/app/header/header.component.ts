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
    this.changeOrbitColor();
  }

  //로고를 눌렀을때 홈페이리자면 페이지를 리로드. 다른 페이지라면 홈페이지로 이동
  reload(): void{
    if(this.router.routerState.snapshot.url === '/home'){
      location.reload();
    } else{
      this.router.navigate(['/home']);
    }
    window.scrollTo(0, 0);
  }

  changeOrbitColor(): void {
    let count = 0;
    setInterval(() => {
      const path = <HTMLElement>(document.querySelector(".center__orbit--path"));
      path.style.fill = this.appService.actionColors[count % 3];
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

    this.changeTransformAndColor(square, "scale(1.1)", this.appService.actionColors[0]);
    const timer = setTimeout(() => {
      //혹시라도 전단계가 실행이 되지 않을 수 있으니, 전단계인 square도 다시한번 상태변경
      this.changeTransformAndColor(square, "scale(1.1)", this.appService.actionColors[0]);
      this.changeTransformAndColor(triangle, "scale(1.15)", this.appService.actionColors[1]);
      setTimeout(() => {
        //역시 전단계가 실행이 되지 않을 수 있으니, 전단계와 전전단계 모두 다시한번 상태변경
        this.changeTransformAndColor(square, "scale(1.1)", this.appService.actionColors[0]);
        this.changeTransformAndColor(triangle, "scale(1.15)", this.appService.actionColors[1]);
        this.changeTransformAndColor(circle, "scale(1.1) skewX(-15deg)", this.appService.actionColors[2]);
      }, 100);
    }, 100);
  }

  hideOrbit(): void{
    const orbit = <HTMLElement>(document.querySelector(".center__orbit"));
    orbit.style.opacity = "0";

    const square = <HTMLElement>(document.querySelector(".center__text--square"));
    const triangle = <HTMLElement>(document.querySelector(".center__text--triangle"));
    const circle = <HTMLElement>(document.querySelector(".center__text--circle"));

    this.changeTransformAndColor(circle, "scale(1) skewX(-15deg)", this.appService.baseColor);
    const timer = setTimeout(() => {
      this.changeTransformAndColor(circle, "scale(1) skewX(-15deg)", this.appService.baseColor);
      this.changeTransformAndColor(triangle, "scale(1)", this.appService.baseColor);
      setTimeout(() => {
        this.changeTransformAndColor(circle, "scale(1) skewX(-15deg)", this.appService.baseColor);
        this.changeTransformAndColor(triangle, "scale(1)", this.appService.baseColor);
        this.changeTransformAndColor(square, "scale(1)", this.appService.baseColor);
      }, 100);
    }, 100);
  }

  changeTransformAndColor(shape, transform, color){
    shape.style.transform = transform;
    shape.style.color = color;
  }
}
