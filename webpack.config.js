const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {
    const isProd = env['prod'];
    const bundleName = 'index'; // если нужно будет расширить конфиг

    return {
        mode: isProd ? 'production' : 'development',
        entry: './src/react/index.tsx',
        output: {
            filename: 'bundle.[hash].js',
            path: path.resolve(__dirname, `dist/client/${bundleName}`),
            assetModuleFilename: 'assets/[hash][ext][query]',
            clean: true,
        },
        devtool: isProd ? undefined : 'inline-source-map',

        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].[hash].css',
                chunkFilename: '[id].css',
            }),
        ],

        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: [
                        {
                            loader: 'ts-loader',
                            options: {
                                transpileOnly: !isProd,
                            },
                        },
                    ],
                    exclude: '/node_modules/',
                },
                {
                    test: /\.module\.s(a|c)ss$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: {
                                    localIdentName: '[folder]__[local]--[hash]',
                                    exportLocalsConvention: 'camelCaseOnly',
                                },
                            },
                        },
                        {
                            loader: 'sass-loader',
                        },
                    ],
                },
                {
                    test: /\.module\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: {
                                    localIdentName: '[folder]__[local]--[hash]',
                                    exportLocalsConvention: 'camelCaseOnly',
                                },
                            },
                        },
                    ],
                },
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
                    exclude: /\.module\.css$/,
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
    };
};
