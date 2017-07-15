'use strict';

var hasOwnProperty = Object.prototype.hasOwnProperty;
var slice = Array.prototype.slice;

exports.object = function object(key, value) {
	var obj = {};
	obj[key] = value;
	return obj;
};

exports.has = function has(obj, key) {
	return hasOwnProperty.call(obj, key);
};

exports.toArray = function toArray(value) {
	return slice.call(value);
};
