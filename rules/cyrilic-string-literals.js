"use strict";

const { hasStringCyrilic } = require("./shared");

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
				if (hasStringCyrilic(value)) {
					context.report({
						node,
						message: 'Strings must be without cyrilic text'
					});
				}
			},
		};
	}
};
