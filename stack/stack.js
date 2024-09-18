class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    print() {
      console.log(this.items.toString());
    }
  }
  

function removeEvenNumbers(stack) {
    if (stack.isEmpty()) {
      return;
    }
  
    // Remove the top element
    const top = stack.pop();
  
    // Recurse on the rest of the stack
    removeEvenNumbers(stack);
  
    // Only push the element back if it's odd
    if (top % 2 !== 0) {
      stack.push(top);
    }
  }
  
  // Example usage
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.push(5);
  
  console.log('Original stack:');
  stack.print();
  
  removeEvenNumbers(stack);
  
  console.log('Stack after removing even numbers:');
  stack.print();
  