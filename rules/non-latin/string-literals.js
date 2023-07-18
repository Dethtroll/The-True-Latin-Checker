'use strict';

const { hasStringNonLatin } = require('./_helpers');
const { getRule } = require('../core/string-literals');

module.exports = {
	...getRule(
		'Disable non-latin string literals',
		'Strings must be without non-latin text',
		hasStringNonLatin,
	),
};
