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
        this.numitems = 0; // Track the number of items
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size; // Ensure the hash value is within the size
    }

    insert(key, value) {
        let index = this.hash(key);
        let bucket = this.buckets[index];

        // Update value if key already exists
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                bucket[i].value = value;
                return;
            }
        }

        // Insert new key-value pair
        let node = new Node(key, value);
        bucket.push(node);
        this.numitems++; // Increment the number of items

        // Rehash if load factor exceeds 0.75
        if (this.numitems / this.size > 0.75) {
            this.rehash(this.size * 2);
        }
    }

    get(key) {
        let index = this.hash(key);
        let bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                return bucket[i].value;
            }
        }
        return null; // Key not found
    }

    delete(key) {
        let index = this.hash(key);
        let bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                bucket.splice(i, 1);
                this.numitems--; // Decrement the number of items
                return;
            }
        }
    }

    print() {
        console.log(this.buckets);
    }

    rehash(nsize) {
        console.log(`Rehashing to new size: ${nsize}`);

        let oldBuckets = this.buckets;
        this.size = nsize;
        this.buckets = new Array(nsize).fill(null).map(() => []);
        this.numitems = 0; // Reset the number of items

        console.log('Rehashing in progress');
        for (let bucket of oldBuckets) {
            for (let node of bucket) {
                this.insert(node.key, node.value);
            }
        }
    }
}

// Example usage:
let hash = new HashTable(10);
hash.insert('name', 'muhammed');
hash.insert('name', 'jasmal');
hash.insert('mane', 'adil');
hash.insert('age', 12);
console.log('Get name:', hash.get('name')); // Should return 'jasmal'
hash.print();
