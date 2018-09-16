const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry:'./main.js',
    output:{
        filename:'[name].bundle.js',
        chunkFilename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title:'webpack-vue-base',
            template:'index.html',
            inject:'body'
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(png|svg|jpg|git)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test:/\.vue$/,
                use:[
                    'vue-loader'
                ]
            },
            {
                test:/\.less$/,
                use:[{
                    loader:"style-loader"
                },{
                    loader:"css-loader"
                },{
                    loader:"less-loader"
                }]
            },{
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:["babel-loader"]
            },{
                test:/\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use:['url-loader']
            }
        ]
    }
}