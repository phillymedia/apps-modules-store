// http://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parser: "babel-eslint",
	extends: "airbnb-base",
	parserOptions: {
		sourceType: "module",
		allowImportExportEverywhere: true,
		codeFrame: false
	},
	env: {
		node: true,
		es6: true,
	},
	// check if imports actually resolve
	"settings": {
		"import/resolver": {
			"babel-module": {}
		}
	},
	// add your custom rules here
	rules: {
		// clear these errors temporarily to see what else is wrong
		// "import/no-unresolved": 0,
		// brace style
		"brace-style": [
			"error",
			"stroustrup",
		],
		// allow unnamed functions
		"func-names": "off",
		// allow requires
		"global-require": "off",
		// don't require .vue extension when importing
		"import/extensions": ["error", "always", {
			"js": "never",
			"vue": "never"
		}],
		// requires new lines after each import
		"import/newline-after-import": "off",
		// wtf
		"import/no-dynamic-require": "off",
		// allow optionalDependencies
		"import/no-extraneous-dependencies": ["error", {
			"optionalDependencies": ["test/unit/index.js"]
		}],
		"import/first": 0,
		"import/extensions": ["off", "never"],
		// tab style
		"indent": ["error", "tab"],
		// linebreak style
		"linebreak-style": [
			"error",
			"unix",
		],
		// no console (turn back on in production)
		// "no-console": ["error", { allow: ["warn", "error"] }],
		"no-console": "off",
		// allow debugger during development
		"no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
		// turn off inability to modify parameters :P
		"no-param-reassign": "off",
		"no-plusplus": 0,
		"no-underscore-dangle": 0,
		// let functions be hoisted
		"no-use-before-define": [
			"error",
			"nofunc",
		],
		// tab style
		"no-tabs": "off",
		// double quotes only
		"quotes": ["error", "double"],
		// semi-colons
		"semi": ["error", "always"],
	}
}
