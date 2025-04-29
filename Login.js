let login=()=>{
    let inpemail=document.querySelector("#email").value
    let inpass=document.querySelector("#pass").value
    let email=localStorage.getItem("Email",inpemail)
    let pass=localStorage.getItem("pass",inpass)
    if(inpemail==email && inpass==pass){
        location.href="index.html"
        return false
    }
    else{
        alert("wrong credentials")
    }
}