module.exports = {
	"plugins": [
		"react"
	],
	"parserOptions": {
		"ecmaVersion": 6,
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true
		}
	},
	"env": {
		"es6": true,
		"browser": true,
		"node": true,
		"mocha": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"rules": {
		// first argument: 0 - silent, 1 - warning, 2 - error
		"strict": [2, "safe"],
		"no-debugger": 2,
		"brace-style": [
			2,
			"1tbs",
			{
				"allowSingleLine": true
			}
		],
		"no-trailing-spaces": 0,
		"keyword-spacing": 2,
		"space-before-function-paren": [
			0,
			"never"
		],
		"spaced-comment": [2, "always"],
		"vars-on-top": 2,
		"no-undef": 2,
		"no-undefined": 2,
		"comma-dangle": [2, "never"],
		"quotes": [2, "single"],
		"semi": [0, "never"],
		"guard-for-in": 2,
		"no-eval": 2,
		"no-with": 2,
		"valid-typeof": 2,
		"no-unused-vars": 2,
		"no-continue": 1,
		"no-extra-semi": 1,
		"no-unreachable": 1,
		"no-unused-expressions": 1,
		"no-magic-numbers": 1,
		"max-len": [1, 120, 4],
		"react/prefer-es6-class": 1,
	}

};