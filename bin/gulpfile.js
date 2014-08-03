var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var connect = require('gulp-connect');

gulp.task('sass', function() {
    gulp.src('./../css/sass/*.sass')
        .pipe(sass({sourcemap: false, style: 'compact'}))
        .pipe(gulp.dest('./../css'));
});

gulp.task('watch', function() {
	var watcher = gulp.watch('./../css/sass/**/*.sass', ['sass']);
	
	watcher.on('change', function (event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
});

gulp.task('server', function() {
	connect.server({
		root: './../',
		port: 8000,
		livereload: false
	});
});

// uncomment `sass` task if your want compile after start
gulp.task('default', [/*'sass',*/ 'watch', 'server']);