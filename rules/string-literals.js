"use strict";

const { hasStringNonLatin } = require("./shared");

module.exports = {
	meta: {
		docs: {
			description: "Disable non-latin string literals",
			category: "Stylistic Issues",
			recommended: false
		},
		fixable: null,
		schema: [],
	},
	create: function(context) {
		return {
			Literal(node) {
				const isStringLiteral = (typeof node.value == "string");
				if (!isStringLiteral) {
					return;
				}

				const { value } = node;
				if (hasStringNonLatin(value)) {
					context.report({
						node,
						message: 'Strings must be without non-latin text'
					});
				}
			},

			TemplateElement(node) {
				const templateContent = node.value.raw;

				if (hasStringNonLatin(templateContent)) {
					context.report({
						node,
						message: "Strings must be without non-latin text"
					});
				}
			},

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
