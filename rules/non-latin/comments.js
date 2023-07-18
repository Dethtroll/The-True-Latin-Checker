"use strict";

const { hasStringNonLatin } = require('./_helpers');

module.exports = {
	meta: {
		docs: {
			description: "Disable non-latin comments",
			category: "Stylistic Issues",
			recommended: false
		},
		fixable: null,
		schema: [],
	},
	create: function(context) {
		const sourceCode = context.getSourceCode();
		
		return {
			Program() {
				const comments = sourceCode.getAllComments();
				comments
					.forEach((comment) => {
						if(hasStringNonLatin(comment.value)) {
							context.report({
								node: null,
								loc: comment.loc,
								message: 'Comments must be without non-latin text'
							});
						}
					});
			}
		};
	}
};
