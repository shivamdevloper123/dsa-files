
// method 1
// Create the nodes
let node1 = new Node(3);
let node2 = new Node(5);
let node3 = new Node(13);
let node4 = new Node(2);

// Link the nodes together (forward and backward)
node1.next = node2;

node2.prev = node1;
node2.next = node3;

node3.prev = node2;
node3.next = node4;

node4.prev = node3;

// Traversing forward
console.log("\nTraversing forward:");
let currentNode = node1;
while (currentNode) {
    process.stdout.write(currentNode.data + " -> ");
    currentNode = currentNode.next;
}
console.log("null");

// Traversing backward
console.log("\nTraversing backward:");
currentNode = node4;
while (currentNode) {
    process.stdout.write(currentNode.data + " -> ");
    currentNode = currentNode.prev;
}
console.log("null");


// method 2
class Node {
    constructor(data) {
        this.data = data;  // नोड में डेटा स्टोर करने के लिए
        this.next = null;  // अगले नोड का पता रखने के लिए (next pointer)
        this.prev = null;  // पिछले नोड का पता रखने के लिए (prev pointer)
    }
}

// Explanation (समझाइए):

// Node क्लास एक नोड को रिप्रेजेंट करता है। इसमें तीन चीज़ें हैं:
// data: यह नोड में स्टोर किया हुआ डेटा है।
// next: यह नोड के अगले नोड का पता रखता है।
// prev: यह नोड के पिछले नोड का पता रखता है।
// इस क्लास का उपयोग करके हम हर नोड के लिए डेटा और उसकी दिशा (अगला और पिछला नोड) को ट्रैक कर सकते हैं।

class DoublyLinkedList {
    constructor(data) {
        let newNode = new Node(data);  // नया नोड बनाएं
        this.head = newNode;           // हेड को नए नोड से सेट करें
        this.tail = newNode;           // टेल को भी नए नोड से सेट करें
        this.size = 1;                 // लिस्ट का साइज 1 है
    }
    
    // Explanation (समझाइए):

    // DoublyLinkedList क्लास डबल लिंक्ड लिस्ट को रिप्रेजेंट करता है।
    // constructor(data) के जरिए जब एक नया लिस्ट बनाया जाता है, तो पहला नोड बनाया जाता है।
    // this.head हेड पॉइंटर है, जो लिस्ट के पहले नोड को इंगित करता है।
    // this.tail टेल पॉइंटर है, जो लिस्ट के आखिरी नोड को इंगित करता है।
    // लिस्ट की शुरुआत में हेड और टेल दोनों पहले नोड पर होते हैं और लिस्ट का साइज 1 होता है।


    append(nodedata) {
        let newNode = new Node(nodedata);  // नया नोड बनाएं
        newNode.prev = this.tail;          // नए नोड का prev टेल पर सेट करें
        this.tail.next = newNode;          // पुराने टेल का next नए नोड पर सेट करें
        this.tail = newNode;               // टेल को नए नोड पर अपडेट करें
        this.size += 1;                    // लिस्ट का साइज बढ़ाएं
    }
    // Explanation (समझाइए):

    // append मेथड का उपयोग नए नोड को लिस्ट में जोड़ने के लिए किया जाता है।
    // सबसे पहले एक नया नोड बनाया जाता है।
    // इस नए नोड का prev पिछले नोड (टेल) की ओर पॉइंट करेगा।
    // फिर पुराने टेल का next नए नोड पर पॉइंट करेगा।
    // इसके बाद, नए नोड को टेल बना दिया जाता है।
    // लिस्ट का साइज 1 से बढ़ जाता है।
    

    traverseForward() {
        let currentNode = this.head;       // लिस्ट के हेड से शुरू करें
        let output = "";
        while (currentNode !== null) {     // जब तक नोड्स खत्म न हो जाएं
            output += currentNode.data + " -> ";  // डेटा को आउटपुट में जोड़ें
            currentNode = currentNode.next;       // अगले नोड पर जाएं
        }
        output += "null";                  // लिस्ट के अंत में null जोड़ें
        console.log("Forward Traversal: " + output);  // आउटपुट दिखाएं
    }
    // Explanation (समझाइए):

    // यह मेथड लिस्ट को हेड से टेल तक (फॉरवर्ड डायरेक्शन) ट्रवर्स करता है।
    // currentNode से शुरुआत होती है, जो कि हेड होता है।
    // हर नोड का डेटा प्रिंट होता है और फिर हम अगले नोड की ओर बढ़ते हैं।
    // जब हम लिस्ट के आखिरी नोड तक पहुँच जाते हैं, तब लूप खत्म हो जाता है।

    traverseBackward() {
        let currentNode = this.tail;       // लिस्ट के टेल से शुरू करें
        let output = "";
        while (currentNode !== null) {     // जब तक नोड्स खत्म न हो जाएं
            output += currentNode.data + " -> ";  // डेटा को आउटपुट में जोड़ें
            currentNode = currentNode.prev;       // पिछले नोड पर जाएं
        }
        output += "null";                  // लिस्ट के अंत में null जोड़ें
        console.log("Backward Traversal: " + output);  // आउटपुट दिखाएं
    }

//     Explanation (समझाइए):

// यह मेथड लिस्ट को टेल से हेड तक (बैकवर्ड डायरेक्शन) ट्रवर्स करता है।
// currentNode से शुरुआत होती है, जो कि टेल होता है।
// हर नोड का डेटा प्रिंट होता है और फिर हम पिछले नोड की ओर बढ़ते हैं।
// जब हम लिस्ट के पहले नोड तक पहुँच जाते हैं, तब लूप खत्म हो जाता है।

}


let list = new DoublyLinkedList(3);  // 3 के साथ लिस्ट शुरू करें

list.append(4);  // 4 जोड़ें
list.append(5);  // 5 जोड़ें
list.append(7);  // 7 जोड़ें
list.append(8);  // 8 जोड़ें
list.append(34); // 34 जोड़ें

list.traverseForward();  // लिस्ट को फॉरवर्ड ट्रवर्स करें
list.traverseBackward(); // लिस्ट को बैकवर्ड ट्रवर्स करें
