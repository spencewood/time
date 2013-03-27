module.exports = function(grunt) {
    grunt.initConfig({
        requirejs: {
            compile: {
                options: {
                    baseUrl: "app/scripts",
                    mainConfigFile: "app/scripts/config.js",
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
};