// 所有模块都通过 define 来定义
define(function(require, exports, module) {

	var a = {};

	a.a1 = function() {
		console.log("index-a1");
	};
	a.a2 = function() {
		console.log("index-a2");
	};
	a.a3 = "String";

	// 或者通过 module.exports 提供整个接口
	module.exports = a;

	console.log(require);
	console.log(exports);
	console.log(module);
});