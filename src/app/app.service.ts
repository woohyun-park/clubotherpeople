import { Injectable } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  actionColors = ["#8DD7C0", "#FF5768", "#01A5E4"];
  baseColor = "black";
  subjects = [
    {title: "flower", text: "", detail: "", html: [`
      <div class="detail__piece">
        <img class="detail__piece--imgLeft" src="assets/img/flower/아르장퇴유의 양귀비 꽃.jpg" alt="아르장퇴유의 양귀비 꽃.jpg">
        <div class="detail__piece--textRight">
          <div class="detail__piece--titleRight">아르장퇴유의 양귀비 꽃</div>
          <div class="detail__piece--authorRight">클로드 모네</div>
          본명 오스카 클로드 모네(Oscar-Claude Monet). 1840년 프랑스 파리에서 상인의 아들로 태어났다. 소년 시절을 르아브르에서 보냈다 그곳에서 부댕의 문하생이 되어 정식 미술 교육을 받게 되었다. 그 후 1859년 파리로 나가 피사로·시슬레·르누아르·바지유 등과 사귀게 되었다. 마네의 밝은 화풍에 끌려 밝은 야외 광선 묘사에 주력하였다. 마네를 중심으로 르누아르 및 피사로·드가·세잔 등과 함께 신예술 창조에 전력하였다. 1871년, 프로이센-프랑스 전쟁 중에는 런던으로 건너가, 그곳에서 터너 등의 작품에 영향을 받아 더욱 밝은 색조에 대한 연구를 하게 되었다.
        </div>
      </div>
      <div class="detail__line"></div>
      <div class="detail__piece">
        <div class="detail__piece--textLeft">
          <div class="detail__piece--titleLeft">양산을 든 여인</div>
          <div class="detail__piece--authorLeft">클로드 모네</div>
          이 시리즈는 본래 1876년, 모네의 아내와 아들을 모델로 시작되었습니다. 안타깝게도 모네의 아내는 32살에 일찍 세상을 떠났습니다. 이제 막 인정받기 시작하여 작품 활동에 전념해야 할 시기였지만, 홀로 어린 두 아들도 길러야 했습니다. 이때 호슈데 부인이 모네의 아이들을 돌봐 줍니다. 그녀는 모네의 작품을 많이 사주었던 부유한 벨기에 컬렉터의 부인이었습니다. 남편이 파산하고 떠나버린 후 부인은 여섯 아이들과 홀로 남습니다.
        </div>
        <img class="detail__piece--imgRight" src="assets/img/flower/양산을 든 여인.jpg" alt="양산을 든 여인.jpg">
      </div>
      <div class="detail__line"></div>
      <div class="detail__piece">
        <img class="detail__piece--imgLeft" src="assets/img/flower/수련.jpg" alt="수련.jpg">
        <div class="detail__piece--textRight">
          <div class="detail__piece--titleRight">수련</div>
          <div class="detail__piece--authorRight">클로드 모네</div>
          인상주의를 시작했고 ‘연작’을 탄생시켰다. 함께 인상주의를 함께 만든, 피사로, 르누아르, 시슬리 등은 모네의 무명생활을 버티게 해 준 힘이었다. 오랜 가난과 무명의 시련 끝에 모네는 센 강가의 작은 마을 지베르니에 정착하여, 정원의 꽃과 나무와 연못을 그렸다.<br><br>
          부를 축적할수록 모네는 그림만큼이나 사력을 다해 정원을 가꾸며 흐르는 물에 어린 수련의 그림자까지, 꽃잎의 엷은 떨림까지 놓치지 않고 정원에 핀 수련을 화폭에 담았다. 모네는 수련 연작을 그리기 위해 수련 연못을 만들었다. 수련 연작은 1차 세계 대전 전사자들을 추모하며 그린 작품이다.
        </div>
      </div>
    `]},
    {title: "perfume", text: "", detail: "", html: `
      <div class="detail__piece">
        <img class="detail__piece--imgLeft" src="assets/img/perfume/moment.png" alt="moment.png">
        <div class="detail__piece--textRight">
          <div class="detail__piece--titleRight">MOMENT</div>
          <div class="detail__piece--authorRight">박우현</div>
          향은 순간을 기억한다. 사진을 보며 지나간 추억을 떠올리듯, 기억속의 향을 맡으면 그 순간의 기억이 스멀스멀 피어오른다. 복잡미묘한 순간의 기억을 다시한번 음미해보길.
        </div>
      </div>
      <div class="detail__line"></div>
      <div class="detail__piece">
        <div class="detail__piece--textLeft">
          <div class="detail__piece--titleLeft">Nostalgia</div>
          <div class="detail__piece--authorLeft">강민혁</div>
          친했던 친구들과 오랜만에 술한잔 하고 집에 돌아가는 길, 그때 그 향수에 취해 옛 기억을 되짚어보는 나
        </div>
        <div class="test">
        <iframe class="detail__piece--iframeRight" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/474427755&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        </div>
      </div>
      <div class="detail__line"></div>
    `},
    // {title: "sky", text: ""},
    // {title: "water", text: ""},
    // {title: "sky", text: ""},
    // {title: "water", text: ""},
    // {title: "sky", text: ""},
    // {title: "water", text: ""},
  ];
  imgText = {original: `We are all otherpeople<br>
        Everyone has lived a different life<br>
        and has different thoughts.<br>
        This is a space to share creative ideas.<br>
        and to experience various perspectives`,
        italicize: ["otherpeople", "different", "different", "creative ideas", "various perspectives"],
        italicized: ""};
  constructor(public sanitizer: DomSanitizer) {
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
      let text = "";
      let detail = "";
      subject.title.split("").forEach((char) => {
        text += this.italicizeVowel(char);
        detail += this.italicizeVowelDetailTitle(char);
      });
      this.subjects[i].text = text;
      this.subjects[i].detail = detail;
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

  italicizeDetailTitle(str: string): string{
    let result: string = "";
    str.split("").forEach(char => {
      result += this.italicizeVowelDetailTitle(char);
    })
    return result;
  }

  italicizeVowelDetailTitle(char: string): string {
    if(this.isVowel(char))
      return `<div class='detail__title--cont italic__detail'>${char}</div>`;
    return `<div class="detail__title--cont">${char}</div>`;
  }

  isVowel(char: string): boolean {
    if(char === "a" || char === "e" ||
      char === "i" || char === "o" || char === "u")
      return true;
    return false;
  }

  getHtml(i: number): any{
    const str = "" + this.subjects[i].html;
    return this.sanitizer.bypassSecurityTrustHtml(str);
  }
}
