const { pipeline } = require('stream');
const configureCommander = require('./configure-commander');
const readInputStream = require('./read-input-stream');
const writeOutputStream = require('./write-output-stream');

function onError(error) {
  if (error) {
    console.warn(error);
  } else {
    console.warn('succes');
  }
}

try {
  configureCommander();
  pipeline(readInputStream(), writeOutputStream(), onError);
} catch (error) {
  console.error('error: ', error);
  return 1;
}

return 0;
