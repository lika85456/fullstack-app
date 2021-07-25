/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const {
    resolve
} = require("path");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isProduction = process.env.NODE_ENV === "production";

const config = {
    mode: isProduction ? "production" : "development",
    devtool: isProduction && "inline-source-map",
    entry: {
        index: "./src/client/index.tsx"
    },
    output: {
        path: resolve(__dirname, "public","dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [ ".js", ".jsx", ".ts", ".tsx" ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                            // options...
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: "file-loader",
                options: {
                  outputPath: "../fonts",
                }
              }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/styles.css"
        })
    ],
    watch:true
};

if (isProduction) {
    config.optimization = {
        minimizer: [new TerserWebpackPlugin()]
    };
}
else {
    config.devServer = {
        port: 80,
        open: true,
        hot: true,
        compress: true,
        stats: "errors-only",
        overlay: true,
        contentBase:"public"
    };
}

module.exports = config;