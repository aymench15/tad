


 var liste=[
  {
      Content:"la profissionalisme"
  },
  {
   Content:"la confidence des sources"
  },
  {
   Content:"des top formations"
  }
  
  ]

var time=setInterval(load,2000);
/*
var btttn=document.getElementById("buttonn");
var todol=document.getElementById("auto");
var div2=document.getElementById("div2");
todol.appendChild(div2);
var texte=document.createElement("h");
   document.body.appendChild(texte);
   texte.setAttribute("style","padding:0; margin:0;")
   
    div2.appendChild(texte);
    var valcomment=document.createTextNode(liste[i].Content);
texte.appendChild(valcomment);

    */

    var i=0;
function load(){
  if(i<liste.length){
    contente.textContent=liste[i].Content;
   
   

i++;
}
else{
  
  i=0;
  contente.textContent=liste[i].Content;
}

}







function lightfunc(event){ 
  if(event.target.nodeName=="H3")
  {
    var novl=document.createElement("li");
   event.target.classList.toggle("lightt");
      
  //event.target.classList.toggle("Nimage");
  bodyy.classList.add("style2");
   
}

}

//boddy.addEventListener('click', lightfunc, false);

