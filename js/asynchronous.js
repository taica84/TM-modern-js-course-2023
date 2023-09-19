console.log('asynchronus');

// section one - setInterval

const asyncOne = document.querySelector('.async-one');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');

let intervalId;

function changeRandomColor() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
}

function startChange() {
  if (!intervalId) {
    intervalId = setInterval(changeRandomColor, 1000);
  }
}

function stopChange() {
  clearInterval(intervalId);
}

startBtn.addEventListener('click', startChange);
stopBtn.addEventListener('click', stopChange);

// section two - setTimeout
const titleTimeout = document.querySelector('.title-timeout');
const startTimeoutBtn = document.querySelector('.start-timeout-button');
const displayCount = document.querySelector('.count-timeout');
let count = 3;

function startTimeoutFunc() {
  let timeoutID = setTimeout(() => {
    
  }, 3000);

  return timeoutID;
}

function timeoutCounter() {
  
  let timeoutVarID = setTimeout(() => {
    displayCount.innerHTML = count;
    count--;
    if (count >= 0) {
      timeoutCounter()
    } else {
      titleTimeout.innerHTML = `<h1 class="title-timeout red">JAVASCRIPT ASYNCHRONUS</h1>`;
      displayCount.innerHTML='';
      clearInterval(timeoutVarID)
    }
  }, 1000);
  console.log(count);
  return timeoutVarID
  }

// function wrapFunctions() {

//   startTimeoutFunc();
//   timeoutCounter();
// }

startTimeoutBtn.addEventListener('click', timeoutCounter);
