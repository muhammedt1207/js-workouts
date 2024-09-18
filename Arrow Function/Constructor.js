const Person = (name) => {
    this.name = name; // Error: `this` is not bound to the instance
};

const person = new Person('John'); // TypeError: Person is not a constructor


//Note 

// Arrow functions cannot be used with the new
// keyword. They do not have a prototype property and 
// cannot be used to create instances.