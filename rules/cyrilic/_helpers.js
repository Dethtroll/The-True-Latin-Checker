const cyrilic = /[\u0400-\u0481\u048A-\u052F]/i;

module.exports = {
	hasStringCyrilic(text) {
		return cyrilic.test(text);
	},
};