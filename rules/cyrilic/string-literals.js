'use strict';

const { hasStringCyrilic } = require('./_helpers');
const { getRule } = require('../core/string-literals');

module.exports = {
	...getRule(
		'Disable cyrilic string literals',
		'Strings must be without cyrilic text',
		hasStringCyrilic,
	),
};
