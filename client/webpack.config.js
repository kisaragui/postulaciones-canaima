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
      extensions: ['.js', '.css', '.json'],
      modules: ['node_modules']
    },
    
    plugins: [
        new BundleTracker({filename: './webpack-stats.json'}),
        new ExtractTextPlugin({
          filename: "[name]-[hash].css",
          disable: false,
          allChunks: true
        }),
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
          test: /(\.css|scss)$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
                {
                  loader: "css-loader",
                  options: {
                    sourceMap: true,  
                  }, 
                },   
            ]
          })
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/, 
          use: 'url-loader?limit=100000'
        }  
      ]
    }
};