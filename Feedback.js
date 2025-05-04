let val = () => {
    let inpname = document.querySelector("#name").value.trim();
    let inpnumber = document.querySelector("#number").value.trim();
    let inpemail = document.querySelector("#email").value.trim();
    let inppassword = document.querySelector("#password").value.trim();
    let inpcpass = document.querySelector("#con-password").value.trim();

    let errname = document.querySelector("#errname");
    let errnumber = document.querySelector("#errnumber");
    let erremail = document.querySelector("#erremail");
    let errpass = document.querySelector("#errpass");
    let errlogin = document.querySelector("#errlogin");

    // Clear previous errors
    errname.innerHTML = "";
    errnumber.innerHTML = "";
    erremail.innerHTML = "";
    errpass.innerHTML = "";
    errlogin.innerHTML = "";

    if (inpname === "") {
      errname.innerHTML = "Please enter your name";
      return false;
    } else if (inpnumber === "") {
      errnumber.innerHTML = "Please enter your number";
      return false;
    } else if (isNaN(inpnumber)) {
      errnumber.innerHTML = "Number must be numeric";
      return false;
    } else if (inpnumber.length !== 10) {
      errnumber.innerHTML = "Please enter a 10-digit number";
      return false;
    } else if (!inpemail.includes("@") || !inpemail.includes(".com")) {
      erremail.innerHTML = "Please enter a valid email";
      return false;
    } else if (inppassword === "") {
      errpass.innerHTML = "Please enter ur pass";
      return false;
    } else if (inppassword !== inpcpass) {
      errlogin.innerHTML = "Pass do not match";
      let inpcpass = document.querySelector("#con-password").value=""; // makes the confirm pass inout field empty in case of pass mismatch
      document.querySelector("#con-password").focus();//brings the cursor to confirm password tab

      return false;
    }
    else if (!(inppassword.match( [/1234567890/]))  // for matching if the password has the given content or not
               && !(inppassword.match([/!@#$%^&*/]))
               && !(inppassword.match([/A-Z/]))
               && !(inppassword.match([/a-z/]))
               
  ){
      errpass.innerHTML="pls enter strong pass";
      return false;
  }
 
}    