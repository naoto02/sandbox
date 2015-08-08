// INHERITANCE: Pattern1

console.log("=====INHERITANCE pattern1=====");
var Parent = function(name, age) {
	this.name = name;
	this.age = age;
	console.log("Parent constructor");
};

// Defne methods
Parent.prototype.getName = function() {
		return this.name;
};

Parent.prototype.getAge = function() {
		return this.age;
};

Parent.prototype.showData = function() {
		console.log("Parent: showData");
};

// Child class
var Child = function() {
	Parent.apply(this, arguments);
};

Child.prototype = new Parent();

Child.prototype = {
	showData: function() {
		console.log("Child: showData");
	},
	getName: function() {
		return this.name;
	}
};

// Create objects
console.log("\nCreate john");
var john = new Parent("john", 27);
john.showData();

console.log("\nCreate daniel");
var daniel = new Child("daniel", 18);
console.log(daniel.name);
daniel.showData();


// INHERITANCE: Pattern2
console.log("\n=====INHERITANCE Pattern2=====");

// Animal class
var Animal = function(name, weight) {
	this.name = name;
	this.weight = weight;
	console.log("Animal constructor");
};
Animal.prototype.showData = function() {
		console.log("Animal: showData");
};

Animal.prototype.getName = function() {
		return this.name;
};

var Cat = function() {
	Animal.apply(this, arguments);
};

// Cat class
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.showData = function() {
		console.log("Cat: showData");
};

Cat.prototype.getName = function() {
		return this.name;
};

console.log("Create bob\n");
var bob = new Animal("bob", 10.9);
console.log(bob.getName());
bob.showData();

console.log("Create mie\n");
var mie = new Cat("mie", 3.5);
console.log(mie.getName());
mie.showData();
