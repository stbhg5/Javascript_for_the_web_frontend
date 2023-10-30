// createElement
const seasonElement = document.createElement("div");
seasonElement.classList.add("season");

// 텍스트 넣기
// seasonElement.textContent = "spring";
const seasonText = document.createTextNode("spring");
console.log(document.getElementsByTagName("div")); // 출력 안됨

// appendChild
const todayInfoElement = document.querySelector("div.today-info");
todayInfoElement.appendChild(seasonElement);
seasonElement.appendChild(seasonText);
console.log(document.getElementsByTagName("div")); // <div class="season">spring</div>

// 응용
const buttonElement = document.createElement("div");
buttonElement.classList.add("button");
buttonElement.textContent = "버튼";
const todayInfoElement = document.querySelector("div.today-info");
todayInfoElement.appendChild(buttonElement);
console.log(document.getElementsByTagName("div")); // <div class="button">버튼</div>

// addEventListener
buttonElement.addEventListener("click", () => {
  window.alert("클릭");
});
console.log(document.getElementsByTagName("div"));

// style
const buttonElement = document.createElement("div");
buttonElement.classList.add("button");
buttonElement.textContent = "버튼";
buttonElement.style.color = "white";
buttonElement.style.backgroundColor = "gray";
buttonElement.style.width = "50px";
buttonElement.style.textAlign = "center";
buttonElement.style.cursor = "pointer";

const todayInfoElement = document.querySelector("div.today-info");
todayInfoElement.appendChild(buttonElement);
buttonElement.addEventListener("click", () => {
  window.alert("클릭");
});

console.log(document.getElementsByTagName("div"));
