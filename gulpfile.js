var gulp = require('gulp');

require('./gulp/tasks/styles');
require('./gulp/tasks/watch');

gulp.task('default', function() {
	console.log('The Gulp files are running');
});
