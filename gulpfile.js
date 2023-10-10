const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');

// css sass
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

// js
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const stripComments = require('gulp-strip-comments');

// images
let imagemin;
const webp = require('gulp-webp');
const avif = require('gulp-avif');

/* ========== CSS ========== */
const compilerCSS = () => {
  return gulp
    .src('src/scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/css'));
};

const purgeCSS = () => {
  return gulp
    .src('build/css/main.css')
    .pipe(
      postcss([
        require('@fullhuman/postcss-purgecss')({
          content: ['./*.html', './src/js/*.js'],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        }),
      ])
    )
    .pipe(gulp.dest('build/css'));
};

/* ========== JavaScript ========== */
// prettier-ignore
const scripts = () => {
  return gulp
    .src('src/js/**/*.js')
    .pipe(uglify())
    .pipe(stripComments())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('build/js'));
};

/* ========== IMG ========== */
const movImgs = async () => {
  await loadImagemin();
  return gulp
    .src('src/img/**/*')
    .pipe(imagemin({ optimizationLevel: 7 }))
    .pipe(gulp.dest('build/img'));
};

// prettier-ignore
const loadWebp = () => {
  return gulp
    .src('src/img/**/*.{png,jpg}')
    .pipe(webp())
    .pipe(gulp.dest('build/img'));
};

// prettier-ignore
const loadAvif = () => {
  return gulp
  .src('src/img/**/*.{png,jpg}')
  .pipe(avif({ quality: 50 }))
  .pipe(gulp.dest('build/img'));
};

const loadImagemin = async () => {
  if (!imagemin) {
    imagemin = (await import('gulp-imagemin')).default;
  }
};

/* ========== fontawesome ========== */
// prettier-ignore
const fontawesomeFonts = () => {
  return gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/*', { allowEmpty: true })
  .pipe(gulp.dest('build/fonts'));
};

// prettier-ignore
const fontawesomeCss = () => {
  return gulp.src('node_modules/@fortawesome/fontawesome-free/css/all.min.css', { allowEmpty: true })
  .pipe(gulp.dest('build/css'));
};

/* ========== watch file ========== */
const watchFile = done => {
  gulp.watch('src/scss/**/*.scss', compilerCSS);
  gulp.watch('src/img/**/*', movImgs);
  gulp.watch('src/img/**/*', loadWebp);
  gulp.watch('src/img/**/*', avif);
  gulp.watch('src/js/**/*.js', scripts);

  done();
};

exports.compilerCSS = compilerCSS;
exports.movImgs = movImgs;
exports.loadWebp = loadWebp;
exports.loadAvif = loadAvif;

exports.default = gulp.series(gulp.parallel(scripts, movImgs, loadWebp, loadAvif, fontawesomeFonts, fontawesomeCss), compilerCSS, purgeCSS, watchFile);
