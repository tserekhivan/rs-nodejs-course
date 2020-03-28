const { pipeline } = require('stream');
const configureCommander = require('./configure-commander');
const readInputStream = require('./read-input-stream');
const writeOutputStream = require('./write-output-stream');
const ceasarTransformer = require('./ceasar-transformer');

function onError(error) {
  if (error) {
    console.warn(error);
  } else {
    console.warn('succes');
  }
}

try {
  configureCommander();
  pipeline(readInputStream(), ceasarTransformer, writeOutputStream(), onError);
} catch (error) {
  console.error('error: ', error);
  return 1;
}

return 0;
