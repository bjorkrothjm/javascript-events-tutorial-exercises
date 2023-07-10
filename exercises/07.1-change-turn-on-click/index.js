var currentUser = "Mario";

window.onload = function loadfn() {
	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
}

window.turnChanger = function turnChanger() {
	const randomizer = (Math.floor(Math.random()*10)+1) 
	console.log(randomizer)
	if (currentUser === "Mario"){
		randomizer >5 ? currentUser = "Juan" : currentUser = "Josh";
	}else if (currentUser === "Juan"){
		randomizer >5 ? currentUser = "Mario" : currentUser = "Josh";
	}else{
		randomizer >5 ? currentUser = "Mario" : currentUser = "Juan"
	}

	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
}
