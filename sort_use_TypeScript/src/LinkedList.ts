import {Sort} from './Sort'

class Node {
    next:Node|null =null;
    
    constructor(public data:number){}

}

export class LinkedList extends Sort{
    head:Node | null = null;
    add(data:number):void{

        const node = new Node(data);

        if(!this.head){
            this.head = node;
            return;
        }
        let tail = this.head;
        while(tail.next){
            tail= tail.next;
        }
        tail.next = node;
    }
    length():number{
        if(!this.head){
            return 0;

        }
        let length = 1;
        let tail = this.head;
        while(tail.next){
            length++;
            tail = tail.next;
        }
        return length;

    }
    at(index:number):Node{
        if(!this.head){
            throw  new Error('not found');
        }
        let count =0; 
        let node:Node| null =this.head;
        while(node){
            if(count === index){
                return node;
            }
            count++;
            node = node.next;
        }
        
        throw new Error('Index out of bounds');
        
    }
    compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty');
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);

        const leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    }

    print(): void {
        if (!this.head) {
        return;
        }

        let node: Node | null = this.head;
        while (node) {
        console.log(node.data);
        node = node.next;
        }
    }
}