const post=[
    {
        title:"first",
        body:"hello first post",
        createdtime:new Date().getTime()
    },
    {
        title:"second",
        body:"hello second post",
        createdtime:new Date().getTime()
    },

   
]
function getPost(){
    let output=``;
    setTimeout(()=>{
        post.forEach((post,index)=>{
            output+=`<li>${post.title} ${(new Date().getTime() -post.createdtime)/1000} sec</li>`;
        })
        document.body.innerHTML=output;

    },1000)
}
function createPost(p,callback){
    setTimeout(()=>{
        post.push({...p,createdtime:new Date().getTime()})
        callback()
    },2000)

}

function create4Post(p,callback){
setTimeout(()=>{
    post.push({...p,createdtime:new Date().getTime()})
    callback()
},3000)
}



function createPostPromiss(p){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{

           post.push(p);
          
            const error=false;
            if(!error){
                resolve();
            }
            else{
                reject('Error:Something went wrong')
            }
        },3000)

    })
}

function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const error=false;
            
            if(post.length>0){
                post.pop();
                resolve();
            }
            else{
                this.error=true
                reject('Error:Array is empty')
            }
            
        },0)
    })
}


// createPost( {  title:"third", body:"hello second post"},getPost);

// create4Post( {title:"fourth",body:"hello second post"},createPost);



const creatpostbyAsync=async()=>{
   await createPostPromiss({  title:"third", body:"hello second post",createdtime:new Date().getTime()})

   getPost
  deletion;


}
creatpostbyAsync()

// createPostPromiss({  title:"third", body:"hello second post",createdtime:new Date().getTime()})
// .then(getPost)
// .then(deletion)
// .catch(error=>{
//     console.log(error)
// })

function deletion(){
    // deletePost()
    // deletePost()
    // deletePost()
}

const users=[
    {name:'zubair',
     activityTime:new Date().getTime(),

    },
  

]

// function updateLastUserActivityTime(){

//    return new Promise((resolve,reject)=>{



//     setTimeout(()=>{
//        this.users.forEach((user,indes)=>{
//             user.activityTime=new Date().getTime()
//         })
    
//     },)

       
//    }) 

// }


//-------PROMISE ALL-----

// function userandpostUpdate(){
//     Promise.all([createPostPromiss,updateLastUserActivityTime]).then(res=>{
//         console.log(res)
//     }).then(deletePost)
// }
// updateLastUserActivityTime()
// console.log(post)
