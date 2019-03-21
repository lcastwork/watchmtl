const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");

gulp.task("sass", function() {
  return gulp
    .src(["node_modules/bootstrap/scss/bootstrap.scss", "src/scss/*.scss"])
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

// Vigilar Sass y Servidor
gulp.task("serve", ["sass"], function() {
  browserSync.init({
    server: "./src"
  });

  gulp.watch("src/*.html").on("change", browserSync.reload);
  gulp.watch(["src/scss/*.scss"], ["sass"]).on("change", browserSync.reload);
});

gulp.task("default", ["serve"]);
