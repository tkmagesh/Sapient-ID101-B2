function Calculator(){
		var _result ;
		this.add = function(n1,n2){
			_result = {
				operand1 : n1,
				operand2 : n2,
				operator : "add",
				result : n1 + n2
			};
		};
		this.addAsync = function(n1,n2,callback){
			var result = n1 + n2;
			setTimeout(function(){
				callback(result);
			},1000);
		}
		this.subtract = function(n1,n2){
			_result = {
				operand1 : n1,
				operand2 : n2,
				operator : "subtract",
				result : n1 - n2
			};
		};
		this.result = function(){
			return _result;
		}
	}