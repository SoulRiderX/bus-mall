'use strict';
// better pattern

BusMall.allBusMalls = [];

function BusMall(name, filepath, numshown, numclicked) {
  this.name = name;
  this.filepath = filepath;
  this.numshown = numshown;
  this.numclicked = numclicked;
  BusMall.allBusMalls.push(this);
}

var pics = ['images/bag.jpg', 'images/bananas.jpg', 'images/bathroom.jpg', 'images/boots.jpg', 'images/breakfast.jpg', 'images/bubblegum.jpg', 'images/chair.jpg', 'images/cthulhu.jpg', 'images/dog-duck.jpg', 'images/dragon.jpg', 'images/pen.jpg', 'images/pet-sweep.jpg', 'images/scissors.jpg', 'images/shark.jpg', 'images/sweep.png', 'images/tauntaun.jpg', 'images/unicorn.jpg', 'images/usb.gif', 'images/water-can.jpg', 'images/wine.jpg'];

var first = document.getElementById('first', [0]);
var second = document.getElementById('second', [1]);
var third = document.getElementById('third', [2]);

function randomPic () { // from MDN
var randomNumber = Math.floor(Math.random() * 10) + 1;
var imgName = "img_" + randomNumber;
document.getElementById("first").src='images/bag.jpg';
}
