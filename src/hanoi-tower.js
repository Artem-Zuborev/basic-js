const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let info = {};
  info.turns = Math.pow(2, disksNumber) - 1;
  info.seconds = Math.floor((3600 / turnsSpeed) * info.turns);
  return info;
};


// function findStep(num) {
//   if(num===1)return num;
//   return findStep(num-1)*2+1;
// }
// (((1)*2+1)*2+1)*2+1

