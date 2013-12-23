if (typeof window.myApp === "undefined")
	window.myApp = {};

window.myApp = window.myApp || {};

(function(myApp){
	function TaskList(){
		this.list = [];
	};
	TaskList.prototype.add = function(t){
		this.list.push(t);
	};
	TaskList.prototype.length = function(){
		return this.list.length;
	};
	TaskList.prototype.remove = function(id){
		//iterate through the list and remove the task with the given id
	}
	myApp.TaskList = TaskList;
})(window.myApp);