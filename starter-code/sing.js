var numTimes = prompt("How many verses");
while(numTimes > 0) {
  console.log(numTimes + " bottles of beer on the wall");
  console.log(numTimes + " bottles of beer!");
  console.log("Take one down and pass it around");
  console.log(numTimes - 1 + " bottles of beer on wall!");

  numTimes--;
}
