function HelloWorld (){
   var content = document.getElementById("output")
   content.innerHTML = "";
   for(var i = 0; i<100; i++){
    content.innerHTML += "<div>Hello World</div>";
   }
}

function GoodbyeWorld (){
   var content = document.getElementById("output")
   content.innerHTML = "";
   for(var i = 0; i<100; i++){
       content.innerHTML += "<div>Goodbye World</div>";
   }
}