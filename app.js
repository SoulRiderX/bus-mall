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

// new Goat('cool goat', 'img/cool-goat.png');
// new Goat('mean goat', 'img/mean-goat.png');
