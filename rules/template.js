"use strict";

const { hasStringNonLatin } = require("./shared");

module.exports = {
	meta: {
		docs: {
			description: "Disable non-latin template",
			category: "Stylistic Issues",
			recommended: false
		},
		fixable: null,
		schema: [],
	},
	create: function(context) {
		return {

			TemplateElement(node) {
				const templateContent = node.value.raw;

				if (hasStringNonLatin(templateContent)) {
					context.report({
						node,
						message: "Strings must be without non-latin text"
					});
				}
			}
		};
	}
};
