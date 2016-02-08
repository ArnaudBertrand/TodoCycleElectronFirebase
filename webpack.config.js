// webpack.config.js
module.exports = {
  devtool: 'source-map',
  debug: true,

  entry: {
    'app': './app/app'
  },

  output: {
    path: __dirname + '/build/',
    publicPath: 'build/',
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    extensions: ['', '.js', '.json', '.css', '.html']
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: [ /node_modules/ ],
        query: {
          presets: ['es2015'],
          cacheDirectory: true
        }
      }
    ]
  }
};