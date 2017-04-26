var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry: {
      index: './assets/js/index.jsx',
      app: './assets/js/app.js'
    },

    output: {
        path: path.resolve(__dirname, './assets/bundles'),
        filename: "[name]-[hash].js"
    },

    resolve: {
      extensions: ['.js', '.jsx']
    },
    
    plugins: [
        new BundleTracker({filename: './webpack-stats.json'}),
    ],

    module: {
        rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015']
            }
          }
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
        },
        {
          test: /\.(png|jpg)$/,
          loader: 'url?limit=25000'
        }  
      ]
    }
};