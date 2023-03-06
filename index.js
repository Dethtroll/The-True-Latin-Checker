"use strict";

module.exports.rules = {
	"non-latin-string-literal": require("./rules/string-literals"),
	"non-latin-comment": require("./rules/comments"),
	"non-latin-identifier": require("./rules/identifier"),
};
