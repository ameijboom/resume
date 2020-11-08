const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sass = require('gulp-sass-no-nodesass');

sass.compiler = require('sass')

gulp.task('compile-js', function () {
    return gulp.src('./src/js/*.js')
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public/'))
})

gulp.task('compile-sass', function () {
    return gulp.src('./src/scss/style.scss', {allowEmpty: true})
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public'))
})

gulp.task('watch-style', function() {
    return gulp.watch('./src/scss/style.scss')
        .on('change', function () {
            console.log('File changed! Compiling...')
            gulp.task('compile-sass')
        })
})

exports.default = gulp.series(
    gulp.task('compile-sass'),
    gulp.task('compile-js')
)

