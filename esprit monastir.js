/*function mufunc(event){
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    localStorage.setItem("email",email);
    localStorage.setItem("password",password);
    }*/
    const esprim_email =["ilyes.benhmid@esprim.tn","oussema.hajmabrouk@esprim.tn"]
    const esprim_password =["1289ilyes"]
    document.getElementById("button").addEventListener("click",function(){
    var esprim = document.getElementById("email").value
    var espassword = document.getElementById("password").value
    for(let i=0;i<esprim_email.length;i++){
        if(esprim > esprim_email[i]){
            window.alert("email incorrect")
        }
    }
   })