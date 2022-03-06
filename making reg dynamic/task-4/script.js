console.log("person1:shows ticket")
console.log("person2:shows ticket")

const promiseWifeTicket=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket')
    })
})
const getpopCorn=promiseWifeTicket.then((res)=>{
    console.log('Husband:lets go')
    console.log("wife:hungry");
    return new Promise((resolve,reject)=>{
        resolve(`${res} popcorn`)
    })
   
})
const getbutter=getpopCorn.then((res)=>{
    console.log('hunbad :heres is popcorn')
    console.log('hunbad :lets go')
    console.log('wife :need butter')
    return new Promise((resolve,reject)=>{
        console.log(`${res} butter`)
    })
   
})
const getColdDrinks=getbutter.then((res)=>{
    return new Promise((resolve,reject)=>{
        console.log('colddrink')
        console.log(`${res} drink`)
    })
})

console.log("person4:shows ticket")
console.log("person5:shows ticket")


// --------------------------------------------------------------------------------

console.log("person1:shows ticket")
console.log("person2:shows ticket")

const preMovie=async()=>{
   const promisewifeticks=new Promise((resolve,reject)=>{
       setTimeout(()=>{

        resolve('ticket ')
    },3000)

   })
const ticket=  await promisewifeticks
console.log("wife:have ticket")
console.log('Husband:lets go')
    console.log("wife:hungry");
    const getpopCorn=new Promise((resolve,reject)=>resolve('popcorn'));
   const popcorn=await getpopCorn;
    console.log('hunbad :heres is popcorn')
    console.log('hunbad :lets go')
    console.log('wife :need butter')
    const getbutter=new Promise((resolve,reject)=>resolve('butter'));
    console.log('hunbad :heres is popcorn')
        console.log('hunbad :lets go')
        console.log('wife :need butter')
    const butter=await getbutter
    console.log('wife :lnow i need colddrick')
   const getColdDrinks=new Promise((resolve,reject)=>resolve('dricn'))
   console.log("Husband:here is your drink")
   console.log('hunbad :lets go now ')
  
return ticket;
}
preMovie().then((res)=>{
    console.log(res)
})

console.log("person4:shows ticket")
console.log("person5:shows ticket")