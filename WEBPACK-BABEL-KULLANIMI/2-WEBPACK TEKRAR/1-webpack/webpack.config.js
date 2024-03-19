const path = require("path");

module.exports = {
  entry: "./src/js/script.js",
  output: {
    path:path.resolve(__dirname, "dist"),
    filename: "js/bundle.js"
  },
  devServer:{
    static: "./dist"
  }
}   

// devServer: {//webpack-dev-server kurulumu için
//     static: "./dist"//çalıştırılacak klasör ismi
//   }