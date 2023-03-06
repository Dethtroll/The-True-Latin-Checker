"use strict";

const { hasStringNonLatin } = require("./shared");

module.exports = {
	meta: {
		docs: {
			description: "Disable non-latin identifiers",
			category: "Stylistic Issues",
			recommended: false
		},
		fixable: null,
		schema: [],
	},
	create: function(context) {
		return {
			Identifier(node) {
				const { name } = node;
				if (hasStringNonLatin(name)) {
					context.report({
						node,
						message: 'Identifiers must be without non-latin text'
					});
				}
			}
		};
	}
};
