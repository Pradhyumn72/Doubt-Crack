// let signup=()=>{
//     let sinname=document.querySelector("#name").value;
//     let sinnum=document.querySelector("#number").value;
//     let sinemail=document.querySelector("#email").value;
//     let sinpass=document.querySelector("#password").value;
//     let sincpass=document.querySelector("#cpassword").value;

//     let errname= document.querySelector("#errorname")
//     let errnum= document.querySelector("#errornumber")
//     let erremail= document.querySelector("#erroremail")
//     let errpass= document.querySelector("#errorpass")
//     let errcpass= document.querySelector("#errorcpass")


//     if (sinname ==""){
//         errname.innerHTML="Please enter your name"
//         return false;

//     }
//     else if(sinname===""){
//         errname.innerHTML="Please enter text only"
//         return false;
//     }
    
//     else if(isNaN(sinnum)){
//         errnum.innerHTML="Please enter number only"
//         return false;
//     }
//     else if((!sinnum.length == 10)){
//         errnum.innerHTML="Please enter 10 digit number"
//         return false;
//     }
//    else if ((!sinemail.includes([/@/])) && !(sinemail(".com"))){
//     erremail.innerHTML="Please check your email"
//     return false;
//    }
//    else if((!sinpass.includes([/!@#$%^&*/]))
//         && !pass.includes([/1234567890/])
//         && !pass.includes([/a-z/])
//         && !pass.includes([/A-Z/]))
//         {
//             errpass.innerHTML="Please enter a valid password combination"
//             return false;
//         }
//     else if(!(sincpass==sinpass)){
//         errcpass="pass do not match"
//     }
//     localStorage.setItem("Name",sinname)
//     localStorage.setItem("mobile number",sinnum)
//     localStorage.setItem("email",sinemail)
//     localStorage.setItem("password",pass)
//     localStorage.setItem("cpassword",cpass)

    
//     location.href="login.html"
//     return false;
    
    
// }
let signup = () => {
    let sinname = document.querySelector("#name").value.trim();
    let sinnum = document.querySelector("#number").value.trim();
    let sinemail = document.querySelector("#email").value.trim();
    let sinpass = document.querySelector("#password").value;
    let sincpass = document.querySelector("#cpassword").value;

    let errname = document.querySelector("#errorname");
    let errnum = document.querySelector("#errornumber");
    let erremail = document.querySelector("#erroremail");
    let errpass = document.querySelector("#errorpass");
    let errcpass = document.querySelector("#errorcpass");

    // Reset errors
    errname.innerHTML = "";
    errnum.innerHTML = "";
    erremail.innerHTML = "";
    errpass.innerHTML = "";
    errcpass.innerHTML = "";

    // Name validation
    if (sinname === "") {
        errname.innerHTML = "Please enter your name";
        return false;
    } else if (!/^[a-zA-Z\s]+$/.test(sinname)) {
        errname.innerHTML = "Name must contain only letters";
        return false;
    }

    // Number validation
    if (!/^\d{10}$/.test(sinnum)) {
        errnum.innerHTML = "Please enter a valid 10-digit number";
        return false;
    }

    // Email validation
    if (!/^\S+@\S+\.\S+$/.test(sinemail)) {
        erremail.innerHTML = "Please enter a valid email";
        return false;
    }

    // Password validation (at least 1 number, 1 special char, 1 uppercase, 1 lowercase, 8+ chars)
    let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passRegex.test(sinpass)) {
        errpass.innerHTML = "Password must be 8+ chars, include upper, lower, number & special char";
        return false;
    }

    // Confirm password
    if (sincpass !== sinpass) {
        errcpass.innerHTML = "Passwords do not match";
        return false;
    }

    // Store in localStorage
    localStorage.setItem("Name", sinname);
    localStorage.setItem("Mobile", sinnum);
    localStorage.setItem("Email", sinemail);
    localStorage.setItem("Password", sinpass);

    // Redirect
    window.location.href = "login.html";
    return false;
}
