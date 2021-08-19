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
//# sourceMappingURL=03-classes.js.map