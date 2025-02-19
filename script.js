class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
    }
}

class Employee extends Person {
    constructor(name, age, jobTitle) {
        // Call the constructor of the Person class
        super(name, age);
        this.jobTitle = jobTitle;
    }

    jobGreet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
    }
}

// Make the classes accessible in the global scope (e.g., for testing with Cypress)
window.Person = Person;
window.Employee = Employee;

// Example usage
let person = new Person("Akshath", 25);
person.greet(); // Output: Hello, my name is Akshath, I am 25 years old.

let employee = new Employee("Akshath", 25, "Manager");
employee.jobGreet(); // Output: Hello, my name is Akshath, I am 25 years old, and my job title is Manager.
