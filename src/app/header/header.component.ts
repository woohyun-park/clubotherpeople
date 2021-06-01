import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  step: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let count = 0;
    setInterval(() => {
      const path = <HTMLElement>(document.querySelector(".center__orbit--path"));
      if(count % 3 === 0){
        path.style.fill = "#8DD7C0";
      } else if(count % 3 === 1){
        path.style.fill = "#FF5768";
      } else {
        path.style.fill = "#01A5E4";
      }
      count++;
    }, 1000);
  }

  reload(): void{
    if(this.router.routerState.snapshot.url === '/home'){
      location.reload();
    } else{
      this.router.navigate(['/home']);
    }
  }

  displayOrbit(): void{
    const orbit = <HTMLElement>(document.querySelector(".center__orbit"));
    orbit.style.opacity = "1";

    const square = <HTMLElement>(document.querySelector(".center__text--square"));
    const triangle = <HTMLElement>(document.querySelector(".center__text--triangle"));
    const circle = <HTMLElement>(document.querySelector(".center__text--circle"));
    square.style.transform = "scale(1.1)";
    square.style.color = "#FF5768";
    let timer = setTimeout(() => {
      square.style.transform = "scale(1.1)";
      square.style.color = "#FF5768";
      triangle.style.transform = "scale(1.15)";
      triangle.style.color = "#8DD7C0";
      setTimeout(() => {
        square.style.transform = "scale(1.1)";
        square.style.color = "#FF5768";
        triangle.style.transform = "scale(1.15)";
        triangle.style.color = "#8DD7C0";
        circle.style.transform = "scale(1.1) skewX(-15deg)";
        circle.style.color = "#01A5E4";
      }, 100);
    }, 100);
  }
  hideOrbit(): void{
    const orbit = <HTMLElement>(document.querySelector(".center__orbit"));
    orbit.style.opacity = "0";
    const center = <HTMLElement>(document.querySelector(".center"));
    center.style.color = "black";

    const square = <HTMLElement>(document.querySelector(".center__text--square"));
    const triangle = <HTMLElement>(document.querySelector(".center__text--triangle"));
    const circle = <HTMLElement>(document.querySelector(".center__text--circle"));
    circle.style.transform = "scale(1) skewX(-15deg)";
    circle.style.color = "black";
    let timer = setTimeout(() => {
      circle.style.transform = "scale(1) skewX(-15deg)";
      circle.style.color = "black";
      triangle.style.transform = "scale(1)";
      triangle.style.color = "black";
      setTimeout(() => {
        circle.style.transform = "scale(1) skewX(-15deg)";
        circle.style.color = "black";
        triangle.style.transform = "scale(1)";
        triangle.style.color = "black";
        square.style.transform = "scale(1)";
        square.style.color = "black";
      }, 100);
    }, 100);
  }
}
