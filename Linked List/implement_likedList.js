// Define Node class
class Node {
    constructor(data) {
        this.data = data;   // Store the value
        this.next = null;   // Pointer to the next node
    }
}

// Define LinkedList class
class LinkedList {
    constructor() {
        this.head = null;   // Initially, the list is empty (head points to null)
    }

    // Insert node at the head
    insertAtHead(data) {
        const newNode = new Node(data); // Create a new node
        newNode.next = this.head;       // Point the new node's next to the current head
        this.head = newNode;            // Update the head to the new node
    }

    // Insert node at the tail
    insertAtTail(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode; // If the list is empty, make new node the head
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next; // Traverse to the last node
        }
        current.next = newNode;   // Link the last node's next to the new node
    }

    // Delete node by value
    deleteByValue(data) {
        if (this.head === null) {
            console.log("List is empty");
            return;
        }

        // If the node to be deleted is the head
        if (this.head.data === data) {
            this.head = this.head.next; // Move head to the next node
            return;
        }

        let current = this.head;
        let previous = null;

        // Traverse the list to find the node to delete
        while (current !== null && current.data !== data) {
            previous = current;
            current = current.next;
        }

        if (current === null) {
            console.log("Node not found");
            return;
        }

        // Bypass the node to be deleted
        previous.next = current.next;
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

    // // Search for a node by value
    // search(data) {
    //     let current = this.head;
    //     while (current !== null) {
    //         if (current.data === data) {
    //             return true;
    //         }
    //         current = current.next;
    //     }
    //     return false; // If not found
    // }

    // // Print the linked list
    // printList() {
    //     let current = this.head;
    //     let list = '';
    //     while (current !== null) {
    //         list += current.data + ' -> ';
    //         current = current.next;
    //     }
    //     console.log(list + 'null');
    // }
}

// Example usage:

const list = new LinkedList();
list.insertAtHead(3);    // List: 3 -> null
list.insertAtTail(5);    // List: 3 -> 5 -> null
list.insertAtTail(13);   // List: 3 -> 5 -> 13 -> null
list.insertAtTail(2);    // List: 3 -> 5 -> 13 -> 2 -> null

list.printList();        // Output: 3 -> 5 -> 13 -> 2 -> null

list.deleteByValue(5);   // Delete node with value 5
list.printList();        // Output: 3 -> 13 -> 2 -> null

console.log(list.search(13)); // Output: true
console.log(list.search(100)); // Output: false
