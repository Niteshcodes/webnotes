  
      let home = document.getElementById("main");
      let foot = document.getElementById("contect");
      let h = document.getElementById("hm");
      let con = document.getElementById("con");
      let menu= document.getElementById("menu-bar");
      let onoff=document.getElementById("close-menu")
      let name=document.getElementById("nav");
      let ul=document.getElementsByClassName("ul");
      console.log(name);
      h.addEventListener("click", () => {
        foot.style="display:none; opacity:0 ";
        home.style="display:block; animation:transition 0.7s ";
      });
      con.addEventListener("click", () => {
        home.style="display:none; opacity:0; ";
        foot.style="display:block; animation:transition 0.7s"
      });

      menu.addEventListener('click',()=>{
        name.style="display:flex";

      })
      onoff.addEventListener('click',()=>{
        name.style="display:none";

      })
      ul.addEventListener('click',()=>{
        name.style="display:none";

      })



