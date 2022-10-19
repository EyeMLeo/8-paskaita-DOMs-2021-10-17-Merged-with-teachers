"use strict";
console.log("uzd.js");

// prisideti elementam id, class, ir pan pagal poreiki
// panaudoti tiek getElementById tiek querySelector() ar querySelectorAll()

// 1. pakeisti h1 tektso spalva i tomato <h1>Welcome</h1>
let mainHeaderEl = document.querySelector("h1");
// let mainHeaderEl = document.querySelectorAll("h1");
mainHeaderEl.style.backgroundColor = "tomato";
console.log("mainHeaderEl ===", mainHeaderEl);
// 2. padaryti kad fonto storis butu normalus  <h2>Some title</h2>
let header2 = document.querySelector("h2");
header2.style.fontWeight = "400";

// 3. <p>Lorem ipsum dolor si. Irasyti i ji teksta "man pavyko dinamiskai atnaujinti teksta"
let Article1P2El = document.getElementById("Article1P2");
Article1P2El.textContent += "man pavyko dinamiskai atnaujinti teksta";
// 4. <li>two</li> padidinti srifto dyti iki 34px
let orderList1El = document.getElementById("orderList1");
orderList1El.children[1].style.fontSize = "34px";
console.log("orderList1El ===", orderList1El);
console.log("orderList1El.children[1] ===", orderList1El.children[1]);
// 5. paspaudus mygtuka <button>click me</button> pakeisti h1 teksta i 'Pakeiciau su mygtuku'
let h1ToChange = document.querySelector("h1");
let Btn1El = document.getElementById("Btn1");

function Btn1Click() {
  h1ToChange.textContent = "Pakeiciau su mygtuku";
}

Btn1El.addEventListener("click", Btn1Click);

// 6. <p class="time">12:45</p> elementui pakeisti teksta i dabartini laika pvz '13:50' ir padaryti pastorinta srifta
let date = new Date();

let timeNow =
  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
let timeEl = document.getElementById("time");
timeEl.style.fontWeight = "900";
console.log("timeNow ===", timeNow);
console.log("timeEl ===", timeEl);

timeEl.textContent = timeNow;
// 7. <li>one</li> istrinti
let AllLiItems = document.querySelectorAll("li");
AllLiItems[0].remove();

// 8. paspaudus <button>make article dark</button> padaryti <article> fona juoda, o teksta balta
let Article1El = document.getElementById("Article1");
let ArticleBtnEl = document.getElementById("ArticleBtn");

ArticleBtnEl.addEventListener("click", makeArticleBlack);

function makeArticleBlack() {
  Article1El.style.backgroundColor = "black";
  Article1El.style.color = "white";
}

// 9. paspaudus <button>delete first li from list</button> istrinti pirma li el is <ol>
let orderListToDelete = document.getElementById("orderList1");
let deleteOrderLi = document.getElementById("deleteOrderListBtn");

deleteOrderLi.addEventListener("click", deleteOrderListElement);

function deleteOrderListElement() {
  orderListToDelete.children[0].remove();
}

// sunkesnis tiems kas norit extra
// 10. susikurti masyva su spalvomis red, green, blue, violet, pink, black
let colors = ["red", "green", "blue", "violet", "pink", "black"];
console.log(colors);

// 10.1 sugeneruoti li elementu stringa is masyvo
let generatedList = "";
for (const iterator of colors) {
  generatedList += `<li>${iterator}</li>`;
}
console.log(generatedList);

// 10.2 i <ol> elemento vidu ideti ta stringa (olEl.innerHTML = generatedString)
let orderListAddItemsFromJS = document.getElementById("orderList1");
orderListAddItemsFromJS.innerHTML += generatedList;
let listForShort = orderListAddItemsFromJS.innerHTML;
// 10.3 padaryti kad kiekvienas elementas turetu fono spalva tokia kokia yra irasyta tarp li tagu.

// for (const colorsI of orderListAddItemsFromJS.children) {
//   //   colorsI.style.color = colorsI;
// //   colorsI.style.color = "red";
//   colorsI.style.color = "red";
//   console.log(colorsI);
//   console.log(JSON.stringify(colorsI));
//   console.log(JSON.stringify(orderListAddItemsFromJS.children));
// }
console.log("=========================================");

let ListToGetAgain = document.getElementById("orderList1").children;
console.log(ListToGetAgain);
for (const iList of ListToGetAgain) {
  console.log("iList ===", `"${iList.innerHTML}"`);
  //   iList.style.color = `"${iList.innerHTML}"`;
  iList.style.color = iList.innerHTML;
  //   iList.style.color = "blue";
}

// for (let i = 0; i < orderListAddItemsFromJS.children.length; i++) {
//   console.log(orderListAddItemsFromJS.children.length[i]);
// }

// 11. <button>change h1 color to blue</button> paspaudus daro tai kas parasyta
let h1ToBlueBtnEl = document.getElementById("h1ToBlueBtn");
let h1ToChangeColor = document.querySelector("h1");
h1ToBlueBtnEl.addEventListener("click", changeH1ToBlue);
function changeH1ToBlue() {
  h1ToChangeColor.style.color = "blue";
}

// 12. gauti ir iskonsolinti kiek elementu yra ol saraso elemente.
ListToGetAgain = document.getElementById("orderList1").children;
console.log(ListToGetAgain.length);

// 13. su js padidinti visu ol li elementu teksto raides i upperCase
for (let iToBig of ListToGetAgain) {
  //   iToBig = iToBig.innerHTML.toUpperCase();
  //   iToBig.toUpperCase();
  iToBig.style.textTransform = "uppercase";
}
//!!!!!!!!!!!!! 14. prie esamos  <h3 class="blog__title">Hello people</h3> prideti teksta '--Naujiena--'
let h3News = document.querySelector(".blog__title");
h3News.innerHTML += "--Naujiena--";
// 15. prie esamos  <p class="blog__text">Sveiki cia James.</p> prideti "as esu is Londono"

let jamesP = document.querySelector(".blog__text");
jamesP.innerHTML += "As esu is Londono";

// 16.  <button>light</button> padaro <article class="blog"> fona juoda o teksta balta
let whiteBtnEl = document.getElementById("articleToWhiteBtn");
let articleToBeWhite = document.getElementById("Article1");
function ArticleToWhiteF() {
  articleToBeWhite.style.backgroundColor = "white";
  articleToBeWhite.style.color = "black";
}
whiteBtnEl.addEventListener("click", ArticleToWhiteF);
// 17.  <button>dark</button> padaro <article class="blog"> texta juoda o fona balta
let articleTowhiteBtnEl = document.getElementById("articleToBlueBtn");
articleTowhiteBtnEl.addEventListener("click", ArticleToBlue);
function ArticleToBlue() {
  articleToBeWhite.style.backgroundColor = "blue";
  articleToBeWhite.style.color = "magenta";
}
// 18 <button>destroy</button> istrina <article class="blog">
let destroyBtnEl = document.getElementById("destroyArticleBtn");
destroyBtnEl.addEventListener("click", destroyArticle);
function destroyArticle() {
  articleToBeWhite.remove();
}
// 19. <div class="box-container"></div> i vidu ikelti paragrafa su tekstu "i am dynamic" (innerHTML)
let moreTextToAdd = document.getElementById("boxForAddedListItems");
console.log(moreTextToAdd);

moreTextToAdd.innerHTML += `<p>i am dynamic </p>`;
// 20.  <button>add paragraph</button> paspaudus ivyksta 19ta uzduotis
let addParagraphBtnEl = document.getElementById("addParagraphBtn");
addParagraphBtnEl.addEventListener("click", addParagraphMore);

function addParagraphMore() {
  moreTextToAdd.innerHTML += `<p>i am dynamic </p>`;
}
// 21. <button>Turn <span>dark</span> mode on</button> paspaudus pakeiciam teksta dark i light

let changeAllTextTo = document.getElementById("swichTextColorsBtn");
let allBodyTexts = document.querySelector("body");
let modeToChangeEl = document.getElementById("modeTochange");
console.log("modeToChangeEl ===", modeToChangeEl);

function AllTextToDark() {
  allBodyTexts.style.color = "black";
}
function AllTextToWhite() {
  allBodyTexts.style.color = "white";
}

function darkOrWhiteText() {
  if (modeToChangeEl.innerHTML === "dark") {
    //thats true
    AllTextToWhite();
    modeToChangeEl.innerHTML = "white";
  } else if (modeToChangeEl.innerHTML === "white") {
    AllTextToDark();
    modeToChangeEl.innerHTML = "dark";
  }
}
console.log('modeToChangeEl = "dark" ===', modeToChangeEl.innerHTML === "dark");

changeAllTextTo.addEventListener("click", darkOrWhiteText); //seem legit

// 22. <button>Turn <span>dark</span> mode on</button> kiekviena karta paspaudus keiciam teksta dark i light ir atvirksciai
