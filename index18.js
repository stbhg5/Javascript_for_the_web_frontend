// fetch 내장함수를 통한 API 호출
const response = fetch("https://jsonplaceholder.typicode.com/posts");
console.log(response);

// 비동기 함수 fetch
const responseTest = fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => console.log(res))
  .catch((error) => console.log(error));

console.log(responseTest);

// async 사용
const getData = async () => {
  const res = fetch("https://jsonplaceholder.typicode.com/posts");
};

getData();

// await 사용
const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
};

getData();

// try/catch를 사용한 에러 처리
const getData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder123.typicode.com/posts",
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`error : ${error}`);
  }
};

getData();
