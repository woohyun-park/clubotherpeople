import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  subjects = [
    {title: "water", text: ""},
    {title: "flower", text: ""},
    {title: "sky", text: ""}
  ];
  imgText = {original: `We are all otherpeople<br>
        Everyone has lived a different life<br>
        and has different thoughts.<br>
        This is a space to share creative ideas.<br>
        and to experience various perspectives`, italicized: ""}
  constructor() {
    this.updateImgText();
    this.updateSubjectText();
  }

  updateImgText(): void {
    let result: string = "";
    let isOpened: boolean = false;
    this.imgText.original.split("").forEach((char, i) => {
      if(char === "<"){
        isOpened = true;
        result += "<br>";
        return ;
      } else if(char === ">"){
        isOpened = false;
        return ;
      }
      if(isOpened === true){
        return ;
      }
      result += this.italicizeVowel(char);
    });
    this.imgText.italicized = result;
  }

  updateSubjectText(): void {
    this.subjects.forEach((subject, i) => {
      let result = "";
      subject.title.split("").forEach((char) => {
        result += this.italicizeVowel(char);
      });
      this.subjects[i].text = result;
    })
  }

  italicizeVowel(char: string): string {
    if(this.isVowel(char))
      return `<div class='italic'>${char}</div>`;
    return char;
  }

  isVowel(char: string): boolean {
    if(char === "a" || char === "e" ||
      char === "i" || char === "o" || char === "u")
      return true;
    return false;
  }
}
