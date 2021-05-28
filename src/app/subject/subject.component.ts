import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SubjectComponent implements OnInit {
  subjects = [
    {title: "water", text: ""},
    {title: "flower", text: ""},
    {title: "sky", text: ""}
  ];
  constructor() {
    this.changeVowelFont();
  }

  ngOnInit(): void {
  }

  changeVowelFont(): void {
    this.subjects.forEach((subject, i) => {
      let result = "";
      subject.title.split("").forEach((char) => {
        if(this.isVowel(char)){
          result += `<div class='italic'>${char}</div>`;
        } else {
          result += char;
        }
      });
      this.subjects[i].text = result;
    })
  }

  isVowel(char: string): boolean {
    if(char === "a" || char === "e" ||
      char === "i" || char === "o" || char === "u")
      return true;
    return false;
  }
}
