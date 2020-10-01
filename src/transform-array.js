// const CustomError = require("../extensions/custom-error");

// module.exports = function transform(arr) {
//   if (!Array.isArray(arr)) {
//     throw error;
//   }


//   let deleteFlag = false;
//   let newMas = arr.map((item, index, array) => {
//     if (item === '--double-next') {
//       if ((index + 1) !== array.length) {
//         return array[index + 1];
//       }
//       return item;
//     }
//     return item;
//   }).filter((item, index, array) => {
//     if ((index === 0 && item === '--discard-prev') || (index === array.length - 1 && item === '--double-next')) {
//       return false;
//     }

//     if (deleteFlag) {
//       deleteFlag = false;
//       if (array[index + 1] === '--discard-prev' || array[index + 1] === '--double-prev') {
//         deleteFlag = true;
//       }
//       return false;
//     }
//     if (item === '--discard-next') {
//       if ((index + 1) !== array.length) {
//         deleteFlag = true;
//       }
//       return false;
//     }
//     if ((index + 1) !== array.length && array[index + 1] === '--discard-prev') {
//       deleteFlag = true;
//       return false;
//     }

//     if (item === '--double-prev') {
//       //        if((index+1)!==array.length){
//       //          deleteFlag=true;
//       //        }
//       //array[index]=array[index+1];
//       return false;
//     }


//     return true;

//   })
//   return newMas;
// };

const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //throw new CustomError('Not implemented');
  if (!Array.isArray(arr)) throw Error('Param is not array')
  let flagDiscard = false
  return arr.map((item, index, array) => {
    if (flagDiscard) {
      flagDiscard = false
      return '';
    }
    if (index > 0) {
      if (array[index] === '--double-prev') {
        if (index > 1 && array[index - 2] === '--discard-next') return ''
        return array[index - 1]
      }
    }
    if (index < array.length - 1) {

      if (array[index + 1] === '--discard-prev') {
        return '';
      }
      if (array[index] === '--discard-next') {
        flagDiscard = true;
      }
      if (array[index] === '--double-next') {
        return array[index + 1]
      }
    }
    if (item === '--double-prev' || item === '--discard-prev' || item === '--discard-next') {
      return '';
    }
    if (item === '--double-next') {
      return ''
    }
    return item
  }).filter(item => item !== '')
};






