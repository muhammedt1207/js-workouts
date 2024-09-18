function Counter() {
    this.count = 0;
    setInterval(() => {
        this.count++; // `this` refers to the Counter instance
        console.log(this.count);
    }, 1000);
}

const counter = new Counter(); // Outputs: 1, 2, 3, ...



//Note

// Arrow functions do not have their own this context. 
// Instead, they inherit this from the surrounding lexical scope. 
// This can be useful in cases where you want to preserve the context of this in callbacks or event handlers.