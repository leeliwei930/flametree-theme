/* eslint-disable */
let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix
.babelConfig({
    plugins: ['@babel/plugin-syntax-dynamic-import'],
})
.webpackConfig({
        devtool: 'inline-source-map',
        resolve: {
            alias: {
                '@components': path.resolve(__dirname, 'assets/js/vue/components'),
                '@flametree-theme' : path.resolve('assets')
            }
        },
        output: {
            publicPath: "/themes/godspeed-flametree-theme/",
            chunkFilename: "assets/public/js/chunks/[name].js",

        },
        module: {
            rules: [
                {
                    test: /\.pug$/,
                    oneOf: [
                        {
                            resourceQuery: /^\?vue/,
                            use: ['pug-plain-loader']
                        },
                        {
                            use: ['raw-loader', 'pug-plain-loader']
                        }
                    ]
                },
                {
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /node_modules/
                }
            ]
        }
})
.disableNotifications()
.js('assets/js/index.js' , 'assets/public/js/index.js')
.js('assets/js/jquery.js' , 'assets/public/js/jquery.js')

.sass('assets/css/authenticated/app.scss', 'assets/public/css/authenticated/app.css')
.sass('assets/css/lib.scss', 'assets/public/css/lib.css')
.copy('assets/css/override.css', 'assets/public/css/override.css')
.sass('assets/css/app.scss', 'assets/public/css/app.css')
.copy('node_modules/@fortawesome/fontawesome-free/webfonts' , "./assets/fonts/vendor/@fortawesome/fontawesome-free")
    .copy('node_modules/bootstrap/dist/js/bootstrap.min.js' , "./assets/public/js/bootstrap.js")


    .browserSync({
        proxy : "flametree.test",
        notify: false,
        files: [
            "assets/**/*.scss",
            "assets/**/*.css",
            "assets/js/vue/components/*.vue",
            "assets/js/vue/components/**/*.vue",
            "assets/js/vue/store/*.js",
            "assets/js/vue/*.js",
            "**/*.htm",
            "**/*.html",
        ]
});
