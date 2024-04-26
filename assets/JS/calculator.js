
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

	for (let i = 0; i < str.length; i++)
	{
		if (Number(str[i]))
			num += str[i];
		if (num !== "" && Number(str[i]) && isSign(str[i+1])){
			// num += str[i];
			num_list.push(Number(num));
			num = "";
		}
		else if (isSign(str[i]))
		{
			sign_list.push(str[i]);
		}
	}
	if (num !== "")
		num_list.push(Number(num));
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
	let num_len = num_list.length;
	let sign_len = sign_list.length
	for (let i = 0; i < oper_len; i++){
		if (num_i < num_len)
			operations.push(num_list[num_i++]);
		if (sign_i < sign_len)
			operations.push(sign_list[sign_i++]);
	}
	i = 0;
	let strongSignInd = operations.findIndex(findMultDiv);
	let strongSign;
	let newNum;
	// loop while count of elements != 1

	//another while loop where i will call different operations and if I have a result of this operation, 
	// i put it into the other one or return the value.
	while(operations.length != 1)
	{
		if (operations.findIndex(findMultDiv))
		{
			if (operations[strongSignInd] == '*')
				newNum = operations[strongSignInd - 1] * operations[strongSignInd + 1];
			else if (operations[strongSignInd] == '/')
				newNum = operations[strongSignInd - 1] / operations[strongSignInd + 1];
			// operations[strongSignInd - 1] = Number(newNum);
			// operations = operations.slice(strongSignInd, 2); //удаляю уже ненужные элементы
		}
		else if (operations.findIndex(findPlusMin))
		{
			if (operations[strongSignInd] == '+')
				newNum = operations[strongSignInd - 1] + operations[strongSignInd + 1];
			else if (operations[strongSignInd] == '-')
				newNum = operations[strongSignInd - 1] - operations[strongSignInd + 1];
			// operations[strongSignInd - 1] = Number(newNum);
			// operations = operations.slice(strongSignInd, 2); //удаляю уже ненужные элементы
		}
	}
	return (newNum);
	// return (operations[0]);
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
