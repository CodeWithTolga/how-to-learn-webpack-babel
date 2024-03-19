const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    entry: ["babel-polyfill","./src/js/index.js"],
    output: {
        path:path.resolve(__dirname, "dist"),
        filename: "js/bundle.js"
    },
    devServer:{
        static: "./dist"
    },
    plugins: [
        //"npm install html-webpack-plugin": "^5.6.0"
        new HtmlWebpackPlugin({
              filename: "deneme.html",
              template: "./src/index.html"
        }),
        //"npm install mini-css-extract-plugin --save-dev"
        //css için
        new MiniCssExtractPlugin({
           filename:"./css/style.css"//oluşturulacak dosya yolu 
        })
    ],
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']// JavaScript dosyalarını işlemek için babel-loader kullan
              }
            }
          },
          // "css-loader": "^6.10.0", ->  aşağıdaki kısmı kullanabilmek için ilk başta bu paketleri yüklemen gerek.
          {
            test:/\.css$/i,
            use:[
              MiniCssExtractPlugin.loader,//CSS dosyalarını dışa aktarmak için MiniCssExtractPlugin kullan
              "css-loader"// CSS dosyalarını işlemek için css-loader kullan
            ]
          }
        ]
      }
}
