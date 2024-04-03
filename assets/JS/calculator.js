let result = document.getElementById('result');
let calc  = document.getElementById('calc');

result.style.width = calc.offsetWidth + 'px';

let str = "";

function createString(input) {
	str += input;
	updateResult(str);
}

function clearString() {
	str = "";
	updateResult(str);
}

function updateResult(input) {
	document.getElementById('result').innerHTML = input;
}
