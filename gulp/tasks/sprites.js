//dependencies
var del 		= require('del'),
	gulp 		= require('gulp'),
	rename		= require('gulp-rename'),
	svgSprite 	= require('gulp-svg-sprite');

//generates sprite.css, which hosts coordinates for svg vectors
var config = {
	mode: {
		css: {
			sprite: 'sprite.svg',
			render: {
				css: {
					template: './gulp/template/sprite.css'
				}
			}
		}
	}
}

//delete old sprite folder in order to make sure no old sprite files exist
gulp.task('beginClean', function(){
	return del(['./app/temp/sprite', './app/assets/images/sprites'])
});

//gathers individual icons and generates single sprite file
gulp.task('createSprite', ['beginClean'], function(){
	return gulp.src('./app/assets/images/icons/**/*.svg')
		.pipe(svgSprite(config))
		.pipe(gulp.dest('./app/temp/sprite'));
});

//copies the sprite graphic to assets/images/sprites folder
gulp.task('copySpriteGraphic', ['createSprite'], function(){
	return gulp.src('./app/temp/sprite/css/**/*.svg')
		.pipe(gulp.dest('./app/assets/images/sprites'));
});

//renames and pushes sprite file to modules folder
gulp.task('copySpriteCSS', ['createSprite'], function(){
	return gulp.src('./app/temp/sprite/css/*.css')
		.pipe(rename('_sprite.css'))
		.pipe(gulp.dest('./app/assets/styles/modules'));
});

//gets rid of temp folder
gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], function(){
	return del('./app/temp/sprite');
})

//runs all previous tasks
gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteGraphic','copySpriteCSS', 'endClean']);