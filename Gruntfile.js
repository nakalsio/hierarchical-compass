module.exports = function(grunt) {
	var rootapp = 'root-app',
		childapp1 = 'child-app1',
		childapp2 = 'child-app2';

	// Project Configuration	
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		compass: {
			root: {
				options: {
					sassDir: rootapp + '/sass',
					cssDir: rootapp + '/css'
				}
			},
			child1: {
				options: {
					sassDir: childapp1 + '/sass',
					cssDir: childapp1 + '/css'
				}
			},
			child2: {
				options: {
					sassDir: childapp2 + '/sass',
					cssDir: childapp2 + '/css'
				}
			}
		},
		concat: {
			child1: {
				src: [rootapp + '/css/*.css', childapp1 + '/css/*.css'],
				dest: childapp1 + '/dist/' + childapp1 + '.css'
			},
			child2: {
				src: [rootapp + '/css/*.css', childapp2 + '/css/*.css'],
				dest: childapp2 + '/dist/' + childapp2 + '.css'
			}
		},
		cssmin: {
			child1: {
				src: [rootapp + '/css/*.css', childapp1 + '/css/*.css'],
				dest: childapp1 + '/dist/' + childapp1 + '.min.css'
			},
			child2: {
				src: [rootapp + '/css/*.css', childapp2 + '/css/*.css'],
				dest: childapp2 + '/dist/' + childapp2 + '.min.css'
			}
		},
		rev: {
			options: {
				algorithm: 'sha1',
				length: 8
			},
			files: {
				src: ['**/dist/*.{js,css,png,jpg}']
			}
		},
		clean: {
			dist: [childapp1 + '/dist', childapp2 + '/dist']
		},
		watch: {
			files: ['Gruntfile.js', './**/*.scss'],
			tasks: ['default']
		}
	});

	// Load the plugin that provides the 'compass' task
	grunt.loadNpmTasks('grunt-contrib-compass');

	// Load the plugin that provides the 'concat' task
	grunt.loadNpmTasks('grunt-contrib-concat');

	// Load the plugin that provides the 'cssmin' task
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// Load the plugin that provides the 'rev' task
	grunt.loadNpmTasks('grunt-rev');

	// Load the plugin that provides the 'clean' task
	grunt.loadNpmTasks('grunt-contrib-clean');

	// Load the plugin that provides the 'watch' task.
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', ['clean', 'compass', 'concat', 'cssmin']);

	// Release task
	grunt.registerTask('release', ['default', 'rev'])
}