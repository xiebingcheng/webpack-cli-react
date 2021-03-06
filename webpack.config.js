//webpack 配置文件

const path = require('path');
const webpack = require('webpack');
//引入html插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
//css插件 整合进link标签 引入 css
const ExtractTextPlugin = require("extract-text-webpack-plugin");

//判断是否为线上环境
let WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev';

const config = {
    //设置入口文件
    entry: './src/app.jsx',
    //输出
    output: {
        //打包文件 放在根目录 dist 文件夹里
        path: path.resolve(__dirname, 'dist'),
        //编译生成的js文件存放到根目录下面的js目录下面,如果js目录不存在则自动创建
        filename: 'js/app.min.js',
        publicPath: "/dist/"
        
        // publicPath: WEBPACK_ENV === 'dev'
        //     ? '/dist/' : '//www.baidu.com/admin-v2-fe/dist/',
        //如果是发布环境,则需要把上面的地址更改到对应的项目地址即可
    },
    //单独配置组件的存放位置,使得以后更改文件位置不需要一个文件一个文件的更改路径
    resolve: {
        alias: {
            // __dirname 是根目录的意思.
            page: path.resolve(__dirname, 'src/page'),
            component: path.resolve(__dirname, 'src/component')
        }
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
        port: 8088,
        //设置 不存在的地址 跳转到 特定的地址
        historyApiFallback: {
            index: '/dist/index.html'
        },
        
        // proxy:{
        //     //解决项目的跨域问题
        //     //项目的url开头
        //     '/manage':{
        //         //需要代理的 地址头
        //         target:'http://www.baidu.com',
        //         //此参数 发出代理,让后台认为是target的地址发出的请求. 伪装上面的地址发出的请求.
        //         changeOrigin: true
        //     }
        // }
    },

};

module.exports = config;