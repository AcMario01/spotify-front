module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: __dirname + '/dist'
    },
    module: {
      rules: [
        {
          test: /.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'] // Procesadores de SCSS
        }
      ]
    }
  };
