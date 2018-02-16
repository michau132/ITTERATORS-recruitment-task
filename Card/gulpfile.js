const gulp            = require('gulp');
const sass            = require('gulp-sass');
const plumber         = require('gulp-plumber');
const autoprefixer    = require('gulp-autoprefixer');
const browserSync     = require('browser-sync').create();
const watch           = require("gulp-watch"); //watch
const sourcemaps      = require('gulp-sourcemaps');
const gutil           = require('gulp-util');
const rename          = require("gulp-rename"); //zmiana nazwy wynikowych plikow

function ourErrorHandler(error) {
    console.log(gutil.colors.red(error.toString()));
    this.emit('end')
}
gulp.task("browseSync", function() {
    browserSync.init({
        server: "./public",
        notify: true, //jak strona sie przeladowuje i pojawi sie info
        //host: "192.168.0.24", //IPv4 Address Wirless LAN adapter WiFi from ipconfig
        //port: 3000,
        open: true //czy otwierac strone
    });
});

gulp.task('sass', function () {
    return gulp.src('./src/style.scss') //pobierz mi pliki ktore tobie pobralem
        .pipe(plumber({ //dodajemy plumbera i tworzymy funkcje, wyzej jest wypisana
            errorHandler : ourErrorHandler
        }))
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "compressed" //nested, expanded, compact, compressed
        })) //wykonaj jakies operacje
        .pipe(autoprefixer({
                browsers: ['last 2 versions']
            }))
        .pipe(rename({ //zamieniam wynikowy plik na style.min.css
            suffix: ".min",
            basename: "style"
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./public/css'))  //destem zapisz mi je w katalogu
        .pipe(browserSync.stream({match: "**/*.css"}))
});
gulp.task('watch', function () {
    gulp.watch('./src/**/*.scss', ['sass']);
    gulp.watch("./public/**/*.html").on("change", browserSync.reload);
});
gulp.task('default', function () {
    console.log('---------rozpoczynamy prace---------------');
    gulp.start(['sass','browseSync', 'watch']); //odpalamy jako drugi task ten watch, watch jest na koncu
})





