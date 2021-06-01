import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

import * as p5 from 'p5';

@Component({
  selector: 'app-water',
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.scss']
})
export class WaterComponent implements OnInit {
  subject;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    console.log(this.subject);
  }

  ngOnInit(): void {
    new p5(p => {
      let x = 1000;
      let y = 1000;

      p.setup = () => {
        let width = parseFloat(window.getComputedStyle((<HTMLElement>document.querySelector(".subject__img"))).width);
        p.createCanvas(width, width);
        window.addEventListener('resize', p.resize, false);
      };

      p.resize = () => {
        let width = parseFloat(window.getComputedStyle((<HTMLElement>document.querySelector(".subject__img"))).width);
        p.canvas.style = `width: ${width}px;height: ${width}px;`;
      }

      p.draw = () => {
        // p.blendMode(p.BLEND);
      	// p.background('rgba(100%,100%,100%,0.1)');
      	// // //noStroke();
      	p.blendMode(p.REPLACE);
      	p.noStroke();
      	p.translate(p.width/2,p.height/2);
      	p.fill('rgba(0, 0, 0, 1)');
      	p.drawLiq(18,50,20,100);
      };

      p.drawLiq = (vNnum,nm,sm,fcm) => {
      	p.push();
      	p.rotate(p.frameCount/fcm);
      	let dr = p.TWO_PI/vNnum;
      	p.beginShape();
      	for(let i = 0; i  < vNnum + 3; i++){
      		let ind = i%vNnum;
      		let rad = dr *ind;
      		let r = p.height*0.3 + p.noise(p.frameCount/nm + ind) * p.height*0.1 + p.sin(p.frameCount/sm + ind)*p.height*0.05;
      		p.curveVertex(p.cos(rad)*r, p.sin(rad)*r);
      	}
      	p.endShape();
      	p.pop();
      }
    }, this.el.nativeElement);
  }

}
