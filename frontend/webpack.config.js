// webpack.config.js
const path = require('path');

module.exports = {
  // Other webpack configuration options...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      // Use the unminified version of Bootstrap for debugging purposes
      'bootstrap/dist/css/bootstrap.min.css': 'bootstrap/dist/css/bootstrap.css',
    },
  },
};
