const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const clear = document.querySelector("#clear-btn");

const pEl = document.querySelector("p");
let counter = 0;

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something !");
    new Audio("./music/new.mp3").play();
  } else {
    new Audio("./music/message.mp3").play();
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    counter = listContainer.children.length;
    pEl.textContent = `Elemens : ${counter}`;
  }
  inputBox.value = "";
  saveData();
}

clear.addEventListener("click", () => {
  new Audio("./music/new.mp3").play();
  listContainer.innerHTML = "";
  counter = listContainer.children.length;
  pEl.textContent = `Elemens : ${counter}`;
});

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      new Audio("./music/click-button+.mp3").play();
      saveData();
    } else if (e.target.tagName === "SPAN") {
      new Audio("./music/new.mp3").play();
      e.target.parentElement.remove();
      saveData();
      counter = listContainer.children.length;
      pEl.textContent = `Elemens : ${counter}`;
    }
  },
  false
);
inputBox.addEventListener("input", () => {
  new Audio("./music/click-button+.mp3").play();
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
