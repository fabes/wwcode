/*
What is a function?
	- A function is a set of intsructions to be executed.

*/

//How to create/define a function
function say_hello(){
	//this is where you type your instructions to be executed
	document.write("Hello WWCode Jamaica!")
}

function weather_check(){
	document.write("It is current sunny but bleeky!");
}

//How to call or use or invoke a function
// say_hello();
//weather_check();

function add_numbers(num1,num2){
	var sum = num1 + num2;
	document.write(sum);
}

//How to call function with parameters/arguments
add_numbers(5,10);
document.write("<br/>");
add_numbers(79,154);

