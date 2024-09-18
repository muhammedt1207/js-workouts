class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
        this.tail = null;
    }

    isEmpty() {
        return this.size === 0;
    }

    append(value) {
        let node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    prepend(value) {
        let node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    arrayToList(arr) {
        for (let i = arr.length - 1; i >= 0; i--) {
            this.prepend(arr[i]);
        }
    }

    removeDuplicates() {
        let current = this.head;
        while (current !== null) {
            let runner = current;
            while (runner.next !== null) {
                if (runner.next.value === current.value) {
                    runner.next = runner.next.next;
                    this.size--;
                } else {
                    runner = runner.next;
                }
            }
            current = current.next;
        }
    }

    print() {
        let current = this.head;
        let arr = [];
        while (current !== null) {
            arr.push(current.value);
            current = current.next;
        }
        console.log(arr);
    }
    reverse(){
        let prev=null
        let Next=null
        let current=this.head
        while(current){
            Next=current.next
            current.next=prev
            prev=current
            current=Next
        }
        this.head=prev
    }
}

const list = new LinkedList();
list.arrayToList([10, 20, 30, 20, 10, 30, 40, 50, 50]);
list.print(); 
list.removeDuplicates();
list.print(); 
list.reverse()
list.print()