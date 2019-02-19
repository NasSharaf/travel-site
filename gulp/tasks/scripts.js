var gulp 	= require('gulp'),
	webpack = require('webpack');

gulp.task('scripts', ['modernizr'], function(callback){
	webpack(require('../../webpack.config.js'), function(err, stats) {
		//will log error out to console
		if (err) {
			console.log(err.toString());
		}
		//display stats about js scripts
		console.log(stats.toString());
		callback();
	});
});