console.log("hi js");

const personAge = 20;
const name = "Sofia";
const fool = true;
let dog = "otto";
console.log(`my name is ${name} and i have a dog named ${dog}`);
console.log(dog.length);

// object
const car = {
  brand: "nissan xtrail",
  color: "white",
  year: 2016,
  atStock: true,
};
console.log(car.brand, car.atStock);

// {} == block
if (car.color === "white") {
  console.log("yes");
} else if (car.color === "black") {
  console.log("no");
}

if (car.year !== 2022) {
  console.log("old car");
}

// тернарный оператор
const secCar = car.brand === "nissan xtrail" ? "wow" : "another car";
console.log(secCar);

console.log("---functions---");

const calcMax = function (num1, num2) {
  let max = Math.max(num1, num2);
  // console.log(max);
  return max;
};

// стрелочная функция
const calcTotal = (num1, num2) => num1 + num2;
// после => идет возвращаемое значение, т.е = return (num1 + num2)

const num1 = 14;
const num2 = 11;
const total = calcTotal(num1, num2);
console.log(total);

// массивы. data type - object
console.log("---arrays---");
const students = ["alex", "tim", "ruslan"];
console.log(students[1]);
// add to end of array
students.push("majid");
//add to start of array.
students.unshift("sofa");
// delete last elem of array
students.pop();

const welcomeStudents = students.map(function (student) {
  console.log("student > ", student);
  return `welcome ${student}`;
});

// objects
console.log("---objects---");

const newCar = {
	brand: "bmw",
	color: "white",
	year: 2016,
	atStock: true,
	options: ['diesel', 'camel skin'],
	drive: function(){
		return `this ${this.brand} is mine!`
	},
	where(){ //this is also a method of object, just shorter than previous one
		return(`atStock: ${this.atStock}`)
	},
  };
console.log(newCar);

console.log("---cycles---");

const products = ['cheese', 'mushrooms', 'ham', 'tomato'];

products.forEach(function(ingridients, index){ // smth like 'i' in while loop
	console.log(ingridients, index);
	if (index === products.length - 1){
		console.log(`last elem is: ${ingridients}`);
	}
})

console.log("---DOM---");

const h2 = document.querySelectorAll('h2');
console.log(h2);