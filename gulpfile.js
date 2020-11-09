const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sass = require('gulp-sass-no-nodesass');
const browserSync = require('browser-sync').create();

sass.compiler = require('sass')

let paths = {
    style: ['./src/scss/style.scss'],
    js: ['./src/js/*.js'],
    bulma: ['./node_modules/bulma/bulma.sass']
}

function compileJs() {
    return gulp.src('./src/js/*.js')
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public/'))
        .pipe(browserSync.stream())
}

function compileSass() {
    return gulp.src('./src/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public'))
        .pipe(browserSync.stream())
}

function compileIcons() {
    return gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
        .pipe(gulp.dest('./public/webfonts'))
}

function serve() {
    browserSync.init({
        server: {
            baseDir: './public'
        }
    })

    gulp.watch(paths.style, compileSass)
    gulp.watch(paths.js, compileJs)
}



exports.default = gulp.series(
    compileJs,
    compileSass
)

exports.serve = gulp.series(compileIcons, serve)
