console.log("hello world");

// 변수
// let 이름 = 값;
let color = "skyblue";
console.log(color); // skyblue
color = "yellow";
console.log(color); // yellow

// 긴 변수명 표기법법
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
