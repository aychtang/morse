var dict = require('./dict.js');

var morse = function(letter) {
	if (letter === ' ') return '       ';

	return dict[letter].join(' ');
};

var mapStr = function(str, fn) {
	var result = '';
	for (var i = 0; i < str.length; i++) {
		result += fn(str[i]);
	}
	return result;
};

var sentanceBuilder = function(fn) {
	return function(i) {
		return fn(i) + '   ';
	};
};

var trimRight = function(str) {
	return str.trim();
};

var morsify = function(str) {
	return trimRight(mapStr(str, sentanceBuilder(morse)));
};

module.exports = morsify;
