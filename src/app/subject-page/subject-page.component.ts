import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from "../app.service";

@Component({
  selector: 'app-subject-page',
  templateUrl: './subject-page.component.html',
  styleUrls: ['./subject-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SubjectPageComponent implements OnInit {
  title: string;
  html: string;
  index: number;

  constructor(public appService: AppService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.title = this.router.url.split("/")[2];
    this.appService.subjects.forEach((subject, n) => {
      if(subject.title === this.title){
        this.index = n;
      }
    });
    this.html = this.appService.subjects[this.index].text.replace(/italic/gi, "italic__detail");
  }

  moveBack(): void{
    this.router.navigateByUrl('/home');
  }

}
