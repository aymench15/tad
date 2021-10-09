/*var light=document.getElementById("light");
var bgcolor=document.getElementById("bgcolor");
*/



/*function lightfunc(event){

alert(event.target.nodeName);
}*/

var imagee=document.getElementsByClassName("imagee");
var mode=document.getElementsByClassName("boddy");

function lightfunc(event){ 
  if(event.target.nodeName=="H3")
  {
   event.target.classList.toggle("lightt");
    
     
      
  //event.target.classList.toggle("Nimage");
   
}}

imagee.addEventListener('click', lightfunc, false);

