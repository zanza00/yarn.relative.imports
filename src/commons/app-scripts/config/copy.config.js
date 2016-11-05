var ionicCopy = require("@ionic/app-scripts/config/copy.config.js");

ionicCopy.include = (ionicCopy.include || []).concat(
  {
    src: 'src/commons/assets/',
    dest: 'www/assets/'
  },
  {
    src: 'node_modules/ionicons/dist/fonts/',
    dest: '{{WWW}}/assets/fonts/'
  }
);

module.exports = ionicCopy;
