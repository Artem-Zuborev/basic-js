const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let name = '';
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      members[i] = members[i].trim().split('');
      name += members[i][0].toUpperCase();
    }
  }
  return name.split('').sort().join('');

  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
