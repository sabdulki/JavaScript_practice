function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.id)
}

function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(data));
}

function allowDrop(ev) {
	ev.preventDefault();
}

function clickCounter() {

	let clickCount = sessionStorage.getItem("clickCount");
	if (clickCount != null && Number(clickCount) != NaN)
		clickCount = Number(clickCount)+1;
	else
		clickCount = 0;
	document.getElementById("imgClick").innerHTML = "You dragged the img " + clickCount + " time(s).";
	sessionStorage.setItem("clickCount", clickCount);
}