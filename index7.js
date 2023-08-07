// 함수 선언식
function print() {
  console.log("hello world");
}

// 함수 표현식
let print = function () {
  console.log("hello world");
};

// 함수 선언식 vs 함수 표현식
// 함수 선언식 호이스팅O
print(); // hello world
function print() {
  console.log("hello world");
}

// 함수 표현식 호이스팅X
print(); //print is not a function
let print = function () {
  console.log("hello world");
};

// 올바른 함수 표현식 작성성
let print = function () {
  console.log("hello world");
};
print();

// 화살표형 함수
const print = () => {
  console.log("hello world");
};
print(); // hello world

// 매개변수가 존재하는 함수
function add(num1, num2) {
  console.log(num1 + num2);
}
add(10, 15); //25

// 콜백함수
function start(name, callback) {
  console.log(`안녕하세요 ${name} 입니다.`);
  callback(); // finish();
}

function finish() {
  console.log("감사합니다.");
}

start("hyobin", finish);
