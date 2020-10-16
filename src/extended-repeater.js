const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = ''
  if (options.separator === undefined) {
    options.separator = '+'
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|'
  }
  if (options.repeatTimes === 0 || options.repeatTimes === undefined) {
    result += str
    if (options.additionRepeatTimes === 0 || options.additionRepeatTimes === undefined) {
      result += options.addition
    }
  }
  for (let i = 0; i < options.repeatTimes; i++) {
    result += str
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      result += options.addition
      if (j < options.additionRepeatTimes - 1) {
        result += options.additionSeparator
      }
    }
    if (i < options.repeatTimes - 1) {
      result += options.separator
    }
  }
  return result
};
