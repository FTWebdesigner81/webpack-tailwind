const path = require('path');

module.exports = {
    mode: "development", 
    context: path.resolve(__dirname, "assets"),
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, "assets/dist"),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require.resolve('tailwindcss'),
                                    require.resolve('autoprefixer')
                                ],
                            }
                        }
                    }
                ]
            }
        ]
    }
}