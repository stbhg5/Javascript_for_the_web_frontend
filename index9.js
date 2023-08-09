// 배열 생성
// 배열 생성자
let arr = new Array();
console.log(arr); // []

let array1 = new Array(1, 2, 3);
let array2 = new Array(3);
console.log(array1); // [1, 2, 3]
console.log(array2); // [undefined, undefined, undefined]

// 배열 리터럴
let arr = [];
console.log(arr); // []

let array1 = [1, 2, 3];
let array2 = [3];
console.log(array1); // [1, 2, 3]
console.log(array2); // [3]

// 배열 특징
// 다양한 자료형의 배열의 요소
let arr = [
  { name: "홍길동" },
  1,
  "array",
  function () {
    console.log("hello world!");
  },
  null,
  undefined,
];
console.log(arr);

// 배열 다루기
// 배열 요소 접근
let arr = [1, "hello", null];
console.log(arr[0]); // 1
console.log(arr[1]); // hello
console.log(arr[2]); // null

// 배열 요소 추가
// push
let arr = [1, "hello", null];
arr.push(4);
console.log(arr); // [1, "hello", null, 4]

// unshift
let arr = [1, "hello", null];
arr.unshift(0);
console.log(arr); // [0, 1, "hello", null]

// 배열 요소 수정
let arr = [1, "hello", null];
arr[0] = 5;
arr[2] = undefined;
console.log(arr); // [5, "hello", undefined]

// const로 선언된 배열의 요소 수정
const arr = [1, "hello", null];
arr[0] = 5;
arr[2] = undefined;
console.log(arr); // [5, "hello", undefined]

// 배열 요소 삭제
// pop
let arr = [1, "hello", null];
arr.pop();
console.log(arr); // [1, "hello"]

// shift
let arr = [1, "hello", null];
arr.shift();
console.log(arr); // ["hello", null]

// 배열의 길이 알아내기
let arr = [1, "hello", null];
console.log(arr.length); // 3

// 배열의 크기를 변경 후 출력
arr.pop();
console.log(arr.length); //2
