// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
      this.value = val;
      this.next = null;
    }
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
      let newNode = new Node(val)

      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        let temp = this.tail;
        temp.next = newNode;
        this.tail = newNode;
      }

      this.length++;
      return this
    }

    // TODO: Implement the removeTail method here
    removeTail() {
      let temp = this.tail;

      if (this.length === 0) {
        return undefined
      } else if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        let currentNode = this.head;
        for (let i = 0; i < this.length - 1; i++) {
          if (currentNode.next === this.tail) {
            this.tail = currentNode;
            this.tail.next = null;
          }
          currentNode = currentNode.next;
        }
      }
      this.length--;
      return temp;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
      let newNode = new Node(val);

      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        let temp = this.head;
        this.head = newNode;
        newNode.next = temp;
      }

      this.length++;
      return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
      if (!this.head) return undefined;
      let temp = this.head;

      if (this.length === 1) {
        this.head = this.tail = null;
      } else {
        this.head = temp.next;
      }

      this.length--;
      return temp;
    }

    // TODO: Implement the contains method here
    contains(target) {
      let currentNode = this.head
      for (let i = 0; i < this.length; i++) {
        if (currentNode.value === target) {
          return true;
        } else {
          currentNode = currentNode.next;
        }
      }
      return false;
    }

    // TODO: Implement the get method here
    get(index) {
      if (index > this.length) {
        return null;
      }

      let currentNode = this.head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }

      return currentNode;
    }

    // TODO: Implement the set method here
    set(index, val) {
      if (index > this.length) return false;

      let currentNode = this.head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }

      if (currentNode) {
        currentNode.value = val;
        return true;
      } 
      return false;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
      if (index >= this.length) return false;

      let newNode = new Node(val);
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }

      let temp = currentNode.next;
      currentNode.next = newNode;
      newNode.next = temp;
      this.length++;

      return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
      if (index >= this.length) return undefined;

      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }

      let removeNode = currentNode.next;
      let temp = currentNode.next;
      temp = temp.next;
      currentNode.next = temp;
      this.length--;

      return removeNode;
    }

    // TODO: Implement the size method here
    size() {
      return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
