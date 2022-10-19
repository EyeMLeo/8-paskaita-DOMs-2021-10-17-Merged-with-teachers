'use strict';
console.log('deleteList.js');

/* 
kai paspaudziu ant saraso el, noriu ji istrinti

*/
// event - informacija apie ivyki
document.body.addEventListener('click', (event) => {
  // anonimine funkcija
  console.log('paspaudei');
  // tai ant ko paspaudem
  // event.target - elementas ant kurio paspaudem
  console.log('event.target ===', event.target);
  // console.log('event.target.className ===', event.target.className);
  event.target.style.backgroundColor = '#333';

  // jei paspaudziau ant el kuri turi klase deleteMe tai noriu ta el istrinti
  if (event.target.className === 'delBtn') {
    // event.target.parentElement.remove();
    let el = event.target;
    el.parentElement.remove();
    console.log('bye bye');
  }
});
