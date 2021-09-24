const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //dodavanje plugina za extrak.

module.exports = (env) => {
    isProduction = env === 'production'; // kada je production onda koristimo isProducton
    const CSSExtract = new ExtractTextPlugin('styles.css'); //kreiramo novu instancu plugina
    //ime instance CSSExtract je proizvoljno, a fajl css ce biti taj u koji sve smestamo kasnije
    return {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public', 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            // use: ['style-loader', 'css-loader', 'sass-loader'] pre optimizacije
            // use: CSSExtract.extract({use: ['css-loader', 'sass-loader']}) //nakon optimizacije
            //styles idu u odvojeni fajl
            use: CSSExtract.extract({use: [
                {loader: 'css-loader',
                options: {sourceMap: true} },
                {loader: 'sass-loader',
                options: {sourceMap: true} }
            ]
            })
        } ]
    },
    plugins: [ CSSExtract ],  // dodali smo ovo
    devtool: isProduction ? 'source-map' : 'inline-source-map', //zadnja samo za development
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,  //umesto 404 salje fallback u public
        publicPath: '/dist/'
    }
    };
};