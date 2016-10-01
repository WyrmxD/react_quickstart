var path = require('path');
var webpack = require('webpack');

var outPath = path.resolve(__dirname, 'dist');
var IS_DEV = (process.env.NODE_ENV === 'development');
console.log('Webpack config. Environment: ', (IS_DEV ? 'dev' : 'production'));

var devConfig = {
  entry: [
    './src/app.js'
  ],
  output: {
    path: outPath,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js*/,
        include: path.resolve(__dirname, 'src'),
        loaders: ['react-hot', 'babel']
      }
    ]
  }
};

var prodConfig = {
  entry: [
    './src/app.js'
  ],
  output: {
    path: outPath,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js*/,
        include: path.resolve(__dirname, 'src'),
        //REMOVE react-hot for production build
        loaders: ['babel']
      }
    ]
  }
}

module.exports = IS_DEV ? devConfig : prodConfig;