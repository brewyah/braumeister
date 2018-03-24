const path = require("path");
const webpack = require("webpack");
const webpackBase = require("./base/base.config");

module.exports = webpackBase({
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, "../../dist"),
        hot: true,
        index: "index.html",
        open: true,
        port: 9000
    },
    devtool: "inline-source-map",
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    }
});