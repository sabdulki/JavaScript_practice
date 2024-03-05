
let answerIsVisible = false

function catFlower(){

	let demo = document.getElementById("demo") 
	let button = document.getElementById("button-demo")

	if (answerIsVisible) {
		demo.innerHTML = "So, what is this page about? Maybe about cats?"
		demo.style.backgroundColor = null
		button.textContent = "Are you sure?"
	} else {
		demo.innerHTML = "No, this page is about flowers!";
		demo.style.backgroundColor = "lightgreen";
		button.textContent = "Try again!"
	}
	answerIsVisible = !answerIsVisible
	// document.getElementById("demo").style.color = "white";
}