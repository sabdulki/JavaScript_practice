
let result = document.getElementById('result');
let calc  = document.getElementById('calc');

result.style.width = calc.offsetWidth + 'px';

//parseInt()
//num.toFixed() - определяет сколько знаков после точки сделать 
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
	let res = "";
	if (input == "=")
	{
		res = createEquation(str);
		clearString(str);
		updateResult(res);
		return ;
	}
	if (isSign(input) && isSign(str[str.length-1]))
		str = str.slice(0, str.length - 1)
	str += input;
	updateResult(str);
}

function createEquation(str)
{
	let num = "";
	let v1;
	let num_list = [];
	let sign_list = [];
	let result;

	for (let i = 0; i < str.length, i++;)
	{
		if (Number(str[i]))
			num += str[i];
		if (Number(str[i]) && isSign(str[i+1])){
			v1 = Number(num);
			console.log(v1);
			num_list.push(v1);
		}
		else if (isSign(str[i]))
		{
			sign_list.push(str[i]);
		}
	}
	result = solveEquation(num_list, sign_list);
	return(result.toString());

}
/*
запустить loop который будет проходиться по всей строке и искать числа в ней.
после нахождения искать signs и выполнять операции.
*/
function solveEquation(num_list, sign_list)
{
	let operations = [];
	let num_i = 0;
	let sign_i = 0;
	let oper_len = num_list.length + sign_list.length;
	for (let i = 0; i < oper_len, i++;){
		operations.push(num_list[num_i++]);
		operations.push(sign_list[sign_i++]);
	}
	i = 0;
	let strongSignInd = operations.findIndex(findMultDiv);
	let strongSign;
	let newNum;
	// loop while count of elements != 1
	while(operations.length != 1)
	{
		if (operations.findIndex(findMultDiv))
		{
			if (operations[strongSignInd] == '*')
				newNum = operations[strongSignInd - 1] * operations[strongSignInd + 1];
			else if (operations[strongSignInd] == '/')
				newNum = operations[strongSignInd - 1] / operations[strongSignInd + 1];
			operations[strongSignInd - 1] = Number(newNum);
			operations.slice(strongSignInd, 2); //удаляю уже ненужные элементы
		}
		else if (operations.findIndex(findPlusMin))
		{
			if (operations[strongSignInd] == '+')
				newNum = operations[strongSignInd - 1] + operations[strongSignInd + 1];
			else if (operations[strongSignInd] == '-')
				newNum = operations[strongSignInd - 1] - operations[strongSignInd + 1];
			operations[strongSignInd - 1] = Number(newNum);
			operations.slice(strongSignInd, 2); //удаляю уже ненужные элементы
		}
	}
	return (operations[0]);
}

function findMultDiv(input){
	return (input == "*" || input == "/" );
}

function findPlusMin(input){
	return (input == "+" || input == "-");
}

function clearString() {
	str = "";
	updateResult(str);
}

function updateResult(input) {
	document.getElementById('result').innerHTML = input;
}

// function getResult(input){}
