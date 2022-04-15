let toggle = document.getElementById('toggle');
let body = document.getElementById("body");


function check(){
    if(toggle.checked){
        console.log("marcou")
        body.style.backgroundColor = "#292C35"
      
    }
    else{
        console.log("nao marcou")
        body.style.backgroundColor = "#F1F1F1"
    }
    
}