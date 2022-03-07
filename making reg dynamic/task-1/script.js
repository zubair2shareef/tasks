class Stack{

    constructor(){
        this.stack=[];
        this.count=-1;
    }
    push(ele){
        this.count+=1;
        this.stack[this.count]=ele;
        
        return ele;
    }
    pop(){
        if(this.count<=-1){
            return "empty"
        }
        else{
            let popEle=this.stack[this.count];
            this.count+=-1;
            //console.log(this.count)
            return popEle;
        }
        
    }
    peek(){
        return this.stack[this.count]
    }
    isEmpty(){
        return this.count==-1;
    }
}
const stack=new Stack();

console.log(stack.push(100))
console.log(stack.push(200))
console.log(stack.push(300))
console.log(stack.pop())

console.log(stack.peek())



for(let i=0;i<10;i++){
    setTimeout(()=>{
        console.log(i);
    },i*1000)
}

