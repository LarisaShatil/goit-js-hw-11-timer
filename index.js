// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });

class CountdownTimer {
  constructor() {
  this.refs = {
  days: document.querySelector("[data-value='days']"),
  hours: document.querySelector("[data-value='hours']"),
  mins: document.querySelector("[data-value='mins']"),
  secs: document.querySelector("[data-value='secs']"),
    };
  
  this.id = null;
  this.currentDate = null;
  this.startTimer = this.startTimer.bind(this);
    
  document.addEventListener('DOMContentLoaded', this.startTimer);
  };
  
calc() {
  this.currentDate = Date.now();
  const targetDate = new Date(2021, 8, 1);
  const time = targetDate - this.currentDate;
  if (time <= 0) {
      return
      // clearInterval(this.id);
    }
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);

  this.refs.days.textContent = days < 10 ? `0${days}` : days;
  this.refs.hours.textContent = hours < 10 ? `0${hours}` : hours;
  this.refs.mins.textContent = mins < 10 ? `0${mins}` : mins;
  this.refs.secs.textContent = secs < 10 ? `0${secs}` : secs;
  };

  startTimer() {
     this.currentDate = Date.now();
    this.id = setInterval(this.calc.bind(this), 1000);
  };
  
}


const holidayTimer = new CountdownTimer({
  selector: '#timer-1',
  // targetDate: new Date('Sept 17, 2021'),
});






// Plain WORKING code
// const refs = {
//   days: document.querySelector("[data-value='days']"),
//   hours: document.querySelector("[data-value='hours']"),
//   mins: document.querySelector("[data-value='mins']"),
//   secs: document.querySelector("[data-value='secs']"),

// };

// function calc() {
//   const currentDate = Date.now();
//   const targetDate = new Date(2021, 08, 01);
//   const delta = (targetDate - currentDate) / 1000;

//   const days = Math.floor(delta / 60 / 60 / 24);
//   const hours = Math.floor(delta / 60 / 60) % 24;
//   const mins = Math.floor(delta / 60) % 60;
//   const secs = Math.floor(delta) % 60;

//   if (currentDate > targetDate) {
//     return 
//   } else {
//   refs.days.textContent = days < 10 ? `0${days}` : days;
//   refs.hours.textContent = hours < 10 ? `0${hours}` : hours;
//   refs.mins.textContent = mins < 10 ? `0${mins}` : mins;
//   refs.secs.textContent = secs < 10 ? `0${secs}` : secs;
//   }

// };

// console.log(calc);
// document.addEventListener('DOMContentLoaded', setInterval(calc, 1000));

