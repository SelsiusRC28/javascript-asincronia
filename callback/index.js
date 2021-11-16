function sum(num1, num2) {
	return num1 + num2
}

function cal(num1, num2, call) {
	return call(num1, num2)
}

console.log(cal(15, 8, sum))