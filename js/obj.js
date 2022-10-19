'use strict';
console.log('obj.js');

let bigObj = {
  title: 'Mr',
  sayHi: function () {
    console.log('Heloo I am method in bigObj');
  },
  address: {
    street: 'Maple',
    no: 6,
    coords: {
      x: 457,
      y: 545,
    },
  },
};

bigObj.sayHi(); // 'Heloo I am method in bigObj'

bigObj.title; // 'Mr'

bigObj.address.street; // 'Maple'

bigObj.address.coords.x; // 457

console.log(
  `${bigObj.title} lives in ${bigObj.address.street} street, number ${bigObj.address.no}`
);
