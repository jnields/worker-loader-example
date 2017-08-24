const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './main.js',
    commons: 'is-sorted'
  },
  output: {
    path: path.resolve('./public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.worker.js$/,
        use: 'worker-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      filename: 'manifest.js'
    })
  ]
}
