var myModules = (function Manager(){
	var modules = {},
		_DEPS_ = [];
	function define(name,deps,impl){
		for(var i = 0;i<deps.length; i++){
			_DEPS_[i] = modules[deps[i]]
		}
		modules[name] = impl.apply(impl,_DEPS_);
	}
	function get(name){
		return modules[name]
	}
	return {
		define:define,
		get:get
	}
})()
myModules.define('bar',[],function(){
	function hello(who){
		return who
	}
	return {
		hello:hello
	}
})
myModules.define('foo',['bar'],function(bar){
	function fooget(who){
		console.log(bar.hello('2'));
		return who
	}
	return {
		fooget:fooget
	}
})
var bar = myModules.get('bar');
var foo = myModules.get('foo');
console.log(foo.fooget('33'))