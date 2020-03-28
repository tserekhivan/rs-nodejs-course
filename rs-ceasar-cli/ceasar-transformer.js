const { Transform } = require('stream');

const ceasarTransformer = new Transform({
  readableObjectMode: true,
  writableObjectMode: true,

  transform(chunk, encoding, callback) {
    this.push(chunk.toString());
    callback();
  }
});

module.exports = ceasarTransformer;
