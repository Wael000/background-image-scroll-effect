const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const formEl = document.getElementById("form");
const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");

questionEl.innerText = "What is " + num1 + " multiplied by " + num2 + "?";

const correctAns = num1 * num2;

let s = JSON.parse(localStorage.getItem("score"));

if (!score) {
    s = 0;
}

scoreEl.innerText = "score: " + s;

formEl.addEventListener("submit", () => {
    const userAns = +inputEl.value;
    if (userAns === correctAns) {
        s++; 
        updateLocalStorage();
    } else {
        s--;
        updateLocalStorage();
    }
})

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(s));
}