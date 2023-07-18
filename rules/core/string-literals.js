"use strict";

export var getRule = (description, message, validator) => {
	return {
		meta: {
			docs: {
				description,
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
					if (validator(value)) {
						context.report({
							node,
							message
						});
					}
				}
			};
		}
	}
};
