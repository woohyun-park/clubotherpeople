import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from "../app.service";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SubjectComponent implements OnInit {

  constructor(public appService: AppService) {

  }

  ngOnInit(): void {
  }
}
