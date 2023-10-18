// 비동기 처리
const workA = (value, callback) => {
    setTimeout(() => {
      callback(value);
    }, 5000);
  };
  const workB = (value, callback) => {
    setTimeout(() => {
      callback(value);
    }, 3000);
  };
  const workC = (value, callback) => {
    setTimeout(() => {
      callback(value);
    }, 10000);
  };
  const workD = (value, callback) => {
    callback(value);
  };
  
  workA("workA", (res) => {
    console.log(res);
  });
  workB("workB", (res) => {
    console.log(res);
  });
  workC("workC", (res) => {
    console.log(res);
  });
  workD("workD", (res) => {
    console.log(res);
  });
  
  // 콜백 지옥
  const workA = (value, callback) => {
    setTimeout(() => {
      callback(value + 5);
    }, 5000);
  };
  const workB = (value, callback) => {
    setTimeout(() => {
      callback(value - 3);
    }, 3000);
  };
  const workC = (value, callback) => {
    setTimeout(() => {
      callback(value + 10);
    }, 10000);
  };
  const workD = (value, callback) => {
    callback(value);
  };
  
  workA(10, (resA) => {
    console.log(`1. ${resA}`);
    workB(resA, (resB) => {
      console.log(`2. ${resB}`);
      workC(resB, (resC) => {
        console.log(`3. ${resC}`);
      });
    });
  });
  workD("workD", (res) => {
    console.log(res);
  });
  
  // 프로미스 객체 생성
  const promise = new Promise();
  
  // 프로미스 객체 생성 인수인 실행함수 executor
  const executor = (resolve, reject) => {
    //코드
  };
  const promise = new Promise(executor);
  
  // 프로미스 객체 생성과 동시에 실행되는 executor 함수
  const executor = (resolve, reject) => {
    setTimeout(() => {
      console.log("3초만 기다리세요");
    }, 3000);
  };
  const promise = new Promise(executor);
  
  // resolve
  const executor = (resolve, reject) => {
    setTimeout(() => {
      resolve("성공");
    }, 3000);
  };
  const promise = new Promise(executor);
  promise.then((res) => {
    console.log(res);
  });
  
  // reject
  const executor = (resolve, reject) => {
    setTimeout(() => {
      reject("실패");
    }, 3000);
  };
  const promise = new Promise(executor);
  promise.then((res) => {
    console.log(res);
  });
  
  // catch 메서드
  const executor = (resolve, reject) => {
    setTimeout(() => {
      reject("실패");
    }, 3000);
  };
  
  const promise = new Promise(executor);
  promise
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
  
  // 콜백지옥을 해결하는 Promise 객체
  const workA = (value) => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(value + 5);
      }, 5000);
    });
    return promise;
  };
  
  const workB = (value) => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(value - 3);
      }, 3000);
    });
    return promise;
  };
  
  const workC = (value) => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(value + 10);
      }, 10000);
    });
    return promise;
  };
  
  workA(10).then((resA) => {
    console.log(`1. ${resA}`);
    workB(resA)
      .then((resB) => {
        console.log(`2. ${resB}`);
        workC(resB).then((resC) => {
          console.log(`3. ${resC}`);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  });
  
  // 프로미스 체이닝
  const workA = (value) => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(value + 5);
      }, 5000);
    });
    return promise;
  };
  
  const workB = (value) => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(value - 3);
      }, 3000);
    });
    return promise;
  };
  
  const workC = (value) => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(value + 10);
      }, 10000);
    });
    return promise;
  };
  
  workA(10)
    .then((resA) => {
      console.log(`1. ${resA}`);
      return workB(resA);
    })
    .then((resB) => {
      console.log(`2. ${resB}`);
      return workC(resB);
    })
    .then((resC) => {
      console.log(`3. ${resC}`);
    })
    .catch((error) => {
      console.log(error);
    });
  