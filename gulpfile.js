const gulp = require('gulp');
const less = require('gulp-less');
const browserSync = require('browser-sync').create();
const header = require('gulp-header');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const uglify = require('gulp-uglify');
const pkg = require('./package.json');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

const jsStrings = ['js/app-script/app.js', 'js/app-script/blog-app.js', 'js/component-script/blog.js',
    'js/component-script/books.js', 'js/component-script/recent-cards.js', 'js/creative-scripts/creative.js',
    'js/data-script/data.js'];

// Set the banner content
const banner = ['/*!\n',
    ' * Start Bootstrap - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
    ' * Copyright 2013-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
    ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n',
    ' */\n',
    ''
].join('');

// Compile LESS files from /less into /css
gulp.task('less', () => {
    return gulp.src('less/creative.less')
        .pipe(less())
        .pipe(header(banner, { pkg: pkg }))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});
// Minify all JS into one
gulp.task('minify-js', () => {
    return gulp.src(jsStrings)
        .pipe(concat('bundle.js'))
        .pipe(babel({ presets: ['env'] }))
        .pipe(uglify()).on('error', function (e) {
            console.log("injs", e);
        })
        .pipe(header(banner, { pkg: pkg }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('js'))
        .pipe(browserSync.reload({
            stream: true
        }))

})
// Minify compiled CSS
gulp.task('minify-css', ['less'], () => {
    return gulp.src('css/creative.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Minify  app-scripts JS
gulp.task('minify-app-js', () => {
    return gulp.src('js/app-script/app.js')
        .pipe(babel({ presets: ['env'] }))
        .pipe(uglify()).on('error', function (e) {
            console.log("in appjs", e);
        })
        .pipe(header(banner, { pkg: pkg }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('js/app-script'))
        .pipe(browserSync.reload({
            stream: true
        }))
});
// Minify  app-scripts JS
gulp.task('minify-blog-app-js', () => {
    return gulp.src('js/app-script/blog-app.js')
        .pipe(babel({ presets: ['env'] }))
        .pipe(uglify()).on('error', function (e) {
            console.log("in blogapp", e);
        })
        .pipe(header(banner, { pkg: pkg }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('js/app-script'))
        .pipe(browserSync.reload({
            stream: true
        }))
});
// Minify  component-scripts JS
gulp.task('minify-blog-js', () => {
    return gulp.src('js/component-script/blog.js')
        .pipe(babel({ presets: ['env'] }))
        .pipe(uglify())
        .pipe(header(banner, { pkg: pkg }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('js/component-script'))
        .pipe(browserSync.reload({
            stream: true
        }))
});
// Minify  component-scripts JS
gulp.task('minify-books-js', () => {
    return gulp.src('js/component-script/books.js')
        .pipe(babel({ presets: ['env'] }))
        .pipe(uglify()).on('error', function (e) {
            console.log("in books", e);
        })
        .pipe(header(banner, { pkg: pkg }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('js/component-script'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Minify  component-scripts JS
gulp.task('minify-recent-cards-js', () => {
    return gulp.src('js/component-script/recent-cards.js')
        .pipe(babel({ presets: ['env'] }))
        .pipe(uglify()).on('error', function (e) {
            console.log("in recent", e);
        })
        .pipe(header(banner, { pkg: pkg }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('js/component-script'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Minify  creative-scripts JS
gulp.task('minify-creative-js', () => {
    return gulp.src('js/creative-scripts/creative.js')
        .pipe(babel({ presets: ['env'] }))
        .pipe(uglify()).on('error', function (e) {
            console.log("in creative", e);
        })
        .pipe(header(banner, { pkg: pkg }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('js/creative-scripts'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Minify  data-scripts JS
gulp.task('minify-data-js', () => {
    return gulp.src('js/data-script/data.js')
        .pipe(babel({ presets: ['env'] }))
        .pipe(uglify()).on('error', function (e) {
            console.log("in data", e);
        })
        .pipe(header(banner, { pkg: pkg }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('js/data-script'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Copy vendor libraries from /node_modules into /vendor
gulp.task('copy', () => {
    gulp.src(['node_modules/bootstrap/dist/**/*', '!**/npm.js', '!**/bootstrap-theme.*', '!**/*.map'])
        .pipe(gulp.dest('vendor/bootstrap'))

    gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('vendor/jquery'))

    gulp.src(['node_modules/magnific-popup/dist/*'])
        .pipe(gulp.dest('vendor/magnific-popup'))

    gulp.src(['node_modules/scrollreveal/dist/*.js'])
        .pipe(gulp.dest('vendor/scrollreveal'))

    gulp.src([
        'node_modules/font-awesome/**',
        '!node_modules/font-awesome/**/*.map',
        '!node_modules/font-awesome/.npmignore',
        '!node_modules/font-awesome/*.txt',
        '!node_modules/font-awesome/*.md',
        '!node_modules/font-awesome/*.json'
    ])
        .pipe(gulp.dest('vendor/font-awesome'))
})

// Run everything
gulp.task('default', ['less', 'minify-css', 'minify-app-js', 'minify-creative-js', 'minify-data-js', 'minify-recent-cards-js', 'minify-books-js', 'minify-blog-app-js', 'minify-blog-js', 'copy']);

// Configure the browserSync task
gulp.task('browserSync', () => {
    browserSync.init({
        server: {
            baseDir: ''
        },
    })
})

// Dev task with browserSync
gulp.task('dev', ['browserSync', 'less', 'minify-css'], () => {
    gulp.watch('less/*.less', ['less']);
    gulp.watch('css/*.css', ['minify-css']);
    // gulp.watch('js/*/*.js', ['minify-js']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('js/**/*.js', browserSync.reload);
});
