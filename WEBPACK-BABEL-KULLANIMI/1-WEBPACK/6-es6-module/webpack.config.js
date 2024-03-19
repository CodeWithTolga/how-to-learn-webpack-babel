
const HTmlWebPackPlugins = require("html-webpack-plugin");
const path = require("path");

module.exports = {//module dışarı açma

    // entry: "./src/js/script.js",//gelen script yeri
    //bunu async-await kullanımları için yükledik
    entry: ["babel-polyfill", "./src/js/script.js"],
    output: {
        path: path.resolve(__dirname, "dist"),// dist klasörü ile birleştirme işlemi yapıyoruz
        filename: "js/bundle.js",//dist/js/bundle.js oluşturulsun
    },
    // mode: "development"//development = geliştirici!!!
    //Not: mode: kısmını burada değilde istersen package.json > scripts kısmında da yazabilirsin
    /**Örnek:
     * "dev": "webpack --mode development" => bunu geliştirirken kullanabilirsin dosya sıkıştırmaz
     * "build": "webpack --mode production" => bunu da yayınlarken kullanabilirsin dosyalaru sıkıştırır
     * 
     * yukardakiler çalıştırırken = "npm run dev" veya "npm run build" demen lazım terminalde sonra live-server ile çalıştırılır
     * bunun amacı bir build dosyası oluşturur filename kısmındaki
     */

    //npm install webpack-dev-server indirdikten sonra
    devServer:{//çalıştırmak için
        static: "./dist",//dist içersinde çalıştıracak ve tüm dosyalara ulaşabilecek!
    },
    plugins: [
        //bunun amacı, herhangi bir html dosayası yoksa bu senin yerine oluşturur 
        //ama klasör içersinde görünmez sadece tarayıcı tarafında gözükür içerdikleri yazmadan hemde
        new HTmlWebPackPlugins({
            filename: "index.html",//oluşturulacak olan sayfanın ismi
            template: "./src/index.html"//buradaki dosyayı template olarak kullanacak yani yukardaki işlemi almış olduk
        })
    ],
    module: {
        rules: [
          {
            test: /\.m?js$/,//regex ile sonu .js ile bitenleri tarıyor
            exclude: /node_modules/,//node_modules içersinde olan .js dosyalarını içermiyor 
            use: {//kullan
              loader: "babel-loader",//kullanılacak olan
              options: {//ayarlar
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
}