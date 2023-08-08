// 객체 생성
// 객체 생성자
let person = new Object();

// 객체 리터럴
let person = {};

// 객체 프로퍼티
let person = {
  name: "홍길동",
  age: 20
};

// 다양한 값을 가진 객체 프로퍼티
let person = {
  name: "홍길동",
  phone: undefined,
  age: 25,
  etc: function () {
    console.log("hello world");
  }
};

// 객체 프로퍼티 값 사용
let person = {
  name: "홍길동",
  age: 20,
  pet: "cat"
};

// 점 표기법
console.log(person.name); //홍길동
console.log(person.age); //20
console.log(person.pet); //cat

// 괄호 표기법
console.log(person["name"]); //홍길동
console.log(person["age"]); //20
console.log(person["pet"]); //cat

// 객체의 key 값을 매개변수가 결정하는 코드
const getValue = (key) => {
  console.log(person[key]);
};
getValue("name");

// 프로퍼티 추가
let person = {
  name: "홍길동",
  age: 20,
  pet: "cat"
};
person.phone = "010-1234-5678";
person["height"] = 180;
console.log(person);

// 프로퍼티 수정
let person = {
  name: "홍길동",
  age: 20,
  pet: "cat"
};
person.age = 25;
person["pet"] = "dog";
console.log(person);

// 상수로 선언된 객체 프로퍼티 값 수정
const person = {
  name: "홍길동",
  age: 20,
  pet: "cat"
};
person.age = 25;
person["pet"] = "dog";
console.log(person);

// 객체의 고유한 id까지 변경
const person = {
  name: "홍길동",
  age: 20,
  pet: "cat",
};
person = {
  pet: "dog";
}

// 프로퍼티 삭제
const person = {
  name: "홍길동",
  age: 20,
  pet: "cat",
};
delete person.pet;
delete person["age"];
console.log(person);

// 객체의 함수 프로퍼티
const person = {
  name: "홍길동",
  age: 20,
  pet: "cat",
  print: function () {
      console.log("hello world");
  },
};

// print의 value값으로 저장된 함수를 호출
person.print(); // 점 표기법
person["print"](); // 괄호 표기법

// this를 이용해 자신이 속해있는 객체를 가리키기
const person = {
  name: "홍길동",
  age: 25,
  print: function () {
      console.log(`제 이름은 ${this.name} 입니다.`);
  },
};
person.print(); // 제 이름은 홍길동 입니다.

// 메서드 생성 시 화살표형 함수로 생성
const person = {
  name: "홍길동",
  age: 25,
  print: () => {
      console.log(`제 이름은 ${this.name} 입니다.`);
  },
};
person.print(); // ERROR