// Karma configuration
// Generated on Mon Apr 20 2015 21:58:04 GMT+0100 (BST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'src/main/webapp/lib/ionic/js/ionic.bundle.js',
      'src/main/webapp/scripts/app.js',
      'src/main/webapp/scripts/app/**/*.js',
      'src/main/webapp/scripts/components/**/*.{js,html}',
      'src/test/javascript/lib/angular-mocks.js',
      'src/test/javascript/**/!(karma.conf).js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/main/webapp/scripts/app.js': ['coverage'],
      'src/main/webapp/scripts/app/**/*.js': ['coverage'],
      'src/main/webapp/scripts/components/**/*.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'junit', 'coverage'],


    // the default configuration
    junitReporter: {
      outputFile: 'build/test-results/karma-test-results.xml',
      suite: ''
    },


    // optionally, configure the reporter
    coverageReporter: {
      type : 'html',
      dir : 'build/reports/karma-coverage/'
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
