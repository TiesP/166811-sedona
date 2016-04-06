"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var clean = require('gulp-clean');
var copy = require('gulp-copy');

gulp.task("style", function() {
  gulp.src("less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer({browsers: [
        "last 1 version",
        "last 2 Chrome versions",
        "last 2 Firefox versions",
        "last 2 Opera versions",
        "last 2 Edge versions"
      ]})
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.reload({stream: true}));
});

gulp.task("serve", ["build"], function() {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    ui: false
  });

  gulp.watch("less/**/*.less", ["style"]);
});

gulp.task("images", function() {
  return gulp.src("img/**/*.jpg")
    .pipe(imagemin({
      optimizationLevel: 3,
      progressive: true
    }))
    .pipe(gulp.dest("build/img"))
});

gulp.task("copy-html", function() {
  gulp.src("*.html")
    .pipe(copy("build"));
});

gulp.task("copy", function() {
  gulp.src(["*.html",
    "fonts/**/*.{woff,woff2}",
    "img/**/*.svg",
    "js/**/*.js"])
    .pipe(copy("build"));
});

gulp.task("build", ["clean-build"], function() {
  gulp.run("copy");
  gulp.run("style");
  gulp.run("images");
});

gulp.task("clean-build", function () {
  return gulp.src("build", {read: false})
    .pipe(clean());
});
