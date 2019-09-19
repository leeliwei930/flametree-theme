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
.webpackConfig({
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'assets/js/vue/components'),
            '@store': path.resolve(__dirname, 'assets/js/vue/store')
        }
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
            }
        ]
    }
})
.disableNotifications()
.js( 'assets/js/index.js' , 'assets/public/js/index.js')
.js( 'assets/js/jquery.js' , 'assets/public/js/jquery.js')
.sass('assets/css/lib.scss', 'assets/public/css/lib.css')
.sass('assets/css/app.scss', 'assets/public/css/app.css')
.copy('node_modules/@fortawesome/fontawesome-free/webfonts' , "./assets/fonts/vendor/@fortawesome/fontawesome-free")
.browserSync({
    proxy : "flametree.test",
    host : "flametree.test",
    notify: false,
    files: [
        "assets/**/*.scss",
        "assets/**/*.css",
        "assets/js/vue/components/*.vue",
        "assets/js/vue/store/*.js",
        "assets/js/vue/*.js",
        "**/*.htm",
        "**/*.html",
    ]
});
