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

class Vehicle {
    type: string;
    make: string;
    model: string;
    manufactureYear: number;
    runs: boolean;
    topSpeed: number;
}

class Automobile extends Vehicle {
    isSelfDriving: boolean;
}

let myCar: Automobile = new Automobile();
myCar.isSelfDriving = false;
myCar.topSpeed = 200;
myCar.make = "Volvo";

class Motorcycle extends Vehicle {
    easyToDoWheelie: boolean;
}

let myMotorcycle: Motorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true;
myMotorcycle.topSpeed = 180;


class Store {
    constructor(public name: string, public city: string){
        this.name = name;
        this.city = city;
    }
    // name: string;
    // city: string;
}

let ikea: Store = new Store('Ikea', 'Fishers');