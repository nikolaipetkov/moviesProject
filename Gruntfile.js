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
            keepalive: true
        }
    }

}   //,




    // grunt-express will serve the files from the folders listed in `bases`
    // on specified `port` and `hostname`
    /*
    express: {
      all: {
      options: {
         
       port: 9003,
       hostname: "0.0.0.0",
       bases: 'app/',
       }, // Replace with the directory you want the files served from
                           // Make sure you don't use `.` or `..` in the path as Express
                           // is likely to return 403 Forbidden responses if you do
                           // http://stackoverflow.com/questions/14594121/express-res-sendfile-throwing-forbidden-error
        livereload: true
   }
  },
    */

    // grunt-watch will monitor the projects files

/*
    watch: {
      all: {

        files: ['index.html', 'app.css'],
        tasks: ['jshint'],
        options: {
          livereload: true
        }
      }
    },
*/


    // grunt-open will open your browser at the project's URL
    /*
    open: {
      all: {
        // Gets the port from the connect configuration
        path: 'http://localhost:<%= express.all.options.port%>'
      }
    }
    */
   
  });


  // Creates the `server` task
  grunt.registerTask('server', [
    'connect',
    //'express',
   //'open',
   //'watch'
  ]);
};