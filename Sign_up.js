let signup=()=>{
    let sinname=document.querySelector("#name").value;
    let sinnum=document.querySelector("#number").value;
    let sinemail=document.querySelector("#email").value;
    let sinpass=document.querySelector("#password").value;
    let sincpass=document.querySelector("#cpassword").value;

    let errname= document.querySelector("#errorname")
    let errnum= document.querySelector("#errornumber")
    let erremail= document.querySelector("#erroremail")
    let errpass= document.querySelector("#errorpass")
    let errcpass= document.querySelector("#errorcpass")


    if (sinname ==""){
        errname.innerHTML="Pls enter ur name"
        return false;

    }
    else if(sinname===""){
        errname="pls enter text only"
        return false;
    }
    
    else if(isNaN(sinnum)){
        errnum.innerHTML="Pls enter number only"
        return false;
    }
    else if(!sinnum.length==10){
        errnum="pls enter 10 digit number"
        return false;
    }
   else if (!sinemail.includes([/@/]) && !sinemail(".com")){
    erremail.innerHTML="pls check ur email"
    return false;
   }
   else if(!sinpassinpass.includes([/!@#$%^&*/])
        && !pass.includes([/1234567890/])
        && !pass.includes([/a-z/])
        && !pass.includes([/A-Z/])){
            errpass.innerHTML="pls enter a valid pass comb"
            return false;
        }
    else if(!sincpass==sinpass){
        errcpass="pass do not match"
    }
    localStorage.setItem("Name",sinname)
    localStorage.setItem("mobile number",sinnum)
    localStorage.setItem("email",sinemail)
    localStorage.setItem("password",pass)
    localStorage.setItem("cpassword",cpass)

    
    location.href="login.html"
    return false;
    
    
}