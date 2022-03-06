class Stack{
    constructor(){
        this.q1 = new Queue();
        this.q2 = new Queue();
    }

    push(ele){
        this.q1.push(ele);
    }
    pop(){
        while(q1.length >0){
            q2.push(q1.front())
            q1.dequeue();
        }
        q2.dequeue();
        while(q2.length >0){
            q1.push(q2.front())
            q2.dequeue();
        }
    }
}

const stack =new Stack()
stack.push(42)
stack.push(52)
stack.push(82)
stack.pop();