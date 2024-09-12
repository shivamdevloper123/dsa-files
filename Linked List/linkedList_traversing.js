// class Node {
//     constructor(data) {
//       this.data = data; // stores the value
//       this.next = null; // stores the reference to the next node
//     }
//   }

//   class linkedList {
//     constructor() {
//         this.head =null; // head of the list
//     }

//     append(data){
//         let newNode = new Node(data);
//         if(this.head === null){
//             this.head = newNode ;
//             return ;
//         }
//         else{
//             let currentNode = this.head;
//             while (currentNode.next !== null) {
//                 currentNode = currentNode.next
//             } 
//             currentNode.next = newNode
//         }
//     }
//     traversing(){
//         let currentNode = this.head;
//         while(currentNode){ 
//              // Showing current node's data, next node's data and reference
//              console.log(`|data: ${currentNode.data}|next: ${currentNode.next ? `{ data: ${currentNode.next.data}, node: ${currentNode.next} }` : 'null'}|---> `);
//             currentNode =currentNode.next;
//           } 
//     }
//   }

//   method : 2
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
}

let list = new linkedList(2);
let arr = [3, 4, 35, 5, 7]

arr.forEach(nodedata => { list.append(nodedata) });
// list.append(3)
// list.append(4)
// list.append(5)
// list.append(6)
console.log(list)
list.traversing();
