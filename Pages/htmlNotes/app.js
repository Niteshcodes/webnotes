let menu=document.getElementById("menu");
let cl=document.getElementById("close-menu");
let menu_bar=document.getElementById('menu-bar');

cl.addEventListener('click',()=>{
    menu.style="display:none;";
    
    
})

menu_bar.addEventListener('click',()=>{
    menu.style="display:flex;";
})