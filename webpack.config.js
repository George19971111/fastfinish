const HtmlWebPackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require("path");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});
module.exports = {
  entry: "./src/index.js",
  output: {
    // NEW
    path: path.join(__dirname, "dist"),
    publicPath: '/',
    filename: "[name].js"
  }, // NEW Ends
  plugins: [htmlPlugin],
  devServer: {
  contentBase: path.resolve(__dirname), // New
  historyApiFallback: true,
  publicPath: "" // Both publicPath options should be the same as what is in your html loading the scripts
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader"
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
      }
    },
    {
      test: /\.(mov|mp4)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }  
        }
      ]
    }
    ]
  }
};
