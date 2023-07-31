console.log("hello world");

// 변수
// let 이름 = 값;
let color = "skyblue";
console.log(color); // skyblue
color = "yellow";
console.log(color); // yellow

// 긴 변수명 표기법
let iscatordog;
let isCatOrDog; // 카멜 표기법

// 동적 타입과 typeof 연산
let nowType = "안녕하세요";
// typeof 연산자 : 변수의 현재 타입을 확인
console.log(typeof nowType); // string

nowType = 100;
console.log(typeof nowType); // number

// 상수
const color2 = "skyblue";
color2 = "yellow";

console.log(color); //에러 : TypeError: "color2" is read-only

// 자료형
let number = 123;
number = "123"; // 원시 타입 : 하나의 고정된 값

let array = [1, "2", 3]; //비원시 타입 : 한 번에 여러 개의 값

// 숫자형
let number2 = 25;
console.log(number2 + 5); //30
console.log(number2 - 5); //20
console.log(number2 * 5); //125
console.log(number2 / 5); //5

// 정수, 소수, 특수한 숫자
let number3 = 25;
number3 = 10.00123;
number3 = Infinity; // 무한대
number3 = NaN; // Not A Number : 부정확한 연산시 반환

let number4 = 10;
console.log(number4 / 0); // Infinity

let number5 = 10;
console.log("자바스크립트" / number5); // NaN

// BigInt형
let big1 = 9007199254740991n;
let big2 = BigInt("9007199254740991");

let big3 = 10n;
let big4 = 5n;
console.log(big3 + big4); // 15

// 문자형
let name1 = "hyobin"; //큰따옴표
let name2 = "hyobin"; //작은따옴표
let name3 = `hyobin`; //역따옴표(백틱)

let name = "hyobin";
let intro = `제 이름은 ${name} 입니다.`; // ${} : 템플릿 리터럴
console.log(intro); // 제 이름은 hyobin 입니다.

// Boolean형
let isClicked = false; //버튼이 클릭되었는지 안되었는지
let isOpen = true; // modal이 열렸는지 안열렸는지

if (isClicked) {
  console.log("클릭O");
} else {
  console.log("클릭X");
}

// Null, Undefined
// let names = null;
let names;
console.log(name); //null??? -> undefined

// 형 변환
let num1 = "15";
let num2 = 5;

console.log(num1 / num2); // 3 - 묵시적 형 변환
console.log(num1 + num2); // 155
console.log(parseInt(num1) + num2); // 20 - 명시적 형 변환
