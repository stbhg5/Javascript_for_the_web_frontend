// 객체에 spread 사용 전
const toy = {
    type: "bear",
    price: 15000
  };
  const blueToy = {
    type: "bear",
    price: 15000,
    color: "blue"
  };
  const yellowToy = {
    type: "bear",
    price: 15000,
    color: "yellow"
  };
  
  // 객체에 spread 사용
  const toy = {
    type: "bear",
    price: 15000
  };
  const blueToy = {
    ...toy,
    color: "blue"
  };
  const yellowToy = {
    ...toy,
    color: "yellow"
  };
  console.log(blueToy);
  console.log(yellowToy);
  
  // 배열에 spread 사용
  const color1 = ["red", "orange", "yellow"];
  const color2 = ["blue", "navy", "purple"];
  const rainbow = [...color1, "green", ...color2];
  console.log(rainbow);
  
  // 객체에 구조 분해 할당 rest 사용 전
  const blueToy = {
    type: "bear",
    price: 15000,
    color: "blue"
  };
  const { type, price, color } = blueToy;
  console.log(type);
  console.log(price);
  console.log(color);
  
  // 객체에 구조 분해 할당 rest 사용
  const blueToy = {
    type: "bear",
    price: 15000,
    color: "blue"
  };
  const { type, ...rest } = blueToy;
  console.log(type);
  console.log(rest);
  
  // 올바르지 못한 rest 사용
  const { ...rest, type } = blueToy; // SyntaxError
  
  // 배열에 구조 분해 할당 rest 사용
  const color = ["red", "orange", "yellow", "green"];
  const [c1, c2, ...rest] = color;
  console.log(c1);
  console.log(c2);
  console.log(rest);
  
  // 함수에 rest 사용 전
  const print = (a, b, c, d, e, f) => {
    console.log([c, d, e, f]);
  };
  print(1, 2, 3, 4, 5, 6);
  
  // 함수에 rest 사용
  const print = (a, b, ...rest) => {
    console.log(a, b, rest);
  };
  print(1, 2, 3, 4, 5, 6);
  
  // 함수에 spread와 rest 사용 전
  const print = (a, b, c, d, e, f) => {
    console.log(a, b, c, d, e, f);
  };
  const numbers = [1, 2, 3, 4, 5, 6];
  print(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4], numbers[5]);
  
  // 함수에 spread 사용
  const print = (a, b, c, d, e, f) => {
    console.log(a, b, c, d, e, f);
  };
  const numbers = [1, 2, 3, 4, 5, 6];
  print(...numbers); // spread
  
  // 함수에 spread와 rest 사용
  const print = (...rest) => { // rest
    console.log(rest);
  };
  const numbers = [1, 2, 3, 4, 5, 6];
  print(...numbers); // spread