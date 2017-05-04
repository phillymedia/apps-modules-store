module.exports = (grunt) => {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		yuidoc: {
			compile: {
				name: "<%= pkg.name %>",
				description: "<%= pkg.description %>",
				version: "<%= pkg.version %>",
				url: "<%= pkg.homepage %>",
				options: {
					paths: "./src",
					// themedir: "path/to/custom/theme/",
					outdir: "./docs",
				},
			},
		},
	});

	grunt.loadNpmTasks("grunt-contrib-yuidoc");
};
