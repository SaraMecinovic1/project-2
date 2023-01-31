all = [];

document.getElementById("myBtn").addEventListener("click", function () {
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  passwordC = document.getElementById("passwordC").value;
  username = document.getElementById("username").value;

  sign = {
username: username,
    email: email,
    password: password,
    passwordC: passwordC,
  };

  if (username == "") {
    alert("Niste popunili sva polja");
    false;
  }if(email == ""){
    alert("Niste popunili sva polja");
    false;
  }if(passwordC == ""){
    alert("Niste popunili sva polja");
    false;
  }
   else if (password == "") {
    alert("Niste popunili sva polja");
    false;
  } 
   else {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    passwordC = document.getElementById("passwordC").value = "";
    username = document.getElementById("username").value="";
  
    alert("Uspesna prijava")
  }
  all.push(sign); //?
});

console.log(all);
