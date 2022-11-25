let main=document.getElementById('HTML-Main');
let btn=document.getElementById('theme-icon');
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', ()=>{
 let b= document.body.classList.toggle('dark');
 console.log(b);
  if(b==false){
    main.style="background-color:black; color:white";
  }
  else{
    main.style="background-color:white; color:black";
  }
})

// main page 



