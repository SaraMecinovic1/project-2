all = [];

document.getElementById("myBtn").addEventListener("click", function () {
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  

  login = {
    email: email,
    password: password,
    
  };

  if (email == "") {
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
    alert("Uspesna prijava")
  }
  all.push(login); //?
});

console.log(all);
