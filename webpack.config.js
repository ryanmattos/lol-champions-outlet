const path = require('path');
const MiniCSS = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
   mode: "production",
   entry: {
      script: path.resolve(__dirname, "src", "index.ts"),
      // styles: path.resolve(__dirname, "src",  "public", "style.scss") 
   },
   output: {
      path: path.join(__dirname, "docs"),
      filename: "[name].js",
      clean: true,
   },
   resolve: {
      extensions: [".ts", ".js"],
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            loader: "ts-loader",
            exclude: /node_modules/,
         },
         {
            test: /\.scss?$/,
            use: [
               MiniCSS.loader,
               // Creates `style` nodes from JS strings
               // "style-loader",
               // Translates CSS into CommonJS
               "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
         },
      ],
   },
   plugins: [
      // new CopyPlugin({
      //    patterns: [
      //       {from: ".", to: ".", context: "src/public"},
      //       // {from: ""}
      //    ]
      // }),
      new MiniCSS({
         filename: 'style.css'
      }),
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname,  "src", "public", "index.html"),
         filename: "index.html",
         chunks: ["index"],
       }),
   
   ],
};