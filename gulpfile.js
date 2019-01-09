var gulp 	= require('gulp'),
	watch 	= require('gulp-watch');

gulp.task('default', function(done){
    console.log("Hooray, you created a gulp task!");
    done();
});

gulp.task('html', function(done){
	console.log("Imagine something useful going here!");
	done();
});

 gulp.task('watch',function(done){
 	gulp.watch('./app/index.html', function(){
 		gulp.start('html');
 	});
     done();
 });