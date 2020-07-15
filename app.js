//3 DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');
console.log('clipboardEl');

// 4 generate events listeners
generateEl.addEventListener('click', () => {
	// Make lenght a number by using parseint() or the unary operator
	const length = +lengthEl.value;
	const hasUpper = uppercaseEl.checked;
	const hasLower = lowercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = symbolsEl.checked;
	resultEl.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);
});

// 6 Copy password to clipboard
clipboardEl.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = resultEl.innerText;

	if (!password) {
		return;
	}

	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password Copied To Clipboard ');
});

// 5 generate passowrd function
function generatePassword(lower, upper, number, symbol, length) {
	// 1. init a pw var
	// 2. filter out unchecked types
	// 3. loop over length and call generator func for each type
	// 4. add final pw to pw var and return

	// 1
	let generatedPassword = '';

	// 2
	const typesCount = lower + upper + number + symbol;
	// console.log('typesCount: ', typesCount);
	// array of objects
	const typesArr = [ { lower }, { upper }, { number }, { symbol } ].filter((item) => Object.values(item)[0]);
	// console.log(typesArr);

	// if no param is checked, return nothing
	if (typesCount === 0) {
		return '';
	}

	// 3
	for (let i = 0; i < length; i += typesCount) {
		typesArr.forEach((type) => {
			const funcName = Object.keys(type)[0];
			console.log(funcName);
			generatedPassword += randomFunc[funcName]();
		});
	}

	// slice from the begining to the length
	// so that you get the exact length, not iteration of generated pw

	finalPassword = generatedPassword.slice(0, length);

	return finalPassword;
}

// 2 object that will be called
const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbols
};

// 1 Generator funtions

// generate lowercase
function getRandomLower() {
	// cos we want 26 letters
	// + 97 so we generate only codes in lower case char range
	return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}

// generate uppercase
function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}

// generatenumbers
function getRandomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
}

// generate symbols
function getRandomSymbols() {
	const symbols = '!@#$%^&*()[]{}=/<>-_+,.?|';
	// length creates a sort of iteration of the symbols
	return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomSymbols());
console.log(getRandomNumbers());
// select root nodes
// This is my first project after almost staying of js coding
// for about two months
// was actually working on my ds diploma
// funny cos i actually forgot how to comment in js
// kept using #

// making a string a number
// returning true or false in a filter
