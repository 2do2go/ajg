'use strict';

var hasOwnProperty = Object.prototype.hasOwnProperty;
var slice = Array.prototype.slice;

exports.object = function(key, value) {
	var obj = {};
	obj[key] = value;
	return obj;
};

exports.has = function(obj, key) {
	return hasOwnProperty.call(obj, key);
};

exports.toArray = function(value) {
	return slice.call(value);
};
