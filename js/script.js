var data = {
  "venditori" : [
    {   "nomenegozio": "Euronics",
        "telefono": "3336098348",
        "partitaiva": "0234532",
        "email": "euronics@gmail.com",
        "password": "xx1",
        "portafogli":   {   "saldo": 0  },
        "type": "venditore",
        "film_vendita": [   {"id": "399566","prezzoVendita": 1, "prezzoNoleggio": 0.5, "vendite": ["2021-07-10T13:43:12.297Z", "2021-08-10T13:43:12.297Z", "2021-09-10T13:43:12.297Z"], "noleggi": ["2021-08-10T13:43:12.297Z", "2021-09-10T13:43:12.297Z"]},
                            {"id": "791373","prezzoVendita": 2, "prezzoNoleggio": 1, "vendite": ["2020-07-10T13:43:12.297Z", "2020-08-10T13:43:12.297Z", "2020-09-10T13:43:12.297Z"], "noleggi": ["2021-07-10T13:43:12.297Z", "2021-08-10T13:43:12.297Z", "2021-09-10T13:43:12.297Z"]},
                            {"id": "527774","prezzoVendita": 1, "prezzoNoleggio": 0.5, "vendite": ["2020-07-10T13:43:12.297Z", "2020-08-10T13:43:12.297Z"], "noleggi": ["2021-07-10T13:43:12.297Z", "2021-08-10T13:43:12.297Z", "2021-09-10T13:43:12.297Z"]},
                            {"id": "379686","prezzoVendita": 2, "prezzoNoleggio": 0.5, "vendite": [], "noleggi": []},
                            {"id": "385128","prezzoVendita": 1, "prezzoNoleggio": 0.5, "vendite": [], "noleggi": []},
                            {"id": "588228","prezzoVendita": 2, "prezzoNoleggio": 0.5, "vendite": [], "noleggi": []}
                        ],
        "recensioni": [ {"voto": 5, "titolo": "Ottimo", "contenuto": "film arrivato subito in alta qualità", "autore": "giacomorossi@gmail.com", "data": "2021-08-10T13:43:12.297Z"},
                        {"voto": 4, "titolo": "Buono", "contenuto": "film arrivato subito in buona qualità", "autore": "giacomorossi@gmail.com", "data": "2021-09-10T13:43:12.297Z"},
                      ]
    },

    {   "nomenegozio": "Blockbuster",
        "telefono": "345672890",
        "partitaiva": "5532090",
        "email": "x2@gmail.com",
        "password": "xx2",
        "portafogli":   {   "saldo": 0  },
        "type": "venditore",
        "film_vendita": [   {"id": "399566","prezzoVendita": 10, "prezzoNoleggio": 0.5, "vendite": ["2021-07-10T13:43:12.297Z", "2021-08-10T13:43:12.297Z", "2021-09-10T13:43:12.297Z"], "noleggi": ["2021-07-10T13:43:12.297Z", "2021-08-10T13:43:12.297Z", "2021-09-10T13:43:12.297Z"]},
                            {"id": "791373","prezzoVendita": 20, "prezzoNoleggio": 1, "vendite": ["2020-07-10T13:43:12.297Z", "2020-08-10T13:43:12.297Z", "2020-09-10T13:43:12.297Z"], "noleggi": ["2021-07-10T13:43:12.297Z", "2021-08-10T13:43:12.297Z", "2021-09-10T13:43:12.297Z"]},
                            {"id": "527774","prezzoVendita": 30, "prezzoNoleggio": 0.5, "vendite": ["2020-07-10T13:43:12.297Z", "2020-08-10T13:43:12.297Z", "2020-09-10T13:43:12.297Z"], "noleggi": ["2021-07-10T13:43:12.297Z", "2021-08-10T13:43:12.297Z", "2021-09-10T13:43:12.297Z"]}
                        ],
        "recensioni": [ {"voto": 1, "titolo": "pessimo", "contenuto": "brutto", "autore": "giacomorossi@gmail.com", "data": "2021-08-02T13:43:12.297Z"},
                        {"voto": 1, "titolo": "no", "contenuto": "non ok", "autore": "giacomorossi@gmail.com", "data": "2020-09-04T13:43:12.297Z"},
                      ]
    },
    ],
  "clienti" : [
    {   "nome": "Giacomo",
        "cognome":"Rossi",
        "data":"1990-11-04",
        "telefono":"3465889485",
        "via":"viale dei santi",
        "numcivico":"3",
        "citta":"milano",
        "provincia":"milano",
        "nazione":"italia",
        "email":"giacomorossi@gmail.com",
        "password":"1",
        "portafogli":  {   "metodo": "CartaDiCredito",
                            "saldo": 100
                        },
        "type": "cliente",
        "film_preferiti":   [   {"id": "10674"},
                                {"id":"10020"}
                            ],

        "generi_preferiti": [28],

        "film_acquistati":  [   {"id": "11224","data": "2021-09-10T13:43:12.297Z"},
                                {"id": "8587","data": "2021-09-10T13:43:12.297Z"}
                            ],

        "film_noleggiati": [    {"id": "420818","data": "2021-09-10T13:43:12.297Z"}, 
                                {"id": "566525","data": "2021-09-10T13:43:12.297Z"},
                                {"id": "155","data": "2021-09-13T15:45:42.721Z"}
                            ]
    },
    {   "nome": "Luca",
        "cognome":"Colombo",
        "data":"1995-07-03",
        "telefono":"3465889485",
        "via":"viale Eupropa",
        "numcivico":"3",
        "citta":"milano",
        "provincia":"milano",
        "nazione":"italia",
        "email":"lucacolombo@gmail.com",
        "password":"2",
        "portafogli":  {   "metodo": "CartaPrepagata",
                            "saldo": 100
                        },
        "type": "cliente",
        "film_preferiti":   [   {"id": "105"},
                                {"id":"77950"}
                            ],

        "generi_preferiti": [],

        "film_acquistati":  [],

        "film_noleggiati": []
    },
      
  ]
}

// TODO: non serve
var structData = {
    "venditoreold" : {"nomenegozio": "", "telefono": "", "partitaiva": "", "email": "", "password": "", "portafogli":   {"saldo": 0}, "type": "venditore", "film_vendita" : []},
    "clienteold" : {"nome": "", "cognome":"" ,"data":"", "telefono":"", "via":"","numcivico":"","citta":"","provincia":"","nazione":"","email":"","password":"","portafogli": {"metodo": "", "saldo": 0}, "type": "cliente"},
    "venditore" :   {
                        "nomenegozio": "",
                        "telefono": "",
                        "partitaiva": "",
                        "email": "",
                        "password": "",
                        "portafogli":   { "saldo": 0 },
                        "type": "venditore",
                        "film_vendita": [],
                        "recensioni": []
                    },

    "cliente" :     {
                        "nome": "",
                        "cognome":"",
                        "data":"",
                        "telefono":"",
                        "via":"",
                        "numcivico":"",
                        "citta":"",
                        "provincia":"",
                        "nazione":"",
                        "email":"",
                        "password":"",
                        "portafogli":  { "metodo": "", "saldo": 0 },
                        "type": "cliente",
                        "film_preferiti":   [],
                        "generi_preferiti": [],
                        "film_acquistati":  [],
                        "film_noleggiati": []
                    },
}

var key = "?api_key=2bb75004dddb3cae50be3c30cc0f551d";

/*
function checkparameters_registrazione() {
  var select = document.getElementById("typeRegistrazione").value;
  //console.log(select);
  var form = document.getElementById("formRegistrazione");
  tuttok = true;
  if ( select == "Venditore"){
    i = 0;
    var password_to_check = "";
    while (form.children[i].nodeName == "DIV") {
       
        campo = form.children[i];
        valoreCampoVenditori = campo.children[1].value;
       // console.log(valoreCampoVenditori);
        nomeCampoVenditori = campo.children[1].name;
        
        if (nomeCampoVenditori == "password") {
            password_to_check = valoreCampoVenditori;
        }
        if (nomeCampoVenditori == "conferma_password") {
          //controllo che siano uguali 
            if (conferma_la_password(password_to_check,campo.children[1]) == false) {
                tuttok = false;
            }
        } else if (controllo(campo.children[1])) {
            // se passa il controllo lo inserisco in structData
            // struttura ausiliaria per fare push dei nuovi registrati
            structData.venditore[nomeCampoVenditori] = valoreCampoVenditori;
        } else {
            tuttok = false;
        }
        i++ 
    }
  } else {
      i=0 ;
      var password_to_check = "";
      while ( form.children[i].nodeName=="DIV") {
        campo = form.children[i];
        valoreCampoCliente = campo.children[1].value;
        nomeCampoCliente = campo.children[1].name;
        //console.log(campo);
        
        if (nomeCampoCliente == "password") {
            password_to_check = valoreCampoCliente;
        }

        // conferma passwrod 
        if (nomeCampoCliente == "conferma_password") {
            if (conferma_la_password(password_to_check,campo.children[1]) == false) {
                tuttok = false;
            }
        
        } else if (controllo(campo.children[1])) {
          // struttura ausiliaria per fare push dei nuovi registrati
          structData.cliente[nomeCampoCliente] = valoreCampoCliente;
        } else {
            tuttok = false;
        }
        i++
      }
      

  }
  if ( tuttok ){
      document.getElementById("submit_registrazione").disabled = false;
      
  } else {
     document.getElementById("submit_registrazione").disabled = true;
    
  }
  
}
*/
/*
function conferma_la_password(pass, campo){
    valoreCampo = campo.value; // valore
    nomeCampo = campo.name; 
    // rimuove il messaggio di errore
   
    if (campo.nextSibling != null) {
        campo.nextSibling.remove();
    }
    // controllo che password e conferma pass siano uguali 
    if (pass != valoreCampo) {
        campo.className = "form-control is-invalid"
        var err = document.createElement("div"); // error message 
        err.className = "invalid-feedback";
        err.innerHTML = "Le password non coincidono!";
        campo.parentNode.insertBefore(err, campo.nextSibling);
        return false;
    } else if ( valoreCampo == "" ) {
         
        
    } else {
        campo.className = "form-control is-valid"
        var err = document.createElement("div"); // error message 
        err.className = "valid-feedback";
        err.innerHTML = "Looks good!";
        campo.parentNode.insertBefore(err, campo.nextSibling);
        return true;
    }
}
*/

/*
function controllo(campo){
    //campo = oggetto
    valore = campo.value; // valore
    nome = campo.name; //nome, cognome

    // da controllare 

    var regex = "";
    var errore = "";

    switch ( nome ) {
        case "nome": 
            regex = /^([a-zA-Z\xE0\xE8\xE9\xF9\xF2\xEC\x27]\s?)+$/;
            errore =  "Il parametro deve contenere solo caratteri alfabetici"; 
            break;
        case "nomenegozio":
            regex = /[a-zA-Z1-9]+/;
            errore = "Il parametro non deve essere vuoto"; 
            break;
        case "cognome" : 
            regex = /^([a-zA-Z\xE0\xE8\xE9\xF9\xF2\xEC\x27]\s?)+$/;
            errore =  "Il parametro deve contenere solo caratteri alfabetici"; 
            break;
        case "via":
            regex = /^([a-zA-Z\xE0\xE8\xE9\xF9\xF2\xEC\x27]\s?)+$/;
            errore =  "Il parametro deve contenere solo caratteri alfabetici"; 
            break;
        case "provincia":
            regex = /^([a-zA-Z\xE0\xE8\xE9\xF9\xF2\xEC\x27]\s?)+$/;
            errore =  "Il parametro deve contenere solo caratteri alfabetici"; 
            break;
        case  "telefono":
            regex = /^[0-9]{10}$/;
            errore = "Il parametro deve essere specificato come nell'esempio : 346xxxxxxx"
            break;
        case  "data":
            regex = /^([0-9]{4}\-[0-9]{2}\-[0-9]{2})$/;
            errore = "Il parametro deve essere specificato come nell'esempio : "
            break;
        case  "numcivico":
            regex = /^[0-9]+$/;
            errore = "Il parametro deve contenere solo caratteri numerici"
            break;
        case "citta" :
            regex = /^([a-zA-Z\xE0\xE8\xE9\xF9\xF2\xEC\x27]\s?)+$/;
            errore =  "Il parametro deve contenere solo caratteri alfabetici"; 
            break;
        case "nazione" : 
        regex = /^([a-zA-Z\xE0\xE8\xE9\xF9\xF2\xEC\x27]\s?)+$/;
            errore = "Il parametro deve contenere solo caratteri alfabetici"
            break;
        //nomenegozio -> va bene qualsiasi cosa
        case "partitaiva":
            regex = /^[0-9]{11}$/ ; 
            errore = "Il parametro deve essere specificato come nell'esempio seguente : 27563419860 "
            break;
        case"email":
            regex = /^[\w\-\.]*[\w\.]\@[\w\.]*[\w\-\.]+[\w\-]+[\w]\.+[\w]+[\w $]/ ; 
            errore = "Il parametro deve essere specificato come nell'esempio seguente : mariorossi23@gmail.com "
            break;
        case"password" :
            regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ ; 
            errore = "La password deve contenere almeno 8 caratteri di cui almeno uno maiuscolo , uno minuscolo , uno numerico e un carattere speciale"
            break;
        default:
            break;
    }
    // rimuove il messaggio di errore
    if (campo.nextSibling != null) {
        campo.nextSibling.remove();
    }
   // console.log(valore.match(regex));
    if (valore.match(regex)) {
        
        campo.className = "form-control is-valid"
        var err = document.createElement("div"); // error message 
        err.className = "valid-feedback";
        err.innerHTML = "Looks good!";
        campo.parentNode.insertBefore(err, campo.nextSibling);
        return true;
    } else if ( valore == "" ) {
        campo.className = "form-control";
    }  else {
        campo.className = "form-control is-invalid";
        //<span class="badge bg-danger">Danger</span>
        var err = document.createElement("div"); // error message 
        err.className = "invalid-feedback";
        err.innerHTML = errore;
        campo.parentNode.insertBefore(err, campo.nextSibling);
        return false;
    }
}
*/

// x API 
function get(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true); 
    xhr.responseType = 'json';
  
    xhr.onload = function() { // cosa fa quando ottengo la risposta
      if (xhr.status<200 || xhr.status>299) {
          return window.location.assign('./404.html');
      }  
      callback(xhr.response);
    }; // fine cosa fa quando ottengo la risposta
  
    xhr.send(); 
}

function get_from_url(key){ // key è il prametro che volgio ottenere , nel nostro caso è id per avere id del film
    var indice = window.location.href.indexOf(key);
    if (indice == -1) {
        return false;
    }
   //?id=432432432?color=red
   var sottostringa = window.location.href.slice(indice+key.length,window.location.href.length);
   var id = "";
   for (i = 0 ; i <= sottostringa.length; i++) {
       if (i==sottostringa.length || sottostringa[i]=="&") {
           break;
       } else {
        id += sottostringa[i];
       }
   }
   //console.log(id);
   return id ;
}

// passo un film , mi crea una card per quel film 
function createCard(film){

    card = document.createElement("div");
            card.className = "card";
            card.style = "width: 18rem; margin:2em; display:inline-block; background-color: rgb(0,0,0)";

            immagine_link = document.createElement("a");
            immagine_link.setAttribute("href","./film_description.html?id="+ film.id);
            
            image = document.createElement("img");
            image.src="https://www.themoviedb.org/t/p/original"+ film.poster_path;
            image.className = "card-img-top";
            image.style="box-shadow: 8px 8px 15px rgba(120,120,120,0.9);"

            immagine_link.appendChild(image);
          
            card.appendChild(immagine_link);
            
            div_card = document.createElement("div");
            div_card.className="card-body";
            div_card.style="heigth:200px;!important; width: "
        
            title = document.createElement("h7");
            title.className = "card-title";
            title.innerHTML = "<br>"+film.title;
            title.style="color:white;max-width:20px;"
            div_card.appendChild(title);

            card.appendChild(div_card);

            return card;
}

function AcquistaFilm(emailCliente, emailVenditore, idFilm, price) {

    /*
    TODO:
        In questo scenario, gli utenti registrati (min 2) possono
        fare login al sito, selezionare un film di interesse, aggiungerlo al carrello
        e concludere il pagamento dei film nel carrello.
    */

    active_user = JSON.parse(window.localStorage.getItem("active_user"));
    clienti = JSON.parse(window.localStorage.getItem("clienti"));
    venditori = JSON.parse(window.localStorage.getItem("venditori"));

    if (active_user.portafogli.saldo < price) {
        alert("non hai abbastanza soldi per compare questo film")
        return;
    }

    if (active_user.film_acquistati.find(element => element.id == idFilm) != undefined) {
        alert("film già acquistato")
        return;
    }

    active_user.portafogli.saldo -= price;
//    active_user.film_acquistati.push({"id": idFilm, "data": (new Date().getDate()+"-"+(new Date().getMonth()+1)+"-"+new Date().getFullYear())})
    active_user.film_acquistati.push({"id": idFilm, "data": new Date()})

    index = clienti.findIndex(cliente => cliente.email === emailCliente);
    clienti[index] = active_user;

    index = venditori.findIndex(venditore => venditore.email === emailVenditore);
    venditori[index].portafogli.saldo += price;
    
    indexFilm = venditori[index].film_vendita.findIndex(film => film.id === idFilm);
    venditori[index].film_vendita[indexFilm].vendite.push(new Date())


    window.localStorage.setItem("active_user", JSON.stringify(active_user));
    window.localStorage.setItem("clienti", JSON.stringify(clienti));
    window.localStorage.setItem("venditori", JSON.stringify(venditori));

    alert("film acquistato correttamente")

    window.location.reload()

}

function NoleggiaFilm(emailCliente, emailVenditore, idFilm, price) {

    // TODO: controllare se giusta e soprattutto i bottoni noleggia non richiamano lei ma acquista
    
    active_user = JSON.parse(window.localStorage.getItem("active_user"));
    clienti = JSON.parse(window.localStorage.getItem("clienti"));
    venditori = JSON.parse(window.localStorage.getItem("venditori"));

    if (active_user.portafogli.saldo < price) {
        alert("non hai abbastanza soldi per compare questo film")
        return;
    }

    attivi = active_user.film_noleggiati.filter(film => ( ((Date.now()-new Date(film.data).getTime() ) / 1000 ) / 3600) <= 72)

    if (attivi.find(element => element.id == idFilm) != undefined) {
        alert("film con noleggio ancora attivo")
        return;
    } else if (active_user.film_acquistati.find(element => element.id == idFilm) != undefined) {
        alert("film già acquistato")
        return;
    }

    active_user.portafogli.saldo -= price;
    active_user.film_noleggiati.push({"id": idFilm, "data": new Date()})

    index = clienti.findIndex(cliente => cliente.email === emailCliente);
    clienti[index] = active_user;

    index = venditori.findIndex(venditore => venditore.email === emailVenditore);
    venditori[index].portafogli.saldo += price;


    window.localStorage.setItem("active_user", JSON.stringify(active_user));
    window.localStorage.setItem("clienti", JSON.stringify(clienti));
    window.localStorage.setItem("venditori", JSON.stringify(venditori));

    window.location.reload()

}



function getActiveUser() {
    
    if ( !(window.localStorage.hasOwnProperty("active_user")) ) {
        return null;
    }

    active_user = window.localStorage.getItem("active_user")

    if (active_user == null) {
        return null;    
    }

    return JSON.parse(active_user);

}

function checkparameters_registrazione2(type) {
    var ListToCheck;

    if (type == "Cliente") {

        ListToCheck = [document.getElementById('Nome'), document.getElementById('Cognome'), document.getElementById('DataNascita'), document.getElementById('Telefono'), document.getElementById('Via'), document.getElementById('NumeroCivico'), document.getElementById('Citta'), document.getElementById('Provincia'), document.getElementById('Nazione'), document.getElementById('metodoPagamento'), document.getElementById('email'), document.getElementById('Password'), document.getElementById('ConfermaPassword')]
    
    } else if (type == "Venditore") {

        ListToCheck = [document.getElementById('NomeNegozio'), document.getElementById('Telefono'), document.getElementById('PartitaIva'), document.getElementById('email'), document.getElementById('Password'), document.getElementById('ConfermaPassword')]
    
    } else if (type == "ClienteAggiorna") {

        ListToCheck = [document.getElementById('Nome'), document.getElementById('Cognome'), document.getElementById('DataNascita'), document.getElementById('Telefono'), document.getElementById('Via'), document.getElementById('NumeroCivico'), document.getElementById('Citta'), document.getElementById('Provincia'), document.getElementById('Nazione'), document.getElementById('metodoPagamento')]
        if (document.getElementById("PWD").style.display != "none") {
            ListToCheck.push(document.getElementById('Password'), document.getElementById('ConfermaPassword'))
        }

    } else if (type == "VenditoreAggiorna") {

        ListToCheck = [document.getElementById('NomeNegozio'), document.getElementById('Telefono'), document.getElementById('PartitaIva')]
        if (document.getElementById("PWD").style.display != "none") {
            ListToCheck.push(document.getElementById('Password'), document.getElementById('ConfermaPassword'))
        }

    }

    tuttok = true;

    for (item of ListToCheck) {
        // rimuove il messaggio di errore
        if (item.nextSibling != null) {
            item.nextSibling.remove();
        }

        if (item.value == "" ) {
            item.className = "form-control"
            tuttok = false;
            continue;
        }

        var {msgError, ok} = controllo2(item.id, item.value);

        var err = document.createElement("div"); // error message
        
        if (ok) {
            item.className = "form-control is-valid";
            err.className = "valid-feedback";
        } else {
            item.className = "form-control is-invalid";
            err.className = "invalid-feedback";
            tuttok = false;
        }

        err.innerHTML = msgError;
        item.parentNode.insertBefore(err, item.nextSibling);   
    
    }

    if ( tuttok ){
        document.getElementById("submit_registrazione").disabled = false;
    } else {
       document.getElementById("submit_registrazione").disabled = true; 
    }

}

function controllo2(nome, value){

    //console.log(`controllo2: ${nome} ,  ${value}`);

    if (nome == "Nome" || nome == "Cognome" || nome == "DataNascita" || nome == "Telefono" || nome == "Via" || nome == "NumeroCivico" || nome == "Citta" || nome == "Provincia" || nome == "Nazione" || nome == "email" || nome == "Password" || nome == "NomeNegozio" || nome == "PartitaIva") {
        
        var {err, regex} = setRegex(nome);

        if (checkWithRegex(regex, value)) {
            return {msgError: "Looks good!", ok: true}
        } else {
            return {msgError: err, ok: false}
        }

    } else if (nome == "metodoPagamento") {

        if (checkmetodoPagamento(value)) {
            return {msgError: "Looks good!", ok: true}
        } else {
            return {msgError: "slezionare un metodo di pagamento", ok: false}
        }

    } else if (nome == "ConfermaPassword") {

        if (checkConfermaPassword(value, document.getElementById('Password').value)) {
            return {msgError: "Looks good!", ok: true}
        } else {
            return {msgError: "Le Password non coincidono", ok: false}
        }

    }

    

    function checkWithRegex(regex, value) {
        if (value.match(regex)) {
            return true;
        } else {
            return false;
        }
    }

    function checkmetodoPagamento(value) {
        if (value == "CartaDiCredito" || value == "CartaPrepagata") {
            return true;
        } else {
            return false;
        }
    }

    function checkConfermaPassword(value, otherPassword) {
        if (value == otherPassword) {
            return true;
        } else {
            return false;
        }
    }



    function setRegex(nome) {
        switch ( nome ) {
            case "Nome":
                return {err: "Il parametro deve contenere solo caratteri alfabetici", regex: /^([a-zA-Z\xE0\xE8\xE9\xF9\xF2\xEC\x27]\s?)+$/};
            case "NomeNegozio":
                return {err: "Il parametro non deve essere vuoto", regex: /[a-zA-Z1-9]+/};
            case "Cognome" :
                return {err: "Il parametro deve contenere solo caratteri alfabetici", regex: /^([a-zA-Z\xE0\xE8\xE9\xF9\xF2\xEC\x27]\s?)+$/};
            case "Via":
                return {err: "Il parametro deve contenere solo caratteri alfabetici", regex: /^([a-zA-Z\xE0\xE8\xE9\xF9\xF2\xEC\x27]\s?)+$/};
            case "Provincia":
                return {err: "Il parametro deve contenere solo caratteri alfabetici", regex: /^([a-zA-Z\xE0\xE8\xE9\xF9\xF2\xEC\x27]\s?)+$/};
            case "Telefono":
                return {err: "Il parametro deve essere specificato come nell'esempio : 346xxxxxxx (10 numeri)", regex: /^[0-9]{10}$/};
            case "DataNascita":
                return {err: "selezionare una data valida", regex: /^([0-9]{4}\-[0-9]{2}\-[0-9]{2})$/};
            case "NumeroCivico":
                return {err: "Il parametro deve contenere solo caratteri numerici", regex: /^[0-9]+$/};
            case "Citta" :
                return {err: "Il parametro deve contenere solo caratteri alfabetici", regex: /^([a-zA-Z\xE0\xE8\xE9\xF9\xF2\xEC\x27]\s?)+$/};
            case "Nazione" : 
                return {err: "Il parametro deve contenere solo caratteri alfabetici", regex: /^([a-zA-Z\xE0\xE8\xE9\xF9\xF2\xEC\x27]\s?)+$/};
            //nomenegozio -> va bene qualsiasi cosa
            case "PartitaIva":
                return {err: "Il parametro deve essere specificato come nell'esempio seguente : 27563419860 (11 numeri)", regex: /^[0-9]{11}$/};
            case "email":
                return {err: "Il parametro deve essere specificato come nell'esempio seguente : mariorossi23@gmail.com ", regex: /^[\w\-\.]*[\w\.]\@[\w\.]*[\w\-\.]+[\w\-]+[\w]\.+[\w]+[\w $]/}; 
            case "Password" :
                return {err: "La password deve contenere almeno 8 caratteri di cui almeno uno maiuscolo , uno minuscolo , uno numerico e un carattere speciale", regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/}; 
            default:
                return null;
        }
    }

}

// Accedi non si illumina
function setActiveNavbar() {

    navbarSupportedContent = document.getElementById('navbarSupportedContent');
    allLink = navbarSupportedContent.getElementsByClassName('nav-link');

    for (Link of allLink) {
        if ( (window.location.href).search(Link.href) != -1 ) {
            Link.className = 'nav-link active';
        } else {
            Link.className = 'nav-link';
        }
    }

    active_user = getActiveUser()
    if (active_user == null) {
        document.getElementById('LinkAccedi').href = "./signup.html";
    } else {
        document.getElementById('LinkAccedi').href = "#";

    }

}