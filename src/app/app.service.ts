import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  actionColors = ["#8DD7C0", "#FF5768", "#01A5E4"];
  baseColor = "black";
  subjects = [
    // {title: "water", text: ""},
    // {title: "flower", text: ""},
    // {title: "sky", text: ""}
    {title: "perfume", text: ""}
  ];
  imgText = {original: `We are all otherpeople<br>
        Everyone has lived a different life<br>
        and has different thoughts.<br>
        This is a space to share creative ideas.<br>
        and to experience various perspectives`,
        italicize: ["otherpeople", "different", "different", "creative ideas", "various perspectives"],
        italicized: ""};
  constructor() {
    this.updateImgText();
    this.updateSubjectText();
  }

  updateImgText(): void {
    let result: string = "";
    let prev: number = 0;
    this.imgText.italicize.forEach((str) => {
      const index = this.imgText.original.indexOf(str, prev)
      if(index != -1){
        result += this.imgText.original.slice(prev, index);
        result += this.italicizeStr(str);
      }
      prev = index + str.length;
    })
    result += this.imgText.original.slice(prev);
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

  italicizeStr(str: string): string{
    let result: string = "";
    str.split("").forEach(char => {
      result += this.italicizeVowel(char);
    })
    return result;
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
