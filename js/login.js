function verifica(){
    var autorizzato;
    //prendo i valori dei campi
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    //controllo che siano corretti
    var userFromLocalStorage = JSON.parse(localStorage.getItem(username));
    if(!userFromLocalStorage){
      alert("Le credenziali inserite non sono valide.");
      autorizzato = false;
      return autorizzato;
    }else{ 
      if (userFromLocalStorage.password !== password){
        alert("Le credenziali inserite non sono valide.");
        autorizzato = false;
        return autorizzato;
      }
      //avviso l'utente
      localStorage.setItem(utenteAttivo, JSON.stringify(user.username));
      alert(JSON.stringify(user.username));
      alert ("Autorizzato");
    }
    //ritorno il risultato
    return autorizzato;
  }

function mostraPW() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}

function mostraPWReg() {
  var x = document.getElementById("passwordRegis");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function registrati() {
  document.getElementById("login").style.display="none";
  document.getElementById("registrati").style.display="block";
}

function passaLogin() {
  document.getElementById("registrati").style.display="none";
  document.getElementById("login").style.display="block";
}

function registra() {
  
  var email = document.getElementById("mailRegis").value;
  var username = document.getElementById("usernameRegis").value;
  var password = document.getElementById("passwordRegis").value;
  var eroe = document.getElementById("eroePreferito").value;

  var user = {
  email: email,
  username: username,
  password: password,
  eroe: eroe,
  };

localStorage.setItem(utenteAttivo, JSON.stringify(user.username));
localStorage.setItem(username, JSON.stringify(user));
}

function passaUtente(username) {
  localStorage.setItem(activeUser, username);
}