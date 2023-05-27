// 自带的库
const path = require('path')
module.exports = {
  entry: './app/index.js',
  output: {
      path: path.resolve(__dirname, 'build'), // 必须使用绝对地址，输出文件夹
      filename: "bundle.js" // 打包后输出文件的文件名
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
      }
    ]
  },
  mode: 'development',
};