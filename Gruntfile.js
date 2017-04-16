module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: ['assets/css/scss/**/*.scss'],
                dest: 'assets/css/screen.scss'
            }
        },
        sass: {
            dist: {
                files: {
                    'assets/css/screen.compiled.css': 'assets/css/screen.scss'
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    '/Users/ac-lperez/Projetos/leticiaguerzoni/site/content/themes/leticiaguerzoni/assets/css/screen.css': ['assets/css/screen.compiled.css']
                }
            }
        },
        watch: {
            css: {
                files: ['assets/css/scss/**/*.scss'],
                tasks: ['concat', 'sass', 'cssmin']
            }
        }
    });
    grunt.registerTask('default', ['concat', 'sass', 'cssmin', 'watch']);
    grunt.registerTask('build', ['concat', 'sass', 'cssmin']);
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
};
