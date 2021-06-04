import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  actionColors = ["#8DD7C0", "#FF5768", "#01A5E4"];
  baseColor = "black";
  subjects = [
    {title: "flower", text: "", html: [`
      <div class="detail__piece">
        <img class="detail__piece--imgLeft" src="https://post-phinf.pstatic.net/MjAxODExMDFfMjQ0/MDAxNTQxMDc1OTYxNTQ1.swIFGuyl3AYqIIXURgGUzwhcfcHuPKQSGEqALrLXvJog.z-H2r8p-xtUxUYeJy9dqMx4QSezkf0jNwznlYr3gIhIg.JPEG/%EB%AA%A8%EB%84%A4_%EC%95%84%EB%A5%B4%EC%9E%A5%ED%87%B4%EC%9C%A0%EC%9D%98_%EC%96%91%EA%B7%80%EB%B9%84%EA%BD%83%281873%29.JPG?type=w1200" alt="">
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
        <img class="detail__piece--imgRight" src="https://lh3.googleusercontent.com/proxy/EfRnrbc_YQAvPu0m6GqJ1FwA4gowia46h-HDaE_k_KYXV6SvRtqooUgLTXhOqDUrKDdGCvzsr1d02xfbUI7o3ASbq8Ga2ZQznu1WoV4HU_6zfhMCEfdioTelq7pTbXa_4q-WnacyoxgcOH2Vs5_ZXg" alt="">
      </div>
      <div class="detail__line"></div>
      <div class="detail__piece">
        <img class="detail__piece--imgLeft" src="http://img.khan.co.kr/news/r/1100xX/2019/01/14/2019011401001542500118421.jpg" alt="">
        <div class="detail__piece--textRight">
          <div class="detail__piece--titleRight">수련</div>
          <div class="detail__piece--authorRight">클로드 모네</div>
          인상주의를 시작했고 ‘연작’을 탄생시켰다. 함께 인상주의를 함께 만든, 피사로, 르누아르, 시슬리 등은 모네의 무명생활을 버티게 해 준 힘이었다. 오랜 가난과 무명의 시련 끝에 모네는 센 강가의 작은 마을 지베르니에 정착하여, 정원의 꽃과 나무와 연못을 그렸다.<br><br>
          부를 축적할수록 모네는 그림만큼이나 사력을 다해 정원을 가꾸며 흐르는 물에 어린 수련의 그림자까지, 꽃잎의 엷은 떨림까지 놓치지 않고 정원에 핀 수련을 화폭에 담았다. 모네는 수련 연작을 그리기 위해 수련 연못을 만들었다. 수련 연작은 1차 세계 대전 전사자들을 추모하며 그린 작품이다.
        </div>
      </div>
    `]},
    {title: "perfume", text: "", html: `
      <div class="detail__piece">
        <img class="detail__piece--imgLeft" src="assets/img/perfume/moment.png" alt="moment.png">
        <div class="detail__piece--textRight">
          <div class="detail__piece--titleRight">MOMENT</div>
          <div class="detail__piece--authorRight">박우현</div>
          향은 순간을 기억한다. 사진을 보며 지나간 추억을 떠올리듯, 기억속의 향을 맡으면 그 순간의 기억이 스멀스멀 피어오른다. 복잡미묘한 순간의 기억을 다시한번 음미해보길.
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
