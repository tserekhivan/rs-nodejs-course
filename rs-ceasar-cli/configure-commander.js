const { program } = require('commander');
const { parseStringToDecimal, checkValid } = require('./helper');

function checkValidShift(value) {
  const result = parseStringToDecimal(value);

  if (!result) {
    throw 'Please enter valid value of shift';
  }

  return result;
}

function checkValidAction(value) {
  if (!checkValid(['encode', 'decode'], value)) {
    throw `'${value}' is not validity on action type. Please enter correct value (encode/decode)`;
  }

  return value;
}

module.exports = () => {
  program
    .requiredOption('-s, --shift <type>', 'a shift', checkValidShift)
    .option('-i, --input <type>', 'an input file')
    .option('-o, --output <type>', 'an output file')
    .requiredOption(
      '-a, --action <type>',
      'an action encode/decode',
      checkValidAction
    )
    .parse(process.argv);
};
