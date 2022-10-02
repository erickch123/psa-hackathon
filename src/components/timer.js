export function countdown(n) {
  var timerid = 0
  // timer, countdown from 90 secs
  var counter = document.getElementById("timer");
  var seconds = n;
  function tick() {
      seconds--;
      counter.innerHTML = String(seconds) + (" s");
      if (seconds > 0) {
          timerid = setTimeout(tick, 1000);
      } else {
          document.getElementById("timer").innerHTML = "TIMES UP!!!";
      }
  }
  tick();
  
}

export function stopTimer() {
  // stop the timer
  // clearTimeout(timerid);
  document.getElementById("counter").innerHTML = "Timer Stopped"
  delay(1000).then(() => document.getElementById("counter").innerHTML = "Timer")
}

export function delay(time) {
  // transition added from "time's up" to "timer" 
  return new Promise(resolve => setTimeout(resolve, time));
}

{/* <button id="timer" onclick="countdown(90)">Start</button> */}
{/* <button id="stoptimer" onclick="stopTimer()">Stop/Reset</button> */}