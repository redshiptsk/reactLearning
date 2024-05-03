const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const nodemon = require('nodemon');
const compiler = webpack(webpackConfig);
const path = require('path')

compiler.run((err) => {
    if (err) {
        console.log('compile fail', err)
    }
    compiler.watch({}, (err) => {
        if (err) {
            console.log('compile fail', err)
        }
        console.log('comp success')
    })

    nodemon({
        script: path.resolve(__dirname, '../dist/server/server.js'),
        watch: [
            path.resolve(__dirname, '../dist/server'),
            path.resolve(__dirname, '../dist/client')
        ]

    })

})