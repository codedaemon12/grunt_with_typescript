
module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-ts');

	grunt.initConfig({
		ts: {
			main :{
				src:['typescript/*.ts'],
				out:'javascript/main.js' // for single file
				//dest:'javascript/' //for individual files
			}
		}

	});
	grunt.registerTask('default',['ts']);
}