const obj = {
    name: 'Alice',
    age: 25
};

Object.seal(obj);

obj.name = 'Bob'; // This will work
obj.city = 'New York'; // This will not work

console.log(obj.name); // Output: 'Bob'
console.log(obj.city); // Output: undefined


//The Object.seal() method prevents new properties from being 
//added to an object and marks all existing properties as non-configurable. However, 
//it does not make the properties immutable; they can still be changed if they are writable.