// 自带的库
const path = require('path')
const {VueLoaderPlugin} = require("vue-loader/dist/index")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {DefinePlugin} = require('webpack')

module.exports = {
  entry: './app/index.js',
  output: {
      path: path.resolve(__dirname, '././build'), // 必须使用绝对地址，输出文件夹
      filename: "bundle.js", // 打包后输出文件的文件名
     
  },
  resolve:{
    extensions: [".js", ".json", ".vue", ".jsx", ".ts", ".tsx"],
    alias: {
      
    }
  },
  module:{
    rules:[
      {
        test: /\.css$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"},
          {
            loader: 'postcss-loader',
            // options: {
            //   postcssOptions: {
            //     plugins: [
            //       require('autoprefixer')
            //     ]
            //   }
            // }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"},
          {loader: "less-loader"},
          {loader: 'postcss-loader'}
        ]
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        type: "asset",
        parser:{
          dataUrlCondition: {
            maxSize: 60 * 1024
          }
        },
        generator: {
          filename: "[name]_[hash:8][ext]"
        }
      },
      {
        test: /\.js$/,
        use: [
          {
            loader:"babel-loader",
            // options:{
            //   plugins:[
            //     "@babel/plugin-transform-arrow-functions",
            //     '@babel/plugin-transform-block-scoping'
            //   ]
            // }
          }
        ]
      },
      {
        test: /\.vue$/,
        use:[
          {loader:'vue-loader'}
        ]
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin(),
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title:'ddd',
      template: "./index.html"
    }),
    new DefinePlugin({
      notry:'666',
      test:'9999'
    })
  ],
  
};