'use strict';
console.log('events.js');

function makeBodyDark() {
  document.body.style.backgroundColor = '#333';
  document.body.style.color = 'white';
}

function toggleBodyDark() {
  // ar body spalva yra black
  if (document.body.style.backgroundColor === 'black') {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  } else {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  }
}
// makeBodyDark();

// nusitaikyti i mygtuka
const btn1El = document.getElementById('btn1');
const btn2El = document.getElementById('btn2');
console.log('btn1El ===', btn1El);
// uzdeti jam event pasiklausymas

btn1El.addEventListener('click', makeBodyDark);
btn2El.addEventListener('click', toggleBodyDark);

// pelytes uzvedimas ant el
btn1El.addEventListener('mouseover', () => {
  console.log('mouseover');
});
