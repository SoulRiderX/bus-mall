'use strict';

var allPictures = [];
var oldFirstRandom = 0;
var oldSecondRandom = 0;
var oldThirdRandom = 0;
var firstRandom = 0;
var secondRandom = 0;
var thirdRandom = 0;
function Picture(name, filepath) {
  this.name = name;
  this.filepath = 'images' + filepath + '.jpg';
  this.numshown = 0;
  this.numclicked = 0;
  allPictures.push(this);
}

new Picture('bag');
new Picture('banana');
new Picture('bathroom');
new Picture('boots');
new Picture('breakfast');
new Picture('bubblegum');
new Picture('chair');
new Picture('cthulhu');
new Picture('dog-duck');
new Picture('dragon');
new Picture('pen');
new Picture('pet-sweep');
new Picture('scissors');
new Picture('shark');
new Picture('sweep');
new Picture('tauntaun');
new Picture('unicorn');
new Picture('usb');
new Picture('water-can');
new Picture('wine');

var pics = ['images/bag.jpg', 'images/bananas.jpg', 'images/bathroom.jpg', 'images/boots.jpg', 'images/breakfast.jpg', 'images/bubblegum.jpg', 'images/chair.jpg', 'images/cthulhu.jpg', 'images/dog-duck.jpg', 'images/dragon.jpg', 'images/pen.jpg', 'images/pet-sweep.jpg', 'images/scissors.jpg', 'images/shark.jpg', 'images/sweep.png', 'images/tauntaun.jpg', 'images/unicorn.jpg', 'images/usb.gif', 'images/water-can.jpg', 'images/wine.jpg'];



var first = document.getElementById('first');
var second = document.getElementById('second');
var third = document.getElementById('third');
var container = document.getElementById('container');

function random() {
  return Math.floor(Math.random() * allPictures.length);
}

function randomPic () { // from MDN
  oldFirstRandom = firstRandom;
  oldSecondRandom = secondRandom;
  oldThirdRandom = thirdRandom;

  firstRandom = random();
  while(oldFirstRandom === firstRandom || firstRandom === oldSecondRandom || firstRandom === oldThirdRandom) {
    firstRandom = random();
  };

  secondRandom = random();
  while(secondRandom === oldFirstRandom || secondRandom === oldSecondRandom || secondRandom === oldThirdRandom || secondRandom === firstRandom) {
    secondRandom = random();
  };

  thirdRandom = random();
  while(thirdRandom === oldFirstRandom || thirdRandom === oldSecondRandom || thirdRandom === oldThirdRandom || thirdRandom === firstRandom || thirdRandom === secondRandom) {
    thirdRandom = random();
  };

  var firstPic = pics[firstRandom];
  var secondPic = pics[secondRandom];
  var thirdPic = pics[thirdRandom];
  console.log(firstPic, secondPic, thirdPic);
  first.src = firstPic;
  second.src = secondPic;
  third.src = thirdPic;
}



function HandleClick(e) {
  console.log(e);
  randomPic();
}
container.addEventListener('click', HandleClick);
