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
    //url 세부주소를 title로 저장
    this.title = this.router.url.split("/")[2];
    //subject에 몇번째에 인덱스에 현재 페이지가 위치해있는지 확인
    this.appService.subjects.forEach((subject, n) => {
      if(subject.title === this.title){
        this.index = n;
      }
    });
    //title과 index를 가지고 html을 저장
    this.html = this.appService.subjects[this.index].detail;
  }

  moveBack(): void{
    this.router.navigateByUrl('/home');
  }

}
