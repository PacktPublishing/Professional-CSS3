var gulp = require('gulp'),
    compass = require('gulp-compass');

gulp.task('compass', function () {
    return gulp.src('src/styles/main.sass')
        .pipe(compass({
            sass: 'src/styles',
            image: 'src/images',
            css: 'dist/css',
            sourcemap: true,
            style: 'compressed'
        }))
        .pipe(gulp.dest('style.css'));
});

gulp.task('default', function () {
    gulp.watch('src/css/**/*.sass', ['compass']);
});
