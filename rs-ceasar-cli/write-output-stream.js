const { program } = require('commander');
const fs = require('fs');

module.exports = () => {
  let writable;
  if (program.output) {
    // eslint-disable-next-line no-sync
    if (fs.existsSync(program.output)) {
      try {
        writable = fs.createWriteStream(program.output);
      } catch (error) {
        throw error.message;
      }
    } else {
      throw `output path '${program.output}' is not correct`;
    }
  } else {
    writable = process.stdout;
  }
  return writable;
};
