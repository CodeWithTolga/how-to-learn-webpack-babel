const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/js/script.js",
  output: {
    path:path.resolve(__dirname, "dist"),
    filename: "js/bundle.js"
  },
  devServer:{
    static: "./dist"
  },
  plugins: [
     new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html"
     })
  ]
}   