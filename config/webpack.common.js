const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, '..', 'src', 'index.ts'),
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  }
}
