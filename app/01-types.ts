let username: string = "instructor";
let password: string = "Letmein1234!";
let instructorId: number = 5;

let password2: string;
let phoneNumber: number;
let email: string;
let socialSecurity: number;
let isMarried: boolean;

let greeting = "Hello";

password2 = "1234";

let age: number = 40;
let currentYear: number = 2021;

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;

let companyName: string;
companyName = "Eleven Fifty";

let appName: string = 'Twitter';
appName = "Instagram";

let isLoggedIn: boolean = true;
let isGoldLevelUser: boolean = true;

let studentList: string[] = ['Tom', 'Tracy', 'Nikaya'];

let allScores: Array<number> = [100, 92, 95, 96];

console.log("Student List:", studentList[0]);

let dataFromThirdParty: any = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);

dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);

function sayHelloToAll() : void {
    console.log("Hello to all!")
}

let undefinedVariable: undefined = undefined;
let nullVariable: null = null;

let usernameAndId: [number, string];
usernameAndId = [1, 'kennisreally40'];

enum WeaponType { Sword, Saber, Spear };
let weapon: WeaponType = WeaponType.Sword

enum CardType { Ace=1, Two, Three, Four };
let cardType: string = CardType[2];
console.log(cardType);

let x: number | string;
let y: number | null;

x = '1234';
x = 1234;

// x = true;
// y = false;

