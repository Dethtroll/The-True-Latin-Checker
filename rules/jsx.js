"use strict";

const { hasStringNonLatin } = require("./shared");

module.exports = {
	meta: {
		docs: {
			description: "Disable non-latin jsx",
			category: "Stylistic Issues",
			recommended: false
		},
		fixable: null,
		schema: [],
	},
	create: function(context) {
		return {
			JSXText(node) {
				const { value } = node;
				if (hasStringNonLatin(value)) {
					context.report({
						node,
						message: "Strings must be without non-latin text"
					});
				}
			}
		};
	}
};
