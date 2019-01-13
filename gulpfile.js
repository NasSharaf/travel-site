//dependencies
var gulp 			= require('gulp'),
	watch 			= require('gulp-watch'),
	postcss			= require('gulp-postcss'),
	autoprefixer 	= require('autoprefixer'),
	cssvars			= require('postcss-simple-vars'),
	nested			= require('postcss-nested'),
	cssImport		= require('postcss-import'),
	browserSync		= require('browser-sync').create();

//main tasks
gulp.task('default', function(){
    console.log("Hooray, you created a gulp task!");
});

gulp.task('html', function(){
	console.log("Imagine something useful going here!");
});

gulp.task('styles', function() {
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
		.pipe(gulp.dest('./app/temp/styles'));
});

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

gulp.task('cssInject', ['styles'], function(){
	return gulp.src('./app/temp/styles/styles.css')
		.pipe(browserSync.stream());
});