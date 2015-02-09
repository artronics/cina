var elixir = require('laravel-elixir'),
    gulp = require('gulp');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    //Compiling sass files
    mix.sass('screen.scss');

    //Concatenating files
    mix.styles([
        'screen.css'
    ], 'public/css/screen.min.css', 'public/css');

    mix.copy('js/app.js', 'public/js/app.js');
    ////Concatenating files
    //mix.scripts([
    //    'app.js'
    //], 'public/js/app.min.js', 'public/js');

    //Versioning files
    mix.version('public/css/screen.min.css');
    //mix.version('public/js/app.min.js');
});

/*
** Here specify which files must be copied from vendor directory
 */
gulp.task('copy', function() {

    //Stylesheets
     gulp.src('public/vendor/bootstrap/dist/css/bootstrap.min.css')
        .pipe(gulp.dest('public/css'));
    gulp.src('public/vendor/font-awesome/css/font-awesome.min.css')
        .pipe(gulp.dest('public/css'));

    //Scripts
    gulp.src('public/vendor/angular/angular.min.js')
        .pipe(gulp.dest('public/js'));

    //Fonts
    gulp.src('public/vendor/font-awesome/fonts/*')
        .pipe(gulp.dest('public/fonts'));
});
