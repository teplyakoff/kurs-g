module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jsonlint: {
      src: ['package.json', 'manifest.json']
    }
  });

  grunt.loadNpmTasks('grunt-jsonlint');

  grunt.registerTask('default', ['jsonlint']);
};
