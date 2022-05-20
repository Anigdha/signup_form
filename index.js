function verifyPassword() {
    var pw = document.getElementById("pswd1").value;

    //check empty password field  
    if (pw == "") {
        alert("**Fill the password please!");
        return false;
    }

    //minimum password length validation  
    if (pw.length < 8) {
        alert("**Password length must be atleast 8 characters");
        return false;
    }

    //maximum length of password validation  
    if (pw.length > 15) {
        alert("**Password length must not exceed 15 characters");
        return false;
    } else {
        alert("Password is correct");
    }
}

function matchPassword() {  
    var pw1 = document.getElementById("pswd1").value;  
    var pw2 = document.getElementById("pswd2").value;  
    if(pw1 != pw2)  
    {   
      alert("Passwords did not match");  
    } else {  
      alert("Password created successfully");  
    }  
  }  