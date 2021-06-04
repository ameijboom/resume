const path = require('path');

module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './public')
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.(scss|sass|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
};