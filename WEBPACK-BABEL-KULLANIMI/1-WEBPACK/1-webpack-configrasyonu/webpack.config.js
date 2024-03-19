const path = require("path");

module.exports = {//module dışarı açma
    entry: "./src/js/script.js",//gelen script yeri
    output: {
        path: path.resolve(__dirname, "dist"),// dist klasörü ile birleştirme işlemi yapıyoruz
        filename: "js/bundle.js",//dist/js/bundle.js oluşturulsun
    },
    // mode: "development"//development = geliştirici!!!
    //Not: mod: kısmını burada değilde istersen package.json > scripts kısmında da yazabilirsin
    /**Örnek:
     * "dev": "webpack --mode development" => bunu geliştirirken kullanabilirsin dosya sıkıştırmaz
     * "build": "webpack --mode production" => bunu da yayınlarken kullanabilirsin dosyalaru sıkıştırır
     * 
     * yukardakiler çalıştırırken = "npm run dev" veya "npm run build" demen lazım terminalde sonra live-server ile çalıştırılır
     * bunun amacı bir build dosyası oluşturur filename kısmındaki
     */
}