var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task("tsCompile", function(){
  return gulp.src('src/**/*.ts')
        .pipe(ts({
          "target": "es5",
          "experimentalDecorators": true
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task("default", gulp.series("tsCompile"));
