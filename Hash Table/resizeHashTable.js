class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class HashTable {
    constructor(size) {
        this.size = size;
        this.buckets = new Array(size).fill(null).map(() => []);
        this.numItems=0
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }

    insert(key, value) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                bucket[i].value = value;
                return;
            }
        }

        const newNode = new Node(key, value);
        bucket.push(newNode);
        
        this.numItems++
        if(this.numItems/this.size>0.75){
            this.rehash(this.size*2)
        }
    }

    get(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                return bucket[i].value;
            }
        }

        return null; 
    }

    remove(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                bucket.splice(i, 1);
                return;
            }
        }
    }

    print() {
        for (let i = 0; i < this.size; i++) {
            console.log(`Bucket ${i}:`);
            for (const node of this.buckets[i]) {
                console.log(`  ${node.key}: ${node.value}`);
            }
        }
    }
    rehash(newSize) {
        const oldBuckets = this.buckets;
        this.size = newSize;
        this.buckets = new Array(newSize).fill(null).map(() => []);
        this.numItems = 0; 

        for (const bucket of oldBuckets) {
            for (const node of bucket) {
                this.insert(node.key, node.value); 
            }
        }
    }
}

// Example usage:
const hashTable = new HashTable(10);
hashTable.insert('name', 'John');
hashTable.insert('age', 25);
hashTable.insert('city', 'New York');
hashTable.print();
hashTable.insert('mane', 'Clint');
console.log('Get age:', hashTable.get('age'));
hashTable.remove('age');
console.log('After removing age:');
hashTable.print();
