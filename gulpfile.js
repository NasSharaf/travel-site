var gulp = require('gulp');

require('./gulp/tasks/styles');
require('./gulp/tasks/watch');
require('./gulp/tasks/sprites');

gulp.task('default', function() {
	console.log('The Gulp files are running');
});
