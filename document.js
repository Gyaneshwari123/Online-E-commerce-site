



login box
var login=document.getElementById('login');
var model=document.getElementById('model');
var close=document.getElementById('close');

login.onclick=function('login'){
    model.style.display="block";
}


close.onclick=function(close){
    model.style.display="none";
}

window.onclick=function(e){
    if(e.target==model){
        model.style.display="none";
    }
}

function myLogin(){
    var email=document.getElementById('email');
    var pass=document.getElementById('pass');

    if(email.value=="mrWritercode@gmail.com")
    
        if(pass.value=="xyz123")
        {
            alert("Welcome this sitepage")
        }
        else{
            alert("Password incorrect")
        }
    
    else{
        alert("Email is not registered with us")
    }
}


