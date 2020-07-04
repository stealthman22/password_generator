// select root nodes
// This is my first project after almost staying of js coding
// for about two months
// was actually working on my ds diploma
// funny cos i actually forgot how to comment in js
// kept using #

// Generator funtions

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
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
}

console.log(getRandomNumber());