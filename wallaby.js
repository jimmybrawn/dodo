module.exports = function (wallaby) {
	return {

		files: [{
				pattern: 'node_modules/react/dist/react-with-addons.js',
				instrument: false
			},
			'assets/**',
			'src/**'
		],

		tests: [
			'test/**/*Spec.jsx'
		],

		compilers: {
			'**/*.js*': wallaby.compilers.babel()
		}
	};
};