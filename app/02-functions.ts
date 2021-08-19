function addNumbers(numOne: number, numTwo: number) {
    return numOne + numTwo;
}

addNumbers (1, 2);

// addNumbers(1, 2, 3);
// addNumbers(1, 2, 3, "Foo");

function twoStrings(firstName: string, lastName: string) {
    let fullName: string = firstName.concat(lastName);
    return fullName;
}

console.log(twoStrings("Brad", "Titus"));

