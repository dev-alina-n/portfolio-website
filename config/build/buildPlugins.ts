import HTMLWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import Dotenv from 'dotenv-webpack';

export function buildPlugins(): webpack.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({
            template: path.resolve('public', 'index.html'),
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
        }),
        new Dotenv(),
    ];
}
