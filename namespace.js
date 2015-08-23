var MYAPP = MYAPP || {};

MYAPP = (function() {
	var util = {};

	util.say = function(){
		console.log("namespace console.log test");
	};
	return util;
})();


(function(){
	/// MYAPP.utilities.say();
	var num = MYAPP;
	num.say();
})();