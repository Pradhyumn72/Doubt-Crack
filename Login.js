let login=()=>{
    let inpemail=document.querySelector("#email").value
    let inpass=document.querySelector("#password").value

    console.log(inpemail);
    console.log(inpass);
    let email=localStorage.getItem("Email")
    let pass=localStorage.getItem("Password")
    if(inpemail===email && inpass===pass){
        location.href="index.html"
        return false
    }
    else{
        alert("Wrong Credentials")
    }
}