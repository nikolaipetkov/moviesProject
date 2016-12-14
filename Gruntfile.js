var modRewrite = require('connect-modrewrite');
// Gruntfile with the configuration of grunt-express and grunt-open. No livereload yet!
module.exports = function(grunt) {

  var serveStatic = require('serve-static');

  // Load Grunt tasks declared in the package.json file
require('load-grunt-tasks')(grunt);

  // Configure Grunt 
  grunt.initConfig({

/*
    connect: {
        options: {
            port: 9003,
            // Change this to '0.0.0.0' to access the server from outside.
            hostname: '0.0.0.0',
        },
        livereload: {
            options: {
                middleware: function (connect) {
                return [
                        modRewrite(['!\\.html|\\.js|\\.svg|\\.css|\\.png$ /index.html [L]'])
                        ];
                }
            }
        }
      },
*/


      connect: {
        options: {
          middleware: function(connect, options, middlewares) {
            var modRewrite = require('connect-modrewrite');

            // enable Angular's HTML5 mode
            middlewares.unshift(modRewrite(['!\\.html|\\.js|\\.svg|\\.css|\\.png$ /index.html [L]']));

            return middlewares;
          }
        },   
    
    server: {
        options: {
            port: 9005,
            base: "app/",
            keepalive: true,
            //livereload: true
        }
    }

} //,   

    // grunt-watch will monitor the projects files
/*

    watch: {
      all: {
        options: {
          livereload: true
        },
        files: ['app/index.html', 'app/style.css']//,
        //tasks: ['jshint'],

      }
    },

*/


   
  });


  // Creates the `server` task
  grunt.registerTask('server', [
    'connect',
   	//'watch'
  ]);
};