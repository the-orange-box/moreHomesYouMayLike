const path = require('path');
module.exports = {
 entry: path.resolve(__dirname, 'client/src', 'index.jsx'),
 output: {
   filename: 'main.js',
   path: path.resolve(__dirname, 'public'),
 },
 resolve: {
   extensions: ['.jsx', '.js', '.json', '.css']
 },
 module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       exclude: /node_modules/,
       use: {
         loader: 'babel-loader',
         options: {
           presets: ["@babel/preset-env", "@babel/preset-react"]
         }
       }
     },
     {
       test: /\.css$/,
       use: [
         'style-loader',
         {
           loader: 'css-loader',
           options: {
             importLoaders: 1,
             modules: true
           }
         }
       ]
     }
   ]
 },
 mode: "development"
};