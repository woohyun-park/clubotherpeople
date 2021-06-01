import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from "../app.service";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SubjectComponent implements OnInit {

  constructor(public appService: AppService) {}

  ngOnInit(): void {
  }

  displayText(n: number): void {
    let node = <HTMLElement>(document.getElementsByClassName("subject__text")[n]);
    node.style.opacity = "1";
  }

  hideText(n: number): void {
    let node = <HTMLElement>(document.getElementsByClassName("subject__text")[n]);
    node.style.opacity = "0";
  }
}
