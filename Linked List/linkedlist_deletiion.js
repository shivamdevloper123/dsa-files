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
    deleting(index) {  //ek function deleting(){} liya 

        let counter = 1;  //yaha hum counter ki value by defult 1 lenge  
        let lead = this.head; //"lead"  ko asign ho jayega "this.head" kyoki "head" shuru me null hoga isliye  
        if (index === 1) { // agar hame "head delete" karna hai to ham "index===1" lenge
            this.head = this.head.next; // or hamara head node delete hone ke baad  uska next node ko ham head bana denge 
        } else {
            while (counter < index - 1) { // kyoki lead delete hone vale node se pahle vala node hota hai to ham index-1 liya kyoki hame lead node ke jankar uske next node delete karna h

                lead = lead.next;  // pahle hamne "lead = this.head " is liye lead linked list me aage badhane ke liye hamne ye kiya  
                counter++;   //counter yaha ek ek karke badhega
            }
            let nextNode = lead.next.next // yaha hum nextNode ko ek variable declare kar rahe hai usko lead ke next se next ko lead bana rahe hai maan lo [2,3,4,5,6,7,8 ] head->2 lead->4 deleting->5 nextNode->6 hoga
            lead.next = nextNode
            console.log(lead)
            console.log(nextNode)

        }
    }
}

let list = new linkedList(2);
let arr = [3, 4, 5, 6, 7, 8]

arr.forEach(nodedata => { list.append(nodedata) });
// list.append(3)
// list.append(4)
// list.append(5)
// list.append(6)
// list.append(7)
// list.append(8)
list.traversing();
list.deleting(4)
console.log(list)