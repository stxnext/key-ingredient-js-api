
module.exports = function(grunt) {

  grunt.initConfig({
    lint: {
      files: ['src/*.js', 'test/*.js']
    },

    min: {
      api: {
        src: 'src/*.js',
        dest: 'dist/ki-api.min.js'
      }
    }

  });

};
