var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    gls = require('gulp-live-server'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    browserify = require('gulp-browserify'),
    rename = require('gulp-rename');
    // nodemailer = require('nodemailer');

gulp.task('default', ['sass', 'browserify', 'image', 'watch', 'serve']);

gulp.task('sass', function () {
 return gulp.src('app/sass/**/*.scss')
   .pipe(concat('style.min.css'))
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(gulp.dest('public/css'));
});

// gulp.task('js', function () {
//  return gulp.src('app/js/**/*.js')
//    .pipe(concat('main.min.js'))
//    .pipe(uglify())
//    .pipe(gulp.dest('public/js'));
// });

gulp.task('browserify', function(){
    return gulp.src(['app/js/**/*.js'])
        .pipe(browserify())
        .pipe(uglify())
        .pipe(rename("main.min.js"))
        .pipe(gulp.dest('public/js/'));
});

gulp.task('image', function () {
 return gulp.src('app/img/*')
      .pipe(imagemin())
      .pipe(gulp.dest('public/image'))
});

gulp.task('watch', function () {
  gulp.watch('app/sass/**/*.scss', ['sass']);
  gulp.watch('app/js/**/*.js', ['browserify']);
  gulp.watch('app/img/*', ['image']);
});

gulp.task('serve', function(){
  var server = gls.static('public/',8000);
  server.start();
  gulp.watch('public/css/**/*.css', function(file){
    gls.notify.apply(server,[file])
  });
  gulp.watch('public/js/**/*.js', function(file){
    gls.notify.apply(server,[file])
  });
  gulp.watch('public/image/*', function(file){
    gls.notify.apply(server,[file])
  });
  gulp.watch('public/*.html', function(file){
    gls.notify.apply(server,[file])
  });
});

gulp.task('lint', function() {
  return gulp.src('app/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});
