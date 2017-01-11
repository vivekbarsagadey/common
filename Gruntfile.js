/**
 * Created by vivek_000 on 05/01/2017.
 */
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                sourceMap : true
            },
            dist: {
                files: {
                    "dist/string-utils.min.js": ["dist/string-utils.js"]
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
                    '-W015': true,
                    'esnext': true
                },
                src: 'src/**',
                filter: 'isFile'
            }
        },
        qunit: {
            all: ['test/**/*.html']
        },
        es6transpiler: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                sourceMap : true
            },
            dist: {
                files: {
                    'dist/string-utils.js': ['src/string-utils.js']
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-es6-transpiler');

    // Default task(s).
    //grunt.registerTask('default', ['jshint','uglify', 'jsdoc', 'qunit']);
    grunt.registerTask('test', ['es6transpiler','uglify', 'qunit']);
    grunt.registerTask('default', ['jshint','es6transpiler','uglify', 'jsdoc' ,'qunit']);


};