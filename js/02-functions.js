function addNumbers(numOne, numTwo) {
    return numOne + numTwo;
}
addNumbers(1, 2);
// addNumbers(1, 2, 3);
// addNumbers(1, 2, 3, "Foo");
function twoStrings(firstName, lastName) {
    var fullName = firstName.concat(lastName);
    return fullName;
}
console.log(twoStrings("Brad", "Titus"));
function sayHello(name) {
    return name;
}
sayHello("Brad");
// sayHello(1);
function boolean(username, password) {
    var result;
    if (username === "elevenfifty" && password === "Letmein1234!") {
        result = true;
    }
    else
        result = false;
    return result;
}
console.log(boolean("11-50", "Letmein1234!"));
//# sourceMappingURL=02-functions.js.map