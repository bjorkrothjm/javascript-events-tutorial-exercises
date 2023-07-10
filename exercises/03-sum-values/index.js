// adding the function to the window makes it globally available
window.calculateSumListener = function() {
	//Return the value of the input #firstNumber
	var stringA = document.getElementById("firstNumber").value;
	//Return the value of the input #secondNumber
	var stringB = document.getElementById("secondNumber").value;

	//your code goes here

	//calculate sum
	const sumString = parseInt(stringA) + parseInt(stringB)
	
	// need to get the object to output into
	let resultNumber = document.getElementById("resultNumber")
	resultNumber.value = sumString
};
