class linkedList {
    constructor(data) {
        this.head = {
            value: data,
            next: null
        };
        this.tail = this.head;
        this.size = 1;
    }

    append(nodedata) {
        let newNode = {
            value: nodedata,
            next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.size += 1;
    }

    traversing() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode);
            currentNode = currentNode.next;
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
        }
        this.size -= 1; // Decrease the size after deletion
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

    searching(data) {
        let currentNode = this.head;
        let index = 1;

        while (currentNode) {
            if (currentNode.value === data) {
                console.log(`Data found at index: ${index}`);
                return currentNode;
            }
            currentNode = currentNode.next;
            index++;
        }

        console.log("Data not found");
        return null; // If the data is not found
    }
}

let list = new linkedList(1);
let arr = [2, 13, 24, 35, 46, 57, 68];

arr.forEach(nodedata => list.append(nodedata));

list.searching(13); // Searches for 13

// list.traversing(); // You can traverse and print the whole list if you want
