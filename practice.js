// console.log("hello");

// let name="zubair" , age=20 , address="hyderabad";
// personDetails="my name is "+name+",age "+age+",address is "+address;
// str3=`my name is ${name} age is${age} address is ${address}`;




// let str="My name is Yash Prasad, age is 25, address is Prestige Falcon City, Bangalore"

// let str2=str.split(',');


// /*----------------------------------------------------------*/
// const array = ["hello", "world", "whats", "up"];
// array.sort();

// array.push("hola")
// array.pop();
// array.shift()
// array.unshift("hello")
// console.log(array.indexOf("hello"))

// console.log(array);






// function getMinMax(arr, n)
// {
//    let ans=[];
//     var i;


//     /*If there is only one element then return it as min and max both*/
//     ans.min=arr[0];
//     ans.max=arr[0];

//     for (i = 2; i < n; i++) {
//         if (arr[i] > ans.max) {
//             ans.max = arr[i];
//         } else if (arr[i] < ans.min) {
//             ans.min = arr[i];
//         }
//     }

//     return ans;
// }

// /* Driver program to test above function */

//     var arr = [1000, 11, 445, 1, 330, 3000];
//     var arr_size = 6;
//     minmax = getMinMax(arr, arr_size);
   
// console.log("\nMinimum element is " ,minmax.min +"<br>");

// console.log("\nMaximum element is " , minmax.max);

// // This code is contributed by shivanisinghss2110
// //-----------------------------------------------------------------------------------------
// const person={
//     firstname:'zubair',
//     lastname:'shareef',
//     age:21,
//     hobbies:['music','movies','doingnothing'],
//     address:{
//         street:'50 main st',
//         city:'hyderabad',
//         state:'telangana'
//     }
// }
// console.log(person.hobbies[1]);
// console.log(person.address.state);

// const{age,address:{state}}=person

// console.log(age,state)

// const todo=[
//     {
//         id:1,
//         name:"fs"
//     },
//     {
//         id:2,
//         name:"sf"
//     },
//     {
//         id:3,
//         name:"gdfg"
//     },
//     {
//         id:4,
//         name:"sdf"
//     },
// ];

// for(let i=0;i<todo.length;i++){
//     console.log(todo[i].id);
// }


// //---------------------------------------------------------------------------------------------------


//const convertTemp=k=>{return k+273+"k";}

// const convertTemp=(x,y)=>{
//     switch(y){
//         case 'K':
//             return 273+x+"k";
//             break;
//         case 'C':
//             return x-273+"c";
//             break;
      

//         default:
//             return "enter valid input"
//     }


// }
// const convertTemp=(x,y)=>{

//     z=(y=='K'?x+273 :x-273)
//     return z;
// }

// console.log(convertTemp(35,'K'))

//-----------------------------------------------------------------------------------------------

// Create a constructor function Student which takes in first name, last name , roll number , Sex and date of birth
// Make 2 students objects
// Console log the full name (first name + last name) of the student object with greater age
// Write a function inside the constructor to getBirthYear and fullName of the student
// Write a function outside which takes minimum age to be egligible as arguments and return whether the student is egligible or not by calculating his age from dob .

// function Student( firstName,lastName , rollNo , sex ,dob){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.rollNo=rollNo;
//     this.sex=sex;
//     this.dob=new Date(dob);

//     this.getdetails=function(){
//         console.log(this.firstName+" "+this.lastName+","+this.dob)
//     }

// }
// Student.prototype.isEligible=function(){
//     return this.dob.getFullYear()>=1997?"eligible":"not eligible"
// }

// const student1=new Student('zubair','shareef','548','male','3-2-1999')
// const student2=new Student('john','swaruop','548','male','3-4-1994')
// z=student1.dob>student2.dob?student1.firstName+" "+student1.lastName:student2.firstName+" "+student2.lastName;
// console.log(z);
// console.log(student1.isEligible());
//--------------------------------------------------------------------------------------------------------------

// class Student{
//     constructor( firstName,lastName , rollNo , sex ,dob){
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.rollNo=rollNo;
//         this.sex=sex;
//         this.dob=new Date(dob);
    
//         getdetails=()=>{
//             console.log(this.firstName+" "+this.lastName+","+this.dob)
//         }
    
//     }
// }
// const student1=new Student('zubair','shareef','548','male','3-2-1999')
// console.log(student1.getdetails)



//let count=0;
//-------------------------------------------------------------------------------------------------------------
class User{
    static count=0;
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
        User.count++;
        
    }
    register=()=>{
        console.log(this.username+ "is created"+this.count)
    }
  
}

class Member extends User{
    
    constructor(username,email,password,memberPackage){

        super(username,email,password);
        this.package=memberPackage;
        let date=new Date();
        let year=date.getFullYear();
        let month=date.getMonth();
        let day=date.getDay();
        this.membershipactive=new Date(year,month+1,day);


        this.getPackage();
    }

    renewmembership(){
        const year = this.membershipactive.getFullYear();
        const month = this.membershipactive.getMonth();
        const day = this.membershipactive.getDay();
        this.package=="Standard"?
        this.membershipactive=new Date(year,month+1,day)
        :
        this.membershipactive=new Date(year+1,month,day);
    }

    membershipactivedate(){
        console.log(this.username+"is active till"+this.membershipactive)
    }




    getPackage=()=>{
        console.log(this.username+'is subscribed to the '+this.package+'package')
    }
}
const user1=new Member('zubair shareef','odiha@gmailc9m','12445','premium')

user1.getPackage();
user1.renewmembership();
user1.membershipactivedate();
console.log(User.count)


//-------------------------------------------------------------------------------------------------------------

