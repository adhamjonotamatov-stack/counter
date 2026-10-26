const cup = document.querySelector(".cup-cub-num");
let number = 0;

function name() {
  cup.textContent = number;
  cup.style.color = number > 0 ? "#059669" : number < 0 ? "#dc2626" : "#172033";
}

document.querySelector(".cup1-btn2").addEventListener("click", function () {
  number++;
  name();
});
document.querySelector(".cup1-btn").addEventListener("click", function () {
  number--;
  name();
});
document.querySelector(".cup1-btn1").addEventListener("click", function () {
  number = 0;
  name();
});
