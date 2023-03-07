"use strict";

module.exports.rules = {
	"non-cyrilic-string-literal": require("./rules/cyrilic-string-literals"),
	"non-latin-string-literal": require("./rules/string-literals"),
	"non-latin-comment": require("./rules/comments"),
	"non-latin-identifier": require("./rules/identifier"),
	"non-latin-jsx": require("./rules/jsx"),
	"non-latin-template": require("./rules/template"),
};
