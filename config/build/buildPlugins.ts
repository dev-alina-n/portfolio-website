import HTMLWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import Dotenv from 'dotenv-webpack';
import CopyPlugin from 'copy-webpack-plugin';

export function buildPlugins(): webpack.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({
            template: path.resolve('public', 'index.html'),
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
        }),
        new Dotenv({
            systemvars: true,
            path: path.resolve('./.env'),
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve('public', 'locales'),
                    to: path.resolve('build', 'locales'),
                },
                {
                    from: path.resolve('public', 'assets', 'background'),
                    to: path.resolve('build', 'assets', 'background'),
                },
                {
                    from: path.resolve('public', 'assets', 'docs'),
                    to: path.resolve('build', 'assets', 'docs'),
                },
                {
                    from: path.resolve('public', 'assets', 'svgIcons'),
                    to: path.resolve('build', 'assets', 'svgIcons'),
                },
            ],
        }),
    ];
}
