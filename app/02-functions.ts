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

function sayHello(name: string) : string {
    return name;
}

sayHello("Brad");
// sayHello(1);

function boolean(username: string, password: string) : boolean {
    let result: boolean;
    if (username === "elevenfifty" && password === "Letmein1234!") {
        result = true;
    } else result = false;
    return result;
}

console.log(boolean("11-50", "Letmein1234!"));

