/**
 * Created by vivek_000 on 05/01/2017.
 */
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            dist: {
                files: {
                    "dist/string-utils.min.js": ["src/string-utils.js"]
                }
            }
        },
        jsdoc: {
            dist: {
                src: ['src/*.js', 'test/*.js'],
                options: {
                    destination: 'doc'
                }
            }
        },
        jshint: {
            ignore_warning: {
                options: {
                    '-W015': true
                },
                src: 'src/**',
                filter: 'isFile'
            }
        },
        qunit: {
            all: ['test/**/*.html']
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');

    // Default task(s).
    grunt.registerTask('default', ['jshint','uglify', 'jsdoc', 'qunit']);
    grunt.registerTask('test', ['uglify', 'qunit']);
};