const gulp = require("gulp");
const browserSync = require("browser-sync").create();

// Vigilar Sass y Servidor
gulp.task("serve", function() {
  browserSync.init({
    server: "./src"
  });

  gulp.watch("src/*.html").on("change", browserSync.reload);
  gulp.watch("src/css/*.css").on("change", browserSync.reload);
});

gulp.task("default", ["serve"]);
