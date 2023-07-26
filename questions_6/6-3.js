// This file contains the solution to the question 6-3 coding test.
function myDigitalClock() {
  var date = new Date(); // fixed bug.
  var hours = date.getHours(); // 0 - 23
  var minutes = date.getMinutes(); // 0 - 59
  var seconds = date.getSeconds(); // 0 - 59
  var zone = "AM";

  // set AM/PM
  if (hours >= 12) {
    zone = "PM";
  }

  // Format the time units with leading zeros if necessary
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Display the time
  console.log(hours + ":" + minutes + ":" + seconds + " " + zone);
}

myDigitalClock();

// Update the clock every second
setInterval(myDigitalClock, 1000);