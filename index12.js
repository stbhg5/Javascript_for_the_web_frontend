// concat
let array1 = ["green", "blue"];
let array2 = ["purple", "yellow"];
console.log(array1.concat(array2));

// join
let colors = ["green", "blue", "purple"];
console.log(colors.join());
console.log(colors.join(" "));

// sort
let colors = ["green", "blue", "purple"];
colors.sort();
console.log(colors);

// sort 내림차순 정렬
const compare = (a, b) => {
  if (a > b) return -1;
  else if (a < b) return 1;
  else return 0;
};
let colors = ["green", "blue", "purple"];
colors.sort(compare);
console.log(colors);

// sort 숫자 배열 정렬 (사전순)
let numbers = [1, 100, 25, 50, 120, 3];
numbers.sort();
console.log(numbers); // [1, 100, 120, 25, 3, 50]

// sort 숫자 배열 정렬 (숫자 크기 오름차순)
const compare = (a, b) => {
  // 오름차순
  return a - b;
};
let numbers = [1, 100, 25, 50, 120, 3];
numbers.sort(compare);
console.log(numbers); // [1, 3, 25, 50, 100, 120]

// sort 숫자 배열 정렬 (숫자 크기 내림차순)
const compare = (a, b) => {
  //내림차순
  return b - a;
};
let numbers = [1, 100, 25, 50, 120, 3];
numbers.sort(compare);
console.log(numbers); // [120, 100, 50, 25, 3, 1]

// forEach를 활용한 배열요소 합 구하기
let numbers = [1, 100, 25, 50];
let sum = 0;
numbers.forEach((elm) => {
  sum += elm;
});
console.log(sum); //176

// reduce
let numbers = [1, 100, 25, 50];
let sum = numbers.reduce((acc, cur, idx) => {
  console.log(acc, cur, idx);
  return acc + cur;
}, 0);
console.log(sum); //176

// reduce 초기값 변경
let numbers = [1, 100, 25, 50];
let sum = numbers.reduce((acc, cur, idx) => {
  console.log(acc, cur, idx);
  return acc + cur;
}, 10);
console.log(sum); //186

// isArray
console.log(Array.isArray([1, 100, 50, 3])); // true
console.logArray.isArray({ id: 3, color: "purple" })); // false
console.logArray.isArray("string")); // false
console.logArray.isArray(undefined)); // false