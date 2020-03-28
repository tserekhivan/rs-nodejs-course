const { program } = require('commander');
const fs = require('fs');

module.exports = () => {
  let readable;
  if (program.input) {
    // eslint-disable-next-line no-sync
    if (fs.existsSync(program.input)) {
      try {
        readable = fs.createReadStream(program.input);
      } catch (error) {
        throw error.message;
      }
    } else {
      throw `input path '${program.input}' is not correct`;
    }
  } else {
    readable = process.stdin;
    console.log('Please, enter the string');
    process.stdin.on('data', () => {
      process.stdin.pause();
    });
  }
  return readable;
};
