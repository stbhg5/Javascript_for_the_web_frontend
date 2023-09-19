// 동기
console.log("a");
console.log("b");
console.log("c");

// 예시 코드
const workA = () => {
  //5초
  console.log("workA");
};
const workB = () => {
  //3초
  console.log("workB");
};
const workC = () => {
  //10초
  console.log("workC");
};
workA();
workB();
workC();

// 비동기 처리 연습
setTimeout(() => {
  console.log("3초만 기다리세요");
}, 3000);

// 출력 순서 확인
setTimeout(() => {
  console.log("3초만 기다리세요");
}, 3000); // 비동기 실행
console.log("종료"); // 먼저 출력

// 콜백함수
const work = (callback) => {
  setTimeout(() => {
    console.log("3초만 기다리세요");
    callback();
  }, 3000);
};
work(() => {
  console.log("종료");
});

// 비동기 처리의 이해를 위한 출력 순서 확인
const workA = () => {
  setTimeout(() => {
    console.log("workA");
  }, 5000);
}; // 비동기 함수
const workB = () => {
  setTimeout(() => {
    console.log("workB");
  }, 3000);
}; // 비동기 함수
const workC = () => {
  setTimeout(() => {
    console.log("workC");
  }, 10000);
}; // 비동기 함수
const workD = () => {
  console.log("workD");
}; // 동기 함수
workA();
workB();
workC();
workD();
