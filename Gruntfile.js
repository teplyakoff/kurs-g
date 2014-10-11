module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jsonlint: {
      src: ['package.json', 'src/manifest.json']
    },

    csslint: {
      options: {
        ids: false
      },
      src: 'src/css/**/*.css'
    },

    bumpup: ['package.json', 'src/manifest.json'],

    zip: {
      chrome: {
        cwd: 'src',
        src: ['src/**/*'],
        dest: 'build/chrome.zip'
      }
    }
  });

  grunt.loadNpmTasks('grunt-jsonlint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-bumpup');
  grunt.loadNpmTasks('grunt-zip');

  grunt.registerTask('default', ['jsonlint', 'csslint']);

  grunt.registerTask('build', ['jsonlint', 'csslint', 'zip:chrome']);
};
