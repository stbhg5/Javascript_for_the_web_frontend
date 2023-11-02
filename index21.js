// Date 객체
let nowDate = new Date("2023-12-21"); // YYYY-MM-DD
console.log(nowDate); // Thu Dec 21 2023 09:00:00 GMT+0900 (한국 표준시)

let nowDate = new Date();
console.log(nowDate); // 오늘의 연도, 월, 일, 요일, 시간

// Date 객체 메서드
let nowDate = new Date();
let month = nowDate.getMonth();
let date = nowDate.getDate();
let day = nowDate.getDay();
console.log(`${month}월 ${date}일 ${day}요일`);

// getMonth() 메서드 결과값 뒤에 1 더하기
let nowDate = new Date();
let month = nowDate.getMonth() + 1;
let date = nowDate.getDate();
let day = nowDate.getDay();
console.log(`${month}월 ${date}일 ${day}요일`);

// 요일에 알맞게 출력
const week = ["일", "월", "화", "수", "목", "금", "토"];
let nowDate = new Date();
let month = nowDate.getMonth() + 1;
let date = nowDate.getDate();
let day = nowDate.getDay();
console.log(`${month}월 ${date}일 ${week[day]}요일`);

// getHours(), getMinutes() 메서드
let nowDate = new Date();
let hours = nowDate.getHours(); // 0-24
let minutes = nowDate.getMinutes(); // 0-59
console.log(`${hours}:${minutes}`);
