var webpack = require("webpack");
var path = require('path');

var projectPath = path.join(__dirname, '../');

// returns a Compiler instance
webpack({
  entry: {
    index: path.join(projectPath, 'src/pkg/index.js')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.join(projectPath, 'dist'),
    libraryTarget: 'umd'
  }
}, function(err, stats) {
  if (err)
    return console.warn(err);
  var jsonStats = stats.toJson();
  if (jsonStats.errors.length > 0)
    return console.warn(jsonStats.errors);
  if (jsonStats.warnings.length > 0)
    console.warn(jsonStats.warnings);
  console.log('success');
});
