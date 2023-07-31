/*

  OPCIÓN DESCARTADA DEBIDO A QUE UTILIZAR EL OBJETO "Date" 
  SIMPLEMENTE ES MUY COMPLICADO Y NO VALE LA PENA USARLO

*/



const timer = document.getElementById("timer");
const stopPlayBtn = document.getElementById("stopPlayBtn");
const restarBtn = document.getElementById("restartBtn");
let isTimerOn = false;
let myInterval ;

let time = new Date(0, 0, 0, 0, 0, 0)

timer.innerText =
  time.toLocaleTimeString("es-ES",
    { hour: '2-digit', minute: '2-digit', second: '2-digit' });


stopPlayBtn.addEventListener("click", () => {
  stopPlayBtn.classList.toggle("stop");
  if (isTimerOn == false) {
    stopPlayBtn.innerHTML = `<span class="material-symbols-outlined"> pause </span>`
    isTimerOn = true;
  } else {
    stopPlayBtn.innerHTML = `<span class="material-symbols-outlined"> play_arrow </span>`
    isTimerOn = false;
  }
  handleTimer(isTimerOn);
})

restarBtn.addEventListener("click", () => {
  clearInterval(myInterval);
  time = new Date(0, 0, 0, 0, 0)
  timer.innerText =  time.toLocaleTimeString("es-ES",
    { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  isTimerOn = false;
  stopPlayBtn.innerHTML = `<span class="material-symbols-outlined"> play_arrow </span>`
  stopPlayBtn.classList.toggle("stop");
  
  stopTimer;
})


function handleTimer(isTimerOn) {
  if (isTimerOn == true) {
    startTimer();
  } else {
    stopTimer();
  }
}

function startTimer() {
  myInterval = setInterval(addOneSecond, 1000);
}

function stopTimer() {
  clearInterval(myInterval)
}

function addOneSecond() {
  time = new Date(time.setTime(time.getTime() + 1000));
  timer.innerText =  time.toLocaleTimeString("es-ES",
    { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}