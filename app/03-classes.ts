class Person {
    firstName: string;
    lastName: string;

    sayHello(){
        console.log("Hello", this.firstName);
    }

    sayHelloToFullName(){
        console.log("Hello", this.firstName, this.lastName);
    }
}

let phil: Person = new Person();

phil.firstName = "Phil";
phil.lastName = "Donahue";

let someVariableName: Person = new Person();

let kenn: Person = new Person();

kenn.firstName = "Kenn";

kenn.sayHello();

let sheriff: Person = new Person();

sheriff.firstName = "Sheriff";
sheriff.lastName = "Holler";

sheriff.sayHelloToFullName();

class Game {
    constructor(name: string, maker: string){
        this.gameName = name;
        this.gameMaker = maker;
    }
    gameName: string;
    gameMaker: string;
}

let battleship: Game = new Game('Battleship', 'Hasbro');

