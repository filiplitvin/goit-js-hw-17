const timer = document.querySelector(".timer");
const message = document.querySelector(".message");

let minutes = 60;
let intervalId = null;

timer.textContent = `Залишилось: ${minutes} хвилин`;

const handleTick = () => {
  minutes = minutes - 1;
  timer.textContent = `Залишилось: ${minutes} хвилин`;

  if (minutes === 30) {
    message.textContent = "Залишилось менше половини часу!";
  }

  if (minutes === 0) {
    clearInterval(intervalId);
    message.textContent = "Час вийшов!";
  }
};

intervalId = setInterval(handleTick, 60000);
