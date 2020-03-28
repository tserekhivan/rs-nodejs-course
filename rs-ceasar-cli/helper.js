module.exports = {
  parseStringToDecimal: value => {
    return parseInt(value, 10);
  },

  checkValid: (validArray, value) => {
    return validArray.some(validItem => validItem === value);
  }
};
