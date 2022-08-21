burger = document.querySelector('.burger')
menu = document.querySelector('.menu')
resmenu = document.querySelector('.res-menu')



burger.addEventListener('click', ()=>{
   resmenu.classList.toggle('menu');
})


function myFunction() {
    var x = document.getElementById("menu cart");
    if (x.className === "") {
      x.className += " responsive";
    } else {
      x.className = "";
    }
  }

 