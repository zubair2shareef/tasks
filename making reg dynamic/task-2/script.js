class Queue{
    constructor(){
        this.array=[];
        this.front=0;
        this.rear=-1;
    }
    enqueue(ele){
        this.rear+=1;
        this.array[this.rear]=ele;
        return ele;

    }
    isEmpty(){
        return this.rear<this.front;
    }
    dequeue(){
        if(this.isEmpty()){
            return "empty"
        }
        
        else{
       
            const itm= this.array[this.front];
            this.front+=1;
            
            return itm
          
        }

    }
}
const queue=new Queue();

console.log(queue.enqueue(23))
console.log(queue.enqueue(24))
console.log(queue.enqueue(27))
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())