// 所有模块都通过 define 来定义
define(function(require, exports, module) {

	// 通过 require 引入依赖(同步)
	// var index = require('./index');

	// console.log(index);
	// console.log(index.doSomething1());
	// console.log(index.doSomething2());

	// 通过 require 引入依赖(异步)
	var index = require.async('./index', function(index_callback) {
		console.log(index_callback);
		console.log(index_callback.doSomething1());
		console.log(index_callback.doSomething2());
	});

	var testModule = require('./testModule');
	console.log(testModule);
});