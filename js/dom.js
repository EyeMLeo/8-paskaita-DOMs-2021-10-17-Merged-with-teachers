'use strict';
console.log('dom.js');

const nuorodaIApp = document.getElementById('app');

console.log('nuorodaIApp ===', nuorodaIApp);

nuorodaIApp.style.backgroundColor = 'tomato';

console.log('nuorodaIApp.children ===', nuorodaIApp.children);

const allLiEls = document.querySelectorAll('.listEl');

console.log('allLiEls ===', allLiEls);
// allLiEls.style.backgroundColor = 'blue';
// allLiEls[0].style.backgroundColor = 'blue';
allLiEls[1].style.backgroundColor = 'blue';
// allLiEls[2].style.backgroundColor = 'blue';

for (let vienasLi of allLiEls) {
  vienasLi.style.backgroundColor = 'blue';
  vienasLi.style.color = 'white';
  vienasLi.style.fontSize = '2rem';
  vienasLi.append(' prideta');
}

// pakeisti li elementu fono spalva i melyna

// pakeisti vidurinio li elemento fono spalva i zalia
const vidurinisLiEltas = document.querySelector('.listEl:nth-child(2)');
// vidurinisLiEltas.style.backgroundColor = 'green';
// gauti tuos pacius list elementus su getElementsByClassName
// console.log('allLiEls[1] === vidurinisLiEltas ===', allLiEls[1] === vidurinisLiEltas);

// pasalinti elementa
vidurinisLiEltas.remove();

const allLiElsClass = document.getElementsByClassName('listEl');

console.log('allLiElsClass ===', allLiElsClass);
