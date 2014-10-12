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

    bumpup: {
      options: {
        updateProps: {
          pkg: 'package.json'
        }
      },
      files: ['package.json', 'src/manifest.json']
    },

    compress: {
      chrome: {
        options: {
          archive: function() {
            return 'build/chrome-' + grunt.config.get('pkg').version + '.zip';
          },
          mode: 'zip'
        },
        files: [
          {
            cwd: 'src/', expand: true, src: [
              '**/*',
              '!js/vendor/**/*',
              'js/vendor/requirejs/require.js',
              'js/vendor/jquery/dist/jquery.min.js'
            ]
          }
        ]
      }
    },

    shell: {
      'release-start': {
          command: function () {
            return 'git checkout -b release-' + grunt.config.get('pkg').version + ' devel';
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-jsonlint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-bumpup');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', 'lint');

  grunt.registerTask('lint', ['jsonlint', 'csslint']);

  grunt.registerTask('build', ['lint', 'compress:chrome']);

  grunt.registerTask('release:start', function(type) {
    type = type || 'patch';
    grunt.registerTask('release:go', ['lint', 'bumpup:' + type, 'shell:release-start']);
    grunt.task.run('release:go');
  });
};
