// 기본 변수 할당
let colors = ["green", "blue", "purple"];
let c1 = colors[0]; // "green"
let c2 = colors[1]; // "blue"
let c3 = colors[2]; // "purple"
console.log(c1); // "green"
console.log(c2); // "blue"
console.log(c3); // "purple"

// 구조 분해 할당
let colors = ["green", "blue", "purple"];
let [c1, c2, c3] = colors;
console.log(c1); // "green"
console.log(c2); // "blue"
console.log(c3); // "purple"

// 선언 분리 할당
let c1, c2, c3;
[c1, c2, c3] = ["green", "blue", "purple"];
console.log(c1); // "green"
console.log(c2); // "blue"
console.log(c3); // "purple"

// 배열의 길이보다 적은 변수에 배열 요소를 할당
let c1, c2;
[c1, c2] = ["green", "blue", "purple"];
console.log(c1); // "green"
console.log(c2); // "blue"

// 배열의 길이보다 더 많은 수의 변수에 값을 할당
let c1, c2, c3, c4;
[c1, c2, c3, c4] = ["green", "blue", "purple"];
console.log(c1); // "green"
console.log(c2); // "blue"
console.log(c3); // "purple"
console.log(c4); // undefined

// 기본값 설정
let c1, c2, c3, c4;
[c1, c2, c3, c4 = "yellow"] = ["green", "blue", "purple"];
console.log(c1); // "green"
console.log(c2); // "blue"
console.log(c3); // "purple"
console.log(c4); // "yellow"

// 변수 값 교환하기
let a = 10;
let b = 5;
let tmp;
console.log(a, b);
tmp = a;
a = b;
b = tmp;
console.log(a, b);

// 구조분해를 이용한 변수 값 교환하기
let a = 10;
let b = 5;
[a, b] = [b, a];
console.log(a); // 5
console.log(b); // 10

// 객체의 기본 할당
let colors = {
  c1: "green",
  c2: "blue",
  c3: "purple",
};
let c1 = colors.c1;
let c2 = colors.c2;
let c3 = colors.c3;
console.log(c1); // green
console.log(c2); // blue
console.log(c3); // purple

// 객체의 구조 분해 할당
let colors = {
  c1: "green",
  c2: "blue",
  c3: "purple",
};
let { c1, c2, c3 } = colors;
console.log(c1); // green
console.log(c2); // blue
console.log(c3); // purple

// 구조분해를 사용하지 않고, 객체 프로퍼티의 값을 새로운 color1, color2, color3 라는 변수에 할당
let colors = {
  c1: "green",
  c2: "blue",
  c3: "purple",
};
let color1 = colors.c1;
let color2 = colors.c2;
let color3 = colors.c3;
console.log(color1); // green
console.log(color2); // blue
console.log(color3); // purple

// 객체의 구조 분해 할당을 사용한 코드로 변경
let colors = {
  c1: "green",
  c2: "blue",
  c3: "purple",
};
let { c1: color1, c2: color2, c3: color3 } = colors;
console.log(color1); // green
console.log(color2); // blue
console.log(color3); // purple

// 객체의 프로퍼티 수보다 더 많은 수의 변수에 값을 할당
let colors = {
  c1: "green",
  c2: "blue",
  c3: "purple",
};
let { c1, c2, c3, c4 } = colors;
console.log(c1); // green
console.log(c2); // blue
console.log(c3); // purple
console.log(c4); // undefined

// 객체의 기본값 설정
let colors = {
  c1: "green",
  c2: "blue",
  c3: "purple",
};
let { c1, c2, c3, c4 = "yellow" } = colors;
console.log(c1); // green
console.log(c2); // blue
console.log(c3); // purple
console.log(c4); // yellow
