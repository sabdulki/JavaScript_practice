
let result = document.getElementById('result');
let calc  = document.getElementById('calc');

result.style.width = calc.offsetWidth + 'px';

let str = "";
let sign;
let number;
let tempSign1;
let tempSign2;

function isSign(char) //return true or false
{
	return ((char == "+" || char == "-" || char == "*" || char == "/" ));
}

function createString(input) {
	// if (Number(input) == NaN)
	// 	sign = input;
	// else
	// 	number = input;
	let i = 0;
	if (input == "=")
		createEquation(str);
	if (isSign(input) && isSign(str[str.length-1]))
	{
		str = str.slice(0, str.length - 1)
	}
	str += input;
	updateResult(str);
}

function createEquation(str)
{
	createNum(str);
	for (let i = 0; i < str.length, i++;)
	{
		// if (isSign(str[i]))
		// 	sign = str[i];
		if (Number(str[i]))
			i++;

	}
	num
}
/*
запустить loop который будет проходиться по всей строке и искать числа в ней.
после нахождения искать signs и выполнять операции.
*/
function createNum(str)
{
	let num;
	for (let i = 0; i < str.length, i++;)
	{
		// if (isSign(str[i]))
		// 	sign = str[i];
		if (Number(str[i]))
			i++;

	}
	num = Number(str.substring(0, i));
	console.log(num);
	return(num, i);
}

function clearString() {
	str = "";
	updateResult(str);
}

function updateResult(input) {
	document.getElementById('result').innerHTML = input;
}

function getResult(input){}
