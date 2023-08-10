// 반복문 사용하지 않음
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// for문
// 1~5
for (let i = 1; i < 6; i++) {
  console.log(i);
}
// 5~1
for (let i = 5; i > 0; i--) {
  console.log(i);
}

// while문
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// 배열과 반복문
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 객체와 반복문
let person = {
  name: "홍길동",
  age: 25,
  height: 180,
};
console.log(person); // {name: "홍길동", age: 25, height: 180}

// 객체를 배열로 변경하는 3가지 방법
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

// Object.keys()
console.log(Object.keys(person)); // ["name", "age", "height"]
let newArray = Object.keys(person); // person 객체를 [key, key] 형태의 배열로 변환
for (let i = 0; i < newArray.length; i++) {
  // newArray 배열의 요소 순서대로 접근
  let nowKey = newArray[i]; // key
  console.log(`key : ${nowKey}, value : ${person[nowKey]}`);
}

// Object.values()
console.log(Object.values(person)); // ["홍길동", 25, 180]
let newArray = Object.values(person); // person 객체를 [value, value] 형태의 배열로 변환
for (let i = 0; i < newArray.length; i++) {
  console.log(`value : ${newArray[i]}`);
}

// Object.entries()
console.log(Object.entries(person)); //[ ["name", "홍길동"], ["age", 25], ["height",180] ]
let newArray = Object.entries(person); // person 객체를 [[key,value], [key,value]] 형태의 배열로 변환
for (let i = 0; i < newArray.length; i++) {
  console.log(`key : ${newArray[i][0]}, value : ${newArray[i][1]}`);
}

// for...of
let arr = [1, 2, 3, 4, 5];
for (let i of arr) {
  console.log(i);
}

// for...in
let person = {
  name: "홍길동",
  age: 25,
  height: 180,
};
for (let key in person) {
  console.log(`${key} : ${person[key]}`);
}
