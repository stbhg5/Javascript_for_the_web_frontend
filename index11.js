// for문
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// forEach 메서드
let arr = [1, 2, 3, 4, 5];
arr.forEach((elm) => {
  console.log(elm);
});

// forEach 메서드 index 매개변수
let arr = [1, 2, 3, 4, 5];
arr.forEach((elm, idx) => {
  console.log(`${idx} 번째 요소는 ${elm} 입니다.`);
});

// forEach 메서드 array 매개변수
let arr = [1, 2, 3, 4, 5];
arr.forEach((elm, idx, array) => {
  console.log(`${idx} 번째 요소는 ${elm} 입니다.`);
  console.log(array);
});

// map 사용전
let arr = [1, 2, 3, 4, 5];
let newArray = [];
for (let i = 0; i < arr.length; i++) {
  newArray.push(arr[i] * 10);
}
console.log(newArray);

// map 활용
let arr = [1, 2, 3, 4, 5];
let newArray = arr.map((elm) => {
  return elm * 10;
});
console.log(newArray);

// at 사용전
let colors = ["green", "blue", "purple"];
console.log(colors[1]); //blue
console.log(colors[colors.length - 1]); //purple

// at 활용
let colors = ["green", "blue", "purple"];
console.log(colors.at(1)); //blue
console.log(colors.at(-1)); //purple

// includes
let colors = ["green", "blue", "purple"];
console.log(colors.includes("blue")); // true
console.log(colors.includes("yellow")); // false

// includes 매개변수로 fromindex 전달
let colors = ["green", "blue", "purple"];
console.log(colors.includes("blue", 2)); // false
console.log(colors.includes("blue", 1)); // true

// indexOf
let colors = ["green", "blue", "purple"];
console.log(colors.indexOf("purple")); // 2
console.log(colors.indexOf("yellow")); // -1

// indexOf 매개변수로 fromindex 전달
let colors = ["green", "blue", "purple"];
console.log(colors.indexOf("blue", 2)); // -1

// findIndex
let colors = [
  { id: 1, color: "green" },
  { id: 2, color: "blue" },
  { id: 3, color: "purple" },
];
let idx = colors.findIndex((elm) => elm.color === "purple");
console.log(idx); // 2
colors.findIndex((elm, idx, array) =>
  console.log(`${idx} 번째 값 - id: ${elm.id}, color: ${elm.color}`)
);
colors.findIndex((elm, idx, array) => console.log(array));

// find
let colors = [
  { id: 1, color: "green" },
  { id: 2, color: "blue" },
  { id: 3, color: "purple" },
];
let idx = colors.find((elm) => elm.color === "purple");
console.log(idx); // { id: 3, color: "purple" }

// filter
let colors = [
  { id: 1, color: "green" },
  { id: 2, color: "blue" },
  { id: 3, color: "purple" },
];
let filterArray = colors.filter((elm, idx, array) => elm.id > 1);
console.log(filterArray);

// slice
let colors = [
  { id: 1, color: "green" },
  { id: 2, color: "blue" },
  { id: 3, color: "purple" },
  { id: 4, color: "yellow" },
];
let sliceArray = colors.slice(1, 3);
console.log(sliceArray);
