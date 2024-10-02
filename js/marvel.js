async function getFromMarvel(url, query=""){
  var MD5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}
  var timestamp = Date.now();
  var publicApiKey = ""
  var privateApiKey = ""
  var parameters = `ts=${timestamp}&apikey=${publicApiKey}&hash=${MD5(timestamp+privateApiKey+publicApiKey)}&`

  const result = await fetch(`http://gateway.marvel.com/v1/${url}?${parameters}${query}`)
  .then(async response => await response.json())
  .catch(error => console.log('error', error));
  localStorage.setItem("datiProva", JSON.stringify(result));
  return result; 
}

function getRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function costruisciLista() {
  let result;
  if (localStorage.getItem("datiProva") == null) {
    await getFromMarvel('public/characters');
  }
    result = JSON.parse(localStorage.getItem("datiProva"));
    var list = document.getElementById("listaCarte");
    result.data.results.forEach((item) => {
    let divComplex = document.createElement("div");
    divComplex.setAttribute("class", "singoloEroe");
    divComplex.setAttribute("onclick", "chiamaModal(this.querySelector('.nomeEroe').textContent)");
        
    let divImg = document.createElement("img");
    divImg.setAttribute("class", "immagineEroe")
                  
    let divText = document.createElement("div");
    divText.setAttribute("class", "nomeEroe");
    divImg.src = (item.thumbnail.path + "/portrait_fantastic." + item.thumbnail.extension);
    divText.innerText = item.name;
    divComplex.appendChild(divImg);
    divComplex.appendChild(divText);
        
    list.appendChild(divComplex);
  })
};

function chiamaModal(nomeEroe) {
  var modal = document.getElementById("modal-content");
  let cardMax = document.createElement("img");
    cardMax.setAttribute("id", "imgContainer");
  let cardTextContainer = document.createElement("div")
    cardTextContainer.setAttribute("id", "elencoTesto")
  // Imposto la descrizione
    let DescriptionCollapsible = document.createElement("button");
    DescriptionCollapsible.setAttribute
    DescriptionCollapsible.textContent = "Descrizione";
    DescriptionCollapsible.setAttribute("onclick", "mostraTesto('descrizione')");
    let cardDescription = document.createElement("div");
      cardDescription.setAttribute("id", "descrizione");
      cardDescription.setAttribute("class", "textContainer");
  // Imposto le serie
  let SeriesCollapsible = document.createElement("button");
    SeriesCollapsible.textContent = "Serie";
    SeriesCollapsible.setAttribute("onclick", "mostraTesto('serie')");
    let cardSeries = document.createElement("div");
      cardSeries.setAttribute("id", "serie");
      cardSeries.setAttribute("class", "textContainer");
  // Imposto gli eventi
  let EventsCollapsible = document.createElement("button");
    EventsCollapsible.textContent = "Events";
    EventsCollapsible.setAttribute("onclick", "mostraTesto('events')");
    let cardEvents = document.createElement("div");
      cardEvents.setAttribute("id", "events");
      cardEvents.setAttribute("class", "textContainer");
  // Imposto i comics
  let ComicsCollapsible = document.createElement("button");
    ComicsCollapsible.textContent = "Comics";
    ComicsCollapsible.setAttribute("onclick", "mostraTesto('comics')");
    let cardComics = document.createElement("div");
      cardComics.setAttribute("id", "comics");
      cardComics.setAttribute("class", "textContainer");
  //Seleziono le informazioni che mi servono dalla API e le inserisco negli elementi che ho preparato
    result = JSON.parse(localStorage.getItem("datiProva"));
    let item = getInfoEroe(result, nomeEroe);
      cardMax.src = (item.thumbnail.path + "/portrait_uncanny." + item.thumbnail.extension);
      if (item.description === "") {
        cardDescription.textContent = "Nessuna informazione"
      } else {
        cardDescription.textContent = (item.description);
      }
      cardComics.textContent = mostraLista(item.comics);
      cardSeries.textContent = mostraLista(item.series);
      cardEvents.textContent = mostraLista(item.events);

    //Append di ogni textbox al suo collapsible
    DescriptionCollapsible.appendChild(cardDescription);
    SeriesCollapsible.appendChild(cardSeries);
    EventsCollapsible.appendChild(cardEvents);
    ComicsCollapsible.appendChild(cardComics);
    //Append dei collapsible al container
    cardTextContainer.appendChild(DescriptionCollapsible);
    cardTextContainer.appendChild(SeriesCollapsible);
    cardTextContainer.appendChild(EventsCollapsible);
    cardTextContainer.appendChild(ComicsCollapsible);
    //Append al modale dei due figli di primo livello
    modal.appendChild(cardMax);
    modal.appendChild(cardTextContainer);
    //Rendo visibile il modale
    var modalContainer = document.getElementById("modal");
    modalContainer.style.display="block";
    };

function getInfoEroe(result, nomeEroe) {
  let res = "";
  result.data.results.forEach((item) => {
    if (item.name === nomeEroe) {
      res = item;
    };
  })
  return res;
};

// Funzione per estrarre i dati dall'Object e inserirli come stringhe nei campi loro dedicati
function mostraLista(result) {
  let res = "";
  result.items.forEach((item) => {
      res += item.name + ", ";
    });
    if (res === "") {
      res = "Nessuna informazione"
    }
    return res;
};

// Funzione per mostrare il testo nei bottoni
function mostraTesto(idButton) {
  var parag = document.getElementById(idButton);
  parag.style.display="block";
}

// Funzione per ripulire il DOM dal modale aperto
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    var modalIntero = document.getElementById("modal-content");
    while(modalIntero.firstChild)
      modalIntero.removeChild(modalIntero.firstChild);
  }
}

// Funzione per mostrare e mantenere aggiornati i crediti
function mostraCrediti() {

  if (localStorage.getItem("datiProva") == null) {
    
  }
}

// Funzione per controllare se c'è un utente attivo
function checkActiveUser() {
  console.log("Fin qui arrivo");
  if (sessionStorage.getItem("ActiveUser") === null) {
    alert("Effettua il login per accedere al tuo Album!");
    window.location.href = "http://localhost/awc-marvel/html/login.html";
  }
  console.log("Anche fin qui");
}

window.onload = checkActiveUser();