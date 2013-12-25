test("adding two numbers returns the added result",function(){
		var calculator = new Calculator()
			,x = 10
			,y = 20
			,expectedResult = {
				operand1 : 10,
				operand2 : 20,
				operator : "add",
				result : 30
			};
		calculator.add(x,y);
		deepEqual(calculator.result(),expectedResult,"asserting add result");
	});

asyncTest("async test",function(){

	var calculator = new Calculator();
	var number1 = 10, number2 = 20;
	var handleResult = function(result){
		ok(result === 30,"added result in async fashion");
		start();
	};
	
	calculator.addAsync(number1,number2,handleResult);
});