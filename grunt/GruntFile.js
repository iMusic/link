module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      options: {
        port: 8000,
        hostname: 'localhost',
        livereload: 35729
      },

      server: {
        options: {
          open: false,
          base: ['.']
        }
      }
    },

    watch: {
      livereload: {
        options: {
          livereload: '<%=connect.options.livereload%>'
        },

        files: [
          '**/*.html',
          '**/*.js',
          '**/*.scss',
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch'); 
  grunt.registerTask('server', [
    'connect:server',
    'watch'
  ]);
}