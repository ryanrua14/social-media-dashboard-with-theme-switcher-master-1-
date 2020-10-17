var body = document.querySelector('body');
var bodyClass = body.classList;
var toggle = document.querySelector("#checkbox");
var light = document.querySelector(".light");
var dark = document.querySelector(".dark");


toggle.addEventListener('click', () =>{
   body.classList.toggle("light"); 
    body.classList.toggle("dark");
});