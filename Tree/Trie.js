class Node {
    constructor() {
      this.children = new Map();
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new Node();
    }
  
    insert(word) {
      let current = this.root;
      for (let char of word) {
        if (!current.children.has(char)) {
          current.children.set(char, new Node());
        }
        current = current.children.get(char);
      }
      current.isEndOfWord = true;
    }
  
    search(word) {
      let current = this.root;
      for (let char of word) {
        if (!current.children.has(char)) {
          return false;
        }
        current = current.children.get(char);
      }
      return current.isEndOfWord;
    }
  
    delete(word) {
      return this.deleteHelper(this.root, word, 0);
    }
  
    deleteHelper(node, word, index) {
      if (!node) {
        return false;
      }
  
      if (index === word.length) {
        if (node.isEndOfWord) {
          node.isEndOfWord = false;
        }
        return node.children.size === 0;
      }
  
      const char = word[index];
      const child = node.children.get(char);
  
      if (!child) {
        return false;
      }
  
      const shouldDeleteSubtree = this.deleteHelper(child, word, index + 1);
  
      if (shouldDeleteSubtree) {
        node.children.delete(char);
      }
  
      // Efficiently remove empty intermediate nodes
      return shouldDeleteSubtree && node.children.size === 0;
    }
  
    getWordsWithPrefix(prefix) {
      let current = this.root;
      for (let char of prefix) {
        if (!current.children.has(char)) {
          return [];
        }
        current = current.children.get(char);
      }
  
      const words = [];
      this.collectWords(current, prefix, words);
      return words;
    }
  
    collectWords(node, currentPrefix, words) {
      if (node.isEndOfWord) {
        words.push(currentPrefix);
      }
  
      for (const [char, childNode] of node.children.entries()) {
        this.collectWords(childNode, currentPrefix + char, words);
      }
    }
  }
  
  const trie = new Trie();
  
  trie.insert("apple");
  trie.insert("app");
  console.log(trie.search("apple")); // Output: true
  console.log(trie.search("app")); // Output: true
  console.log(trie.search("ap")); // Output: true
  
  trie.delete("app");
  console.log(trie.search("apple")); // Output: true
  console.log(trie.search("app")); // Output: false
  console.log(trie.getWordsWithPrefix('ap')); // Output: ["apple"]