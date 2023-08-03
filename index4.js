// 함수
let num1 = 10;
let num2 = 15;
let sum = num1 + num2;
console.log(sum); //25

let num3 = 1;
let num4 = 5;
let sum2 = num3 + num4;
console.log(sum2); //6

// 함수 선언, 호출, 매개변수
function add(num1, num2) {
  console.log(num1 + num2);
}
add(10, 15); //25

// return문
function add(num1, num2) {
  return num1 + num2;
}
console.log(`두 숫자를 더한 결과는 ${add(10, 15)} 입니다.`);

function add(num1, num2) {
  return num1 + num2;
  console.log("함수 호출");
}
console.log(`두 숫자를 더한 결과는 ${add(10, 15)} 입니다.`);

// Early return pattern 미적용
function func(num) {
  if (num > 0) {
    if (num >= 10) {
      console.log("num의 값이 10보다 크거나 같습니다.");
    } else {
      console.log("num의 값이 0보다 크고 10보다 작습니다.");
    }
  } else if (num === 0) {
    console.log("num의 값이 0입니다.");
  } else {
    console.log("num의 값이 0보다 작습니다.");
  }
}
func(15);

// Early return pattern 적용
function func(num) {
  if (num === 0) return "num의 값이 0입니다.";
  if (num < 0) return "num의 값이 0보다 작습니다.";
  if (num >= 10) return "num의 값이 10보다 크거나 같습니다.";
  return "num의 값이 0보다 크고 10보다 작습니다";
}
console.log(func(15));

// IIFE 함수 (즉시 실행 함수)
(function () {
  console.log("자바스크립트");
})();

// 코드의 흐름
function func() {
  console.log("2");
  console.log("3");
}
console.log("1");
func();
console.log("4");

// 지역변수
function add(num1, num2) {
  let sum = num1 + num2;
  return sum;
}
add(10, 15);
console.log(sum);

// 외부변수
let sum = 0;
function add(num1, num2) {
  sum = num1 + num2;
}
add(10, 15);
console.log(sum); //25
