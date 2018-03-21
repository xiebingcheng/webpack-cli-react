//webpack 配置文件

const path = require('path');
const webpack = require('webpack');
//引入html插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
//css插件 整合进link标签 引入 css
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const config = {
    //设置入口文件
    entry: './src/app.jsx',
    //输出
    output: {
        //打包文件 放在 dist 文件夹里
        path: path.resolve(__dirname, 'dist'),
        //编译生成的js文件存放到根目录下面的js目录下面,如果js目录不存在则自动创建
        filename: 'js/app.min.js',
        publicPath: "/dist/"
    },

    module: {
        rules: [
            // react 配置
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        //配置react时 需要安装 插件 babel-preset-react  这个是babel的插件
                        presets: ['env', 'react']
                    }
                }
            },
            // css 配置
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            // sass 配置
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            //图片 配置
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            //设置最小的需要转化为base64格式的图片的大小 默认 8K 大小
                            limit: 8192,
                            //设置图片的输出的路径和对应本来的名字和扩展名.
                            name: 'resource/[name].[ext]'
                        }
                    }
                ]
            }
        ],

    },
    //webpack的插件配置
    plugins: [
        new HtmlWebpackPlugin({
            //定义一个模板html, 然后打包输出依靠此模板输出.. 事先记得在src文件夹下先创建此html文件
            template: './src/index.html'
        }),
        //整合link标签引入 css 插件
        new ExtractTextPlugin("main.css"),

        //提出公共模块 webpack 自带插件
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'js/base.js'
        })
    ],
       //webpack-dev-server 配置 热更新及本地服务器需要的配置.
    devServer: {
        contentBase: './dist',
        //更改默认端口号
        port:8086
    },

};

module.exports = config;