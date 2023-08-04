// 스코프
// 전역 스코프와 지역 스코프
const num = 10; //전역 스코프
function print() {
  const num = 100; //지역 스코프
  console.log(`지역 스코프 ${num}`);
}
print();
console.log(`전역 스코프 ${num}`);
// - 출력결과
// 지역 스코프 100
// 전역 스코프 10

// 블록 스코프
function print() {
  for (let i = 0; i < 10; i++) {
    console.log(`블록 스코프 : ${i}`);
  }
  console.log(i); //ERROR
}
print();

// let과 var
let num1 = 10;
var num2 = 20;
num1 = 100;
num2 = 200;
console.log(num1); // 100
console.log(num2); // 200

// 변수 선언 방식
let num1 = 10;
let num1 = 100;
console.log(num1); //ERROR

var num2 = 20;
var num2 = 200;
console.log(num2); //200

// 함수 스코프
function print() {
  for (var i = 0; i < 10; i++) {
    console.log(`블록 스코프 : ${i}`);
  }
  console.log(i);
}
print();
