
let result = document.getElementById('result');
let calc  = document.getElementById('calc');

result.style.width = calc.offsetWidth + 'px';

let str = "";
let sign;
let number;
let tempSign1;
let tempSign2;
function createString(input) {
	// if (Number(input) == NaN)
	// 	sign = input;
	// else
	// 	number = input;
	str += input;
	if (str.length > 1)
	{
		for (let i = 1; i < str.length; i++)
		{
			tempSign1 = Number(str[i]);
			tempSign2 = Number(str[i+1]);
			if (isNaN(tempSign1) && isNaN(tempSign2)) // && str[i] != str[i-1])
				str = str.substring(0, i) + str[i + 1] + str.substring(i + 1);
		}
	}
	
	updateResult(str);
}

function clearString() {
	str = "";
	updateResult(str);
}

function updateResult(input) {
	document.getElementById('result').innerHTML = input;
}

function getResult(input){}
