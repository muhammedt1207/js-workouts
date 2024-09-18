function* fibonacci() {
    let [a, b] = [0, 1];
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

const fib = fibonacci();
console.log(fib.next().value);
console.log(fib.next().value); 
console.log(fib.next().value); 
console.log(fib.next().value); 


//Generators are a powerful feature for managing iterative processes
//and sequences of values, giving you more control over the flow of data
//in your JavaScript applications