// 호이스팅
// 함수 호이스팅
print();
function print() {
  console.log("hello world");
}

// 자바스크립트 엔진이 코드 해석시
function print() {
  console.log("hello world");
}
print();

// 변수 호이스팅
console.log(num); // undefined
var num = 10;

// 자바스크립트 엔진이 코드 해석시
var num; // 변수 호이스팅은 선언문만 올라감
console.log(num); // undefined
num = 10;

// let과 const 변수 선언
console.log(num1); // error
let num1 = 10;

console.log(num2); // error
const num2 = 15;
