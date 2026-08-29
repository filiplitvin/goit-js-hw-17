const display = document.querySelector(".timer2-display");
const msg = document.querySelector(".timer2-message");
const startBtn = document.querySelector(".timer2-start");
const wrapper = document.querySelector(".timer2-wrapper");

let timeLeft = 30000;
let intervalId = null;

const startTimer = () => {
  intervalId = setInterval(() => {
    timeLeft = timeLeft - 1;

    display.textContent = timeLeft / 1000 + " сек";

    if (timeLeft === 10000) {
      wrapper.style.backgroundColor = "red";
      msg.textContent = "Менше 10 секунд!";
    }

    if (timeLeft <= 0) {
      clearInterval(intervalId);
      display.textContent = "0 сек";
      msg.textContent = "Час вийшов!";
    }
  }, 1);
};

startBtn.addEventListener("click", startTimer);
