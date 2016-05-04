// 所有模块都通过 define 来定义
define(function(require, exports, module) {

  // 通过 exports 对外提供接口
  exports.doSomething1 = function(){
  	console.log("index-doSomething1");
  };
  exports.doSomething2 = function(){
  	console.log("index-doSomething2");
  };

  exports.a = "String";

  // 或者通过 module.exports 提供整个接口
  // module.exports = ...
});