// Archivo de configuración para el webpack

// Para poder mandar a producción los archivos HTML empleamos el siguiente plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',

    output: {
        // clean nos actualiza el directorio dist automáticamente
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            }
        ]
    },

    optimization: {},

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Plantilla Webpack',
            template: './src/index.html'
        })
    ]
}