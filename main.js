const stopwatchText = document.getElementById("stopwatchText");
const stopPlayBtn = document.getElementById("stopPlayBtn");
const restartBtn = document.getElementById("restartBtn");
let myInterval;
let isStopwatchOn = false;
let [hours, minutes, seconds] = [0, 0, 0];


function updateStopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++
    }
  }

  const formatedHours = formatZeros(hours);
  const formatedMinutes = formatZeros(minutes);
  const formatedSeconds = formatZeros(seconds);

  stopwatchText.innerText = `${formatedHours}:${formatedMinutes}:${formatedSeconds}`;
}

function formatZeros(timeUnit) {
  return timeUnit < 10 ? "0" + timeUnit : timeUnit
}

function handleStopwatch(state) {
  if (state == true) {
    myInterval = setInterval(updateStopwatch, 1000)
  } else {
   clearInterval(myInterval) 
  }
}

stopPlayBtn.addEventListener("click", () => {
  stopPlayBtn.classList.toggle("stop");
  if (isStopwatchOn == false) {
    isStopwatchOn = true;
    handleStopwatch(isStopwatchOn);
    stopPlayBtn.innerHTML = `<span class="material-symbols-outlined"> pause </span>`
  } else {
    isStopwatchOn = false;
    handleStopwatch(isStopwatchOn);
    stopPlayBtn.innerHTML = `<span class="material-symbols-outlined"> play_arrow </span>`
  }
})

restartBtn.addEventListener("click", () => {
  isStopwatchOn = false;
  handleStopwatch(isStopwatchOn);

  stopPlayBtn.classList.remove("stop");
  stopPlayBtn.innerHTML = `<span class="material-symbols-outlined"> play_arrow </span>`;
  hours, minutes, seconds = 0, 0, 0;
  stopwatchText.innerText = "00:00:00"

})