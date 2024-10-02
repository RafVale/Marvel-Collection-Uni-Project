async function loadNavbar(){
    await fetch('../html/navbar.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('navbar').innerHTML = text);
  }
  // Funziona solo se ho un back-end
  