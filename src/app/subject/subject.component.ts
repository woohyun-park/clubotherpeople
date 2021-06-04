import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from "../app.service";

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SubjectComponent implements OnInit {

  constructor(public appService: AppService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
  }

  movePage(subjectTitle): void {
    this.router.navigate([`/subject/${subjectTitle}`]);
    window.scrollTo(0, 0);
  }
}
