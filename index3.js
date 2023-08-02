// 조건문
// if문
let num1 = 10;
if (num1 === 10) {
  //조건
  console.log("num1의 값은 10 입니다."); //실행 코드
}

let num2 = 5;
if (num2 === 10) {
  //조건
  console.log("num2의 값은 10 입니다."); //실행 코드
}

// if-else문
let num3 = 5;
if (num3 === 10) {
  console.log(`num3값은 10입니다.`);
} else {
  console.log(`num3값은 ${num3}입니다.`); // 백틱을 이용해 문자열 묶음, 템플릿 리터럴
}

// if-else if문
let num4 = 5;
if (num4 === 10) {
  console.log("num4값은 10입니다.");
} else if (num4 < 10) {
  console.log("num4값은 10보다 작습니다.");
} else {
  console.log("num4값은 10보다 큽니다.");
}

// switch/case문
let fruit = "apple";
switch (fruit) {
  case "banana":
    console.log("바나나");
    break;
  case "orange":
    console.log("오렌지");
    break;
  case "apple":
    console.log("사과");
    break;
  case "grape":
    console.log("포도");
    break;
  default:
    console.log("다른 과일");
}

// break; 작성하지 않음
let fruit2 = "apple";
switch (fruit2) {
  case "banana":
    console.log("바나나");
  case "orange":
    console.log("오렌지");
  case "apple":
    console.log("사과");
  case "grape":
    console.log("포도");
  default:
    console.log("다른 과일");
}

// default 실행
let fruit3 = "pineapple";
switch (fruit3) {
  case "banana":
    console.log("바나나");
    break;
  case "orange":
    console.log("오렌지");
    break;
  case "apple":
    console.log("사과");
    break;
  case "grape":
    console.log("포도");
    break;
  default:
    console.log("다른 과일");
}
