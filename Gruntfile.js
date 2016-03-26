module.exports = function(grunt) {
	grunt.initConfig({
		concat: {
			options: {
			  separator: ';',
			},
			dist: {
			  src: ['app/client/**/*.js', 'app/commande/**/*.js'],
			  dest: 'dist/dimagest.js'
			},
		},
		html2js: {
		  options: {
			base: 'app',
			module: 'dmArticleReservation',
			singleModule: true,
			useStrict: true,
			htmlmin: {
			  collapseBooleanAttributes: true,
			  collapseWhitespace: true,
			  removeAttributeQuotes: true,
			  removeComments: true,
			  removeEmptyAttributes: true,
			  removeRedundantAttributes: true,
			  removeScriptTypeAttributes: true,
			  removeStyleLinkTypeAttributes: true
			}
		  },
		  main: {
			src: ['*.html'],
			dest: 'template.js'
		  }
		}
		
	});

	grunt.loadNpmTasks('grunt-html2js');
	
	grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
	  if (target === 'dist') {
		return grunt.task.run(['build', 'connect:dist:keepalive']);
	  }

	  grunt.task.run([
		'html2js:main',
	  ]);
	});

	grunt.registerTask('build', [
	  'html2js:main',
	]);
  
};