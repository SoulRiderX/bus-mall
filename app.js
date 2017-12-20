'use strict';

var allPictures = [];
var oldFirstRandom = 0;
var oldSecondRandom = 0;
var oldThirdRandom = 0;
var firstRandom = 0;
var secondRandom = 0;
var thirdRandom = 0;
function Picture(name, ext) {
  this.name = name;
  this.filepath = 'images/' + name + ext;
  this.numshown = 0;
  this.numClicked = 0;
  allPictures.push(this);
}

new Picture('bag', '.jpg');
new Picture('banana', '.jpg');
new Picture('bathroom', '.jpg');
new Picture('boots', '.jpg');
new Picture('breakfast', '.jpg');
new Picture('bubblegum', '.jpg');
new Picture('chair', '.jpg');
new Picture('cthulhu', '.jpg');
new Picture('dog-duck', '.jpg');
new Picture('dragon', '.jpg');
new Picture('pen', '.jpg');
new Picture('pet-sweep', '.jpg');
new Picture('scissors', '.jpg');
new Picture('shark', '.jpg');
new Picture('sweep', '.png', '.jpg');
new Picture('tauntaun', '.jpg');
new Picture('unicorn', '.jpg');
new Picture('usb', '.gif');
new Picture('water-can', '.jpg');
new Picture('wine', '.jpg');

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

}

function populate() {
  randomPic();
  first.src = allPictures[firstRandom].filepath;
  first.alt = allPictures[firstRandom].name;
  second.alt = allPictures[secondRandom].name;
  third.alt = allPictures[thirdRandom].name;
  second.src = allPictures[secondRandom].filepath;
  third.src = allPictures[thirdRandom].filepath;
}

function HandleClick(e) {
  e.preventDefault();
  console.log(e.target);

  if (e.target.id === 'container') {
    console.log('click one of the images')
  } else {
    populate();
    for (var i = 0; i < allPictures.length; i++) {
      if (e.target.alt === allPictures[i].name) {
        allPictures[i].numClicked += 1;
        console.log(allPictures);
      }
    }
  }
}
populate();
container.addEventListener('click', HandleClick);
