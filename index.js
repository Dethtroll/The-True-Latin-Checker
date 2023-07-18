"use strict";

module.exports.rules = {
	"non-cyrilic-string-literal": require("./rules/cyrilic/string-literals"),

	"non-latin-string-literal": require("./rules/non-latin/string-literals"),
	"non-latin-comment": require("./rules/non-latin/comments"),
	"non-latin-identifier": require("./rules/non-latin/identifier"),
	"non-latin-jsx": require("./rules/non-latin/jsx"),
	"non-latin-template": require("./rules/non-latin/template"),
};
