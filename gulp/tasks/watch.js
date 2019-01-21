//dependencies
var gulp 			= require('gulp'),
	watch 			= require('gulp-watch'),
	browserSync		= require('browser-sync').create();

//Main task that watches files and issues commands
gulp.task('watch',function(){
	//refresh browser
	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});
 	//for main html sheets
 	watch('./app/index.html', function(){
 		browserSync.reload();
 	});
 	//For styles sheets
 	watch('./app/assets/styles/**/*.css', function(){
 		gulp.start('cssInject');
 	});

 	gulp.start('default');
 });

//Takes any changes in files and displays on monitor
gulp.task('cssInject', ['styles'], function(){
	return gulp.src('./app/temp/styles/styles.css')
		.pipe(browserSync.stream());
});