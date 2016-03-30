module.exports = function(config) { config.set({
    "basePath": "/home/rshah/dev/git/reportmanager/reportmanager",
    "colors": true,
    "logLevel": "ERROR",
    "files": [
        "grails-app/assets/bower/**/jquery.js",
        "**/assets/bower_components/**/jquery.js",
        "**/assets/bower/**/jquery.js",
        "**/assets/vendor/**/jquery.js",
        "**/assets/libs/**/jquery.js",
        "grails-app/assets/bower/**/angular.js",
        "**/assets/bower_components/**/angular.js",
        "**/assets/bower/**/angular.js",
        "**/assets/vendor/**/angular.js",
        "**/assets/libs/**/angular.js",
        "grails-app/assets/bower/**/*.js",
        "**/assets/bower_components/**/*.js",
        "**/assets/bower/**/*.js",
        "**/assets/vendor/**/*.js",
        "**/assets/libs/**/*.js",
        "grails-app/assets/**/app.js",
        "grails-app/assets/**/application.js",
        "grails-app/assets/**/*.module.js",
        "grails-app/assets/**/!(controllers|directives|services|domain|conf|config)/*!(Spec|spec).js",
        "grails-app/assets/**/*!(Spec|spec).js",
        "grails-app/assets/**/*spec.js",
        "src/test/**/*spec.js",
        "grails-app/assets/**/*Spec.js",
        "src/test/**/*Spec.js",
        "grails-app/assets/**/test/**/*.js",
        "src/test/**/test/**/*.js",
        "grails-app/assets/**/tests/**/*.js",
        "src/test/**/tests/**/*.js",
        "grails-app/assets/**/mock/**/*.js",
        "src/test/**/mock/**/*.js",
        "grails-app/assets/**/spec/**/*.js",
        "src/test/**/spec/**/*.js"
    ],
    "browsers": [
        "PhantomJS"
    ],
    "frameworks": [
        "jasmine"
    ],
    "reporters": [
        "progress"
    ],
    "preprocessors": {
        "grails-app/assets/javascripts/**/*.js": [
            "wrap"
        ]
    },
    "exclude": [
        
    ],
    "wrapPreprocessor": {
        "template": "(function () { 'use strict';  <%= contents %> })()"
    }
}) };