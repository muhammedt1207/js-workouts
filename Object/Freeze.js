const obj = {
    name: 'Alice',
    age: 25
};

Object.freeze(obj);

obj.name = 'Bob'; // This will not work
obj.city = 'New York'; // This will not work

console.log(obj.name); // Output: 'Alice'
console.log(obj.city); // Output: undefined


//The Object.freeze() method makes an object immutable.
//Once an object is frozen, its properties cannot be added, removed, or modified