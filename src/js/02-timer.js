console.log(`старт сообщение`);

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

// const refs = {
//   startBtn: document.querySelector(`button[data-start]`),
// };

// refs.startBtn.addEventListener(`click`, onStart);

// function onStart() {
//   console.log(`старт сообщение`);
// }

// flatpickr('#datetime-picker', options);
