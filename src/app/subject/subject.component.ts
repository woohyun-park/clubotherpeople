import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SubjectComponent implements OnInit {
  subjects = [
    {title: "water", text: "w<div class='italic'>a</div>t<div class='italic'>e</div>r"},
    {title: "flower", text: "fl<div class='italic'>o</div>w<div class='italic'>e</div>r"},
    {title: "sky", text: "sky"}
  ];
  constructor() {

  }

  ngOnInit(): void {
  }

}
