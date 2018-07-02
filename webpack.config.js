const nodeExternals = require('webpack-node-externals')

module.exports = [
  {
    entry: './src/index.js',
    output: {
      filename: 'client.bundle.js',
      path: __dirname + '/dist'
    },
    module: {
      rules: [
        { test: /\.js$/, use: 'babel-loader' },
        { test: /\.css$/, use: ['style-loader', 'css-loader'] }
      ]
    }
  },
  {
    entry: './server/index.js',
    output: {
      filename: 'server.bundle.js',
      path: __dirname + '/dist'
    },
    node: {
      __dirname: true,
      __filename: true
    },
    target: 'node',
    externals: [nodeExternals()],
    module: {
      rules: [
        { test: /\.js$/, use: 'babel-loader' }
      ]
    }
  }
]