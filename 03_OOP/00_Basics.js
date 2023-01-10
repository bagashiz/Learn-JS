//* OOP structure
// basic example
const car = {
    // properties
    brand: 'Ford',
    color: 'red',
    maxSpeed: 200,
    chassisNumber: 'f-1',

    // methods
    drive: () => {
        console.log('driving');
    },
    reverse: () => {
        console.log('reversing');
    },
    turn: () => {
        console.log('turning');
    }
}

console.log(car.brand); // Ford
console.log(car.color); // red
console.log(car.maxSpeed); // 200
console.log(car.chassisNumber); // f-1
car.drive(); // driving
car.reverse(); // reversing
car.turn(); // turning

// can not change the property values

//* Constructor
// create a constructor using the function keyword
function Car(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
}

// prototypes are used to add methods to the constructor
Car.prototype.drive = function () {
    console.log(`${this.brand} ${this.color} is driving`);
}

Car.prototype.reverse = function () {
    console.log(`${this.brand} ${this.color} is reversing`);
}

Car.prototype.turn = function () {
    console.log(`${this.brand} ${this.color} is turning`);
}

// instantiating objects
const car1 = new Car('Toyota', 'Silver', 200, 'to-1');
const car2 = new Car('Honda', 'Black', 180, 'ho-1');
const car3 = new Car('Suzuki', 'Red', 220, 'su-1');

// printing objects
console.log(car1); // Car { brand: 'Toyota', color: 'Silver', maxSpeed: 200, chassisNumber: 'to-1' }
console.log(car2); // Car { brand: 'Honda', color: 'Black', maxSpeed: 180, chassisNumber: 'ho-1' }
console.log(car3); // Car { brand: 'Suzuki', color: 'Red', maxSpeed: 220, chassisNumber: 'su-1' }

car1.drive(); // Toyota Silver is driving
car2.drive(); // Honda Black is driving
car3.drive(); // Suzuki Red is driving

//! const Car = (brand) => this.brand = brand; (TypeError: Car is not a constructor)

//* ES6 Classes
// create a class using the class keyword
class Motorcycle {
    // constructor
    constructor(brand, color, maxSpeed, chassisNumber) {
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.chassisNumber = chassisNumber;
    }

    // methods
    drive() {
        console.log(`${this.brand} ${this.color} is driving`);
    }

    reverse() {
        console.log(`${this.brand} ${this.color} is reversing`);
    }

    turn() {
        console.log(`${this.brand} ${this.color} is turning`);
    }
}

// instantiating objects
const motorcycle1 = new Motorcycle('Yamaha', 'Silver', 200, 'ya-1');
const motorcycle2 = new Motorcycle('Kawasaki', 'Black', 180, 'ka-1');
const motorcycle3 = new Motorcycle('Suzuki', 'Red', 220, 'su-1');

// printing objects
console.log(motorcycle1); // Motorcycle { brand: 'Yamaha', color: 'Silver', maxSpeed: 200, chassisNumber: 'ya-1' }
console.log(motorcycle2); // Motorcycle { brand: 'Kawasaki', color: 'Black', maxSpeed: 180, chassisNumber: 'ka-1' }
console.log(motorcycle3); // Motorcycle { brand: 'Suzuki', color: 'Red', maxSpeed: 220, chassisNumber: 'su-1' }

motorcycle1.drive(); // Yamaha Silver is driving
motorcycle2.drive(); // Kawasaki Black is driving
motorcycle3.drive(); // Suzuki Red is driving

// class is just a syntactic sugar for constructor functions
console.log(typeof Motorcycle); // function

//* Property Getter and Setter
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        // id already defined in the constructor
        this._id = Math.floor(Math.random() * 1000);
        // use _ to indicate that the property is private
        //! _ changed to # in ES2020
    }

    // getter
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    get id() {
        return this._id;
    }

    // setter
    set fullName(fullName) {
        const [firstName, lastName] = fullName.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }

    set id(id) {
        console.log('You can not change the id');
    }
}

const user = new User('John', 'Doe');
console.log(user); // User { firstName: 'John', lastName: 'Doe', id: (random) }
console.log(user.fullName); // John Doe
console.log(user.id); // (random)
user.id = 100; // You can not change the id

//* Methods
class Mail {
        // add a private property before the constructor and use # to indicate that the property is private
        #id = null; // enclosing class

    constructor(sender, receiver, subject, body) {
        this.#id = this.#generateId();
        this.sender = sender;
        this.receiver = receiver;
        this.subject = subject;
        this.body = body;
    }

    // methods
    send() {
        console.log(`Sending mail from ${this.sender} to ${this.receiver}`);
    }

    sendLater(delay) {
        console.log(`Sending after ${delay} ms`);

        setTimeout(() => {
            this.send();
        }, delay);
    }

    saveAsDraft() {
        console.log('Saving mail as draft');
    }

    // private method
    #generateId() {
        return Math.floor(Math.random() * 1000);
    }
}

const mail = new Mail('Foo', 'Bar', 'Hello', 'How are you?');
mail.send(); // Sending mail from Foo to Bar
mail.sendLater(2000); // Sending after 2000 ms
mail.saveAsDraft(); // Saving mail as draft
//! mail.#generateId(); (SyntaxError: Private field '#generateId' must be declared in an enclosing class)