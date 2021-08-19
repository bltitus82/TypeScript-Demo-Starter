var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.sayHello = function () {
        console.log("Hello", this.firstName);
    };
    Person.prototype.sayHelloToFullName = function () {
        console.log("Hello", this.firstName, this.lastName);
    };
    return Person;
}());
var phil = new Person();
phil.firstName = "Phil";
phil.lastName = "Donahue";
var someVariableName = new Person();
var kenn = new Person();
kenn.firstName = "Kenn";
kenn.sayHello();
var sheriff = new Person();
sheriff.firstName = "Sheriff";
sheriff.lastName = "Holler";
sheriff.sayHelloToFullName();
var Game = /** @class */ (function () {
    function Game(name, maker) {
        this.gameName = name;
        this.gameMaker = maker;
    }
    return Game;
}());
var battleship = new Game('Battleship', 'Hasbro');
//# sourceMappingURL=03-classes.js.map