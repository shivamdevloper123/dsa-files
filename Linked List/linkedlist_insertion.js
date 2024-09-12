class linkedList {
    constructor(data) {
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head
        this.size = 1
    }

    append(nodedata) {
        let newNode = {
            value: nodedata,
            next: null
        }
        this.tail.next = newNode
        this.tail = newNode;
        this.size += 1;
    }

    traversing() {
        let counter = 0;
        let currentNode = this.head;
        while (counter < this.size) {
            // console.warn(currentNode);
            currentNode = currentNode.next;
            counter++;
        }
    }
    deleteNode(index) {
        let counter = 1;
        let lead = this.head;
        if (index === 1) {
            this.head = this.head.next;
        } else {
            while (counter < index - 1) {
                lead = lead.next;
                counter++;
            }
            let nextNode = lead.next.next;
            lead.next = nextNode;
            //   console.warn(lead);
        }
    }

    inserting(index, value) {
        if (index < 1 || index > this.size + 1) {
            console.log("Invalid index");
            return;
        }

        let newNode = {
            value: value,
            next: null
        };

        if (index === 1) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let currentNode = this.head;
            let counter = 1;

            while (counter < index - 1) {
                currentNode = currentNode.next;
                counter++;
            }

            newNode.next = currentNode.next;
            currentNode.next = newNode;
        }

        this.size += 1;
    }
}




let list = new linkedList(1);
let arr = [2, 13, 24, 35, 46, 57, 68]

arr.forEach(nodedata => { list.append(nodedata) });
// list.append(3)
// list.append(4)
// list.append(5)
// list.append(6)
// list.append(7)
// list.append(8)



console.log("Before Insertion:");
list.traversing();
console.log("List before insertion: ", JSON.stringify(list,null,1)); // Display structure before insertion

console.log(); // Line break for clarity

list.inserting(3, 50000);

console.log("After Insertion:");
list.traversing();
console.log("List after insertion: ", JSON.stringify(list,null,1)); // Display structure after insertion

console.log(list); // Print list to console using function defined in file dsa_functions.js