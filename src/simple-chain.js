const CustomError = require("../extensions/custom-error");

const chainMaker = {
  current: [],
  getLength() {
    return this.current.length;
  },
  addLink(value) {
    this.current.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (this.checkNumber(position)) {
      if (position < 1 || position > this.getLength()) {
        this.delete();
        throw new Error('Removing link position is out of range');
      }
      const index = position - 1;
      this.current.splice(index, 1);
      return this;
    }
    this.delete();
    throw new Error('Error');
  },
  reverseChain() {
    this.current.reverse();
    return this;
  },
  finishChain() {
    const chain = this.getMas();
    this.delete();
    return chain;
  },
  checkNumber(num) {
    return typeof num === 'number' && (num ^ 0) === num;
  },
  delete() {
    this.current.length = 0;
  },
  getMas() {
    return this.current.join('~~');
  }
};

module.exports = chainMaker;
