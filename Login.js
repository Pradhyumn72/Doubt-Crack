let login=()=>{
    let inpemail=document.querySelector("#email").value
    let inpass=document.querySelector("#password").value
    let email=localStorage.getItem("Email")
    let pass=localStorage.getItem("password")
    if(inpemail===email && inpass===pass){
        location.href="index.html"
        return false
    }
    else{
        alert("Wrong Credentials")
    }
}