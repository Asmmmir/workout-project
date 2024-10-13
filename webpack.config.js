const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output:  {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html'
    })],
    module: {
       rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          },
          {
            test: /\.css$/i,
            include: path.resolve(__dirname, 'src'),
            use: ['style-loader', 'css-loader', 'postcss-loader'],
          },
          {
            test: /\.(jpg|png|svg)$/,
            use: {
              loader: 'url-loader',
            },
          },
       ]
      },
      devServer: {
        static: path.join(__dirname, 'dist'),
        port: 3000,
        open: true
      }
}