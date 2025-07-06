import { LinkedList, Node } from './LinkedList/LinkedList.js';
class HashMap {
    static capacity = 16;
    static loadFactor = 0.8;
    constructor() {
        this.arr = new Array(16);
    };

    hash(key) {
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = ((primeNumber * hashCode) % HashMap.capacity) + key.charCodeAt(i);
        };

        return hashCode % HashMap.capacity;
    };

    set(key, value) {
        const hashKey = this.hash(key);

        if (hashKey < 0 || hashKey >= capacity.length) {
            throw new Error("Trying to access index out of bounds");
        };

        if (this.arr[hashKey] === '') {
            const list = new LinkedList();
            list.append(value);
            return;
        };

        if (this.arr[hashKey][0].value === value) this.arr[hashKey][0].value = value;

        if (this.arr[hashKey][0].value !== value) this.arr[hashKey][0].append(value);
    }; // Remake it, not the right logic.
};


const test = new HashMap();

console.log(test.hash('Sara'));