// 연산자
let number = 25;
console.log(number + 5); //30
console.log(number - 5); //20
console.log(number * 5); //125
console.log(number / 5); //5

// 산술 연산자
// 사칙 연산자
let num1 = 10;
let num2 = 5;
console.log(num1 + num2); // 15
console.log(num1 - num2); // 5
console.log(num1 * num2); // 50
console.log(num1 / num2); // 2

// 나머지 연산자
let num3 = 10;
let num4 = 5;
console.log(num3 % 2);
console.log(num4 % 2);

// 증감 연산자
let num5 = 10;
console.log(num5++); //후위연산 -> 10
console.log(num5); // 현재 num 값 -> 11
console.log(++num5); //전위연산 -> 12
console.log("=====");
let num6 = 10;
console.log(num6--); //후위연산 -> 10
console.log(num6); // 현재 num 값 -> 9
console.log(--num6); //전위연산 -> 8

// 대입 연산자
let num7 = 20;
num7 = num7 + 5;
console.log(num7); // 25

// 복합 대입 연산자
let num8 = 20;
num8 += 5;
console.log(num8); // 25

let num9 = 20;
num9 += 5; // num = num + 5
num9 -= 5; // num = num - 5
num9 *= 5; // num = num * 5
num9 /= 5; // num = num / 5

// 논리 연산자
// NOT
let isOpen = false;
let isClicked = true;
console.log(!isOpen); // true
console.log(!isClicked); // false

// OR
let a1 = true || true; // true
let b1 = true || false; // true
let c1 = false || true; // true
let d1 = false || false; // false
console.log(a1, b1, c1, d1);

// AND
let a2 = true && true; // true
let b2 = true && false; // false
let c2 = false && true; // false
let d2 = false && false; // false
console.log(a2, b2, c2, d2);

// 비교 연산자
// 일치
let num10 = 10;
let num11 = "10";
console.log(num10 === num11); // false (값, 자료형 비교)
console.log(num10 == num11); // true (값 비교)

// 불일치
let num12 = 10;
let num13 = "10";
console.log(num12 !== num13); // true (값, 자료형 비교)
console.log(num12 != num13); // false (값 비교)

// 대소 비교
let a3 = 10;
let b3 = 20;
let c3 = 10;
console.log(a3 < b3); // true
console.log(a3 > b3); // false
console.log(b3 >= c3); // true
console.log(b3 > c3); // true
console.log(a3 <= c3); // true
console.log(a3 > c3); // false

// 연결 연산자
let a4 = "안녕";
let b4 = "자바스크립트";
console.log(a4 + b4); // 안녕자바스크립트

// null 병합 연산자 : ?? 왼쪽의 값이 null이거나 undefined인 경우 오른쪽 값 대입
let num14;
num14 = num14 ?? 20; //20 (undefined이므로)
console.log(num14);

let num15 = 100;
num15 = num15 ?? 20;
console.log(num15); //100

// 삼항 연산자
let num16 = 100;
console.log(num16 % 2 === 0 ? "짝수" : "홀수");
