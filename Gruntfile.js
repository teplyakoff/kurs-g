module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jsonlint: {
      src: ['package.json', 'manifest.json']
    },

    csslint: {
      options: {
        ids: false
      },
      src: 'css/**/*.css'
    },

    bumpup: ['package.json', 'manifest.json']
  });

  grunt.loadNpmTasks('grunt-jsonlint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-bumpup');

  grunt.registerTask('default', ['jsonlint', 'csslint']);
};
