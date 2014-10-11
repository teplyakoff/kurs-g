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
    }
  });

  grunt.loadNpmTasks('grunt-jsonlint');
  grunt.loadNpmTasks('grunt-contrib-csslint');

  grunt.registerTask('default', ['jsonlint', 'csslint']);
};
