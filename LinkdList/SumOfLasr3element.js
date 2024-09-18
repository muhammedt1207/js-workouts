class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }

    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        }
        else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }
    prepent(value) {
        let node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        }
        else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    findLast3ValuesSum() {
        let current = this.head
        let prev = this.head
        while (current.next.next) {
            prev = current
            current = current.next
        }
        return (current.value + prev.value + current.next.value)
    }
    insetValue(pos,value){
        const node=new Node(value)
        if(pos==1){
            this.prepent(value)  
            return  
        }
        if(pos==this.size){
            this.append(value)
            return
        }
        let current=this.head
        for(let i=0;i<pos-1;i++){
            current=current.next
        }
        const Next=current.next
        current.next=node
        node.next=Next
        this.size++
    }
    print(){
        let current=this.head
        let arr=[]
        while (current&&current.next) {
            current=current.next
            arr.push(current.value)
        }
        console.log(arr);
        
    }

}


const list = new LinkedList()
list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.append(60)
list.append(70)
list.append(80)
list.append(90)
list.print()
list.insetValue(2,34)
list.print()
console.log(list.findLast3ValuesSum());
