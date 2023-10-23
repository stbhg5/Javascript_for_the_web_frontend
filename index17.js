// 프로미스 객체 사용한 비동기 처리 함수
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

const start = () => {
  delay(2000).then(() => {
    console.log("대기");
  });
};

start();

// async 적용
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

const start = async () => {
  delay(2000).then(() => {
    console.log("대기");
  });
};

start();

// async 적용2
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

const start = async () => {
  // delay(2000).then(() => {
  //     console.log("대기");
  // });
  return "대기";
};

start().then((res) => {
  console.log(res);
});

// await 적용
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

const start = async () => {
  await delay(2000);
  console.log("대기");
};

start();

// 에러 핸들링 try catch 문법
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

const start = async () => {
  try {
    await delay(2000);
    console.log("대기");
  } catch (error) {
    console.log(error);
  }
};

start();
