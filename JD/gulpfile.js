const gulp = require("gulp");
// const gulp = "2";
// console.log(gulp)
// var gulp = require("gulp-minify-css");
const autoprefixer = require("gulp-autoprefixer");
const htmlmin = require("gulp-htmlmin");
const postcss = require("gulp-postcss");
const uglify = require("gulp-uglify");
const cssnano = require("gulp-cssnano");
console.log("\n");
console.log(Object.keys(gulp))

gulp.task("css", function() {
    return gulp.src(["./index.css"])
        // .pipe(postcss())
        .pipe(autoprefixer())
        .pipe(cssnano())
        .pipe(gulp.dest("./dest"))
})

gulp.task("html", function() {
    return gulp.src(["./jdindex.html"])
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        // .pipe(htmlmin("index.html"))
        .pipe(gulp.dest("./dest"))
})

gulp.task("js", function() {
    gulp.src(["./index.js"])
        .pipe(uglify())
        .pipe(gulp.dest("./dest"))
})

gulp.task("default", ["css", "html", "js"]);