// const ul=document.querySelector('.ul');
// ul.children[0].innerHTML="hello";
// ul.children[1].innerHTML="world";

// ul.children[0].style.backgroundColor="red";
// ul.children[1].style.backgroundColor="yellow";

const form=document.querySelector('#my-form');
const name=document.querySelector('#name');
const email=document.querySelector('#email');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
  if(name.value===""|| email.value===""){
      alert("fill all the fields")
  }
  else{
      console.log(name.value+","+email.value)
  }
})


