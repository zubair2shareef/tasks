const function1=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("function1 ")
            resolve();

        },4000)
    })
}
const function2=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("function2 ")
            resolve();

        },3000)
    })
}
const function3=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("function3 ")
            resolve();

        },2000)
    })
}


async function prac(){
    await function1();
    await function2();
    await function3();
}
prac();

function1().then(()=>{
    function2().then(()=>{
        function2()
    })
})
