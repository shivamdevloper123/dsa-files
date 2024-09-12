// Node क्लास, जो एक नोड को रिप्रेजेंट करता है
class Node {
    constructor(data) {
        this.data = data;  // नोड का डेटा
        this.next = null;  // अगले नोड का पता
        this.prev = null;  // पिछले नोड का पता
    }
}

// DoublyLinkedList क्लास
class DoublyLinkedList {
    constructor(data) {
        let newNode = new Node(data); // पहला नोड बनाएँ
        this.head = newNode;          // हेड को सेट करें
        this.tail = newNode;          // टेल को भी हेड पर सेट करें
        this.size = 1;                // लिस्ट का साइज 1 है
    }

    // Append Method - नए नोड को अंत में जोड़ने के लिए
    append(nodedata) {
        let newNode = new Node(nodedata);  // नया नोड बनाएं
        newNode.prev = this.tail;          // नए नोड का prev टेल पर सेट करें
        this.tail.next = newNode;          // पुराने टेल का next नए नोड पर सेट करें
        this.tail = newNode;               // टेल को नए नोड पर अपडेट करें
        this.size += 1;                    // साइज बढ़ाएँ
    }

    // Traversing Forward - लिस्ट को फॉरवर्ड में ट्रवर्स करें
    traverseForward() {
        let currentNode = this.head;       // हेड से शुरुआत करें
        let output = "Head->";
        while (currentNode !== null) {
            output += currentNode.data + " <--> ";  // डेटा प्रिंट करें
            currentNode = currentNode.next;       // अगले नोड पर जाएं
        }
        output += "null->Tail";
        console.log("Forward Traversal: " + output);
    }

    traverseBackward() {
        let currentNode = this.tail;       // लिस्ट के टेल से शुरू करें
        let output = "Head->";
        while (currentNode !== null) {     // जब तक नोड्स खत्म न हो जाएं
            output += currentNode.data + " <--> ";  // डेटा को आउटपुट में जोड़ें
            currentNode = currentNode.prev;       // पिछले नोड पर जाएं
        }
        output += "null->Tail";                  // लिस्ट के अंत में null जोड़ें
        console.log("Backward Traversal: " + output);  // आउटपुट दिखाएं
    }


    // Insertion Method - दिए गए index पर नोड को इन्सर्ट करें
    insertion(index, value) {
        if (index < 1 || index > this.size + 1) {   // चेक करें कि index वैध है या नहीं
            console.log("Invalid index");
            return;
        }

        let newNode = new Node(value); // नया नोड बनाएँ

        if (index === 1) {  // अगर शुरुआत में इन्सर्ट करना हो
            newNode.next = this.head;  // हेड को आगे शिफ्ट करें
            this.head.prev = newNode;
            this.head = newNode;  // नया नोड हेड बन जाता है
        } else if (index === this.size + 1) {  // अगर अंत में इन्सर्ट करना हो
            this.append(value);  // append मेथड का उपयोग करें
        } else {  // अगर बीच में इन्सर्ट करना हो
            let currentNode = this.head;
            let counter = 1;

            // इन्सर्ट करने के लिए सही पॉजिशन तक जाएं
            while (counter < index - 1) {
                currentNode = currentNode.next;
                counter++;
            }

            // नए नोड को बीच में इन्सर्ट करें
            let nextNode = currentNode.next;
            newNode.prev = currentNode;
            newNode.next = nextNode;
            currentNode.next = newNode;
            nextNode.prev = newNode;
        }

        this.size += 1;  // साइज बढ़ाएँ
    }
    // // Traversing backward

}

// Doubly Linked List बनाने का तरीका
let list = new DoublyLinkedList(3);  // 3 से शुरुआत करें

list.append(4);  // 4 जोड़ें
list.append(5);  // 5 जोड़ें
list.append(7);  // 7 जोड़ें
list.append(8);  // 8 जोड़ें
list.append(34); // 34 जोड़ें

console.log("Before Insertion:");
list.traverseForward();  // इन्सर्शन से पहले की लिस्ट देखें

console.log("\nInserting at position 3 (value 6):");
list.insertion(3, 6);  // पोजीशन 3 पर 6 को इन्सर्ट करें

console.log("\nAfter Insertion:");
list.traverseForward();  // इन्सर्शन के बाद की लिस्ट देखें
