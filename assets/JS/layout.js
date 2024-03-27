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

let marg_flower = true;

function changeImg(){
	let marg = document.getElementById("marg_img");
	if (marg_flower)
		marg.src = "./assets/imgs/marguerite.jpeg" 
	else {
		marg.src = "./assets/imgs/lilies.webp";
		marg.style.width = "350px";
		marg.style.height = "260px";
		marg.alt = "lilies";
	}
	marg_flower = !marg_flower;
}