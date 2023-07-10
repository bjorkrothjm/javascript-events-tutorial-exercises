window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
};

//the listener function here


const greenButton = document.querySelector("#theGreen");
greenButton.addEventListener("click", () => {
	alert("woohoo!")
});
