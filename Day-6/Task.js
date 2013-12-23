window.myApp = window.myApp || {};
(function(myApp){
	function Task(name){
		this.id = new Date().getHours().toString();
		this.name = name;
		this.isCompleted = false;
	}
	Task.prototype.Complete = function(){
		this.isCompleted = true;
	}
	Task.prototype.InComplete = function(){
		this.isCompleted = false;
	}
	myApp.Task = Task;
})(window.myApp);