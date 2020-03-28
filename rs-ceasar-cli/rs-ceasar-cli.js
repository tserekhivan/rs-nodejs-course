const configureCommander = require('./configure-commander');

try {
  configureCommander();
} catch (error) {
  console.error('error: ', error);
  return 1;
}

return 0;
