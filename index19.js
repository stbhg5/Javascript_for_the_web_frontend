// 요소 찾고 선택하기 (요소 노드 접근)
// index.html
<body>
  <div class="today-info">
    <div class="date" id="date">
      02.10.금요일
    </div>
    <div class="clock" id="clock">
      15:03
    </div>
  </div>
  <script src="src/index.js"></script>
</body>;

// getElementById
console.log(document.getElementById("date"));

// querySelector
console.log(document.querySelector("div.date"));

// index.html
<div class="today-info">
  <div class="date" id="date">
    02.10.금요일
  </div>
  <div class="date" id="clock">
    15:03
  </div>
</div>;

// querySelectorAll
console.log(document.querySelectorAll("div.date")); // NodeList

// getElementsByClassName
console.log(document.getElementsByClassName("date")); // HTMLCollection

// getElementsByTagName
console.log(document.getElementsByTagName("div")); // HTMLCollection

// 요소 조작하기 (attribute 노드 접근, 값 조작)
// className
console.log(document.getElementById("date").className); // date

// class 이름 변경
const dateElement = document.getElementById("date");
dateElement.className = "change"; // class="change"

// id
console.log(document.querySelector("div.date").id);

// id 이름 변경
const dateElement = document.querySelector("div.date");
dateElement.id = "change";
console.log(dateElement); // id="change"

// classList
console.log(document.getElementById("date").classList); // DOMTokenList

// add, remove
const dateElement = document.getElementById("date");
dateElement.classList.add("change"); // class="date change"
dateElement.classList.remove("date"); // class="change"
console.log(dateElement);

// index.html
<div class="today-info">
  <div class="date" id="date">
    02.10.금요일
  </div>
  <div class="clock" id="clock">
    15:03
  </div>
</div>;

// textContent (text 노드 값 조작)
const clockElement = document.getElementById("clock");
clockElement.textContent = "12:00";

const dateElement = document.querySelector("div.date");
dateElement.textContent = "03.29.수요일";
