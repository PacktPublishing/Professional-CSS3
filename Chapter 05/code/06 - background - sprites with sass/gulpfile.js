var gulp = require('gulp'),
    compass = require('gulp-compass');

gulp.task('compass', function () {
    return gulp.src('src/styles/main.sass')
        .pipe(compass({
            sass: 'src/styles',
            image: 'src/images',
            css: 'dist/css',
            generated_images_path: 'dist/images',
            sourcemap: true,
            style: 'compressed'
        }))
        .on('error', function(err) {
            console.log(err);
        })
        //.pipe(gulp.dest('dist/style.css'));
});


gulp.task('default', function () {
    gulp.watch('src/styles/**/*.sass', ['compass']);
    gulp.watch('src/images/**/*', ['compass']);
});
