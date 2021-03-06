module.exports = function(grunt) {
	grunt.initConfig({
		wiredep: {
			task: {
				src: [
				  'index.html',   // .html support...
				],
				options: {
				  // See wiredep's configuration documentation for the options
				  // you may pass:

				  // https://github.com/taptapship/wiredep#configuration
				}
			}
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
			src: ['dm-article-reservation.html'],
			dest: 'dm-article-reservation.tpl.js'
		  }
		}
	});

	grunt.loadNpmTasks('grunt-wiredep');
	grunt.loadNpmTasks('grunt-html2js');
	grunt.registerTask('default', ['wiredep','html2js']);
  
};