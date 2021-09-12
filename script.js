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
        "recensioni": [ {"voto": 5, "titolo": "ottimo", "contenuto": "film arrivato subito in alta qualità", "autore": "giacomorossi@gmail.com", "data": "2021-08-10T13:43:12.297Z"},
                        {"voto": 4, "titolo": "ottimo", "contenuto": "film arrivato subito in alta qualità", "autore": "giacomorossi@gmail.com", "data": "2021-09-10T13:43:12.297Z"},
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
                            {"id": "527774","prezzoVendita": 30, "prezzoNoleggio": 0.5, "vendite": ["2020-07-10T13:43:12.297Z", "2020-08-10T13:43:12.297Z", "2020-09-10T13:43:12.297Z"], "noleggi": ["2021-07-10T13:43:12.297Z", "2021-08-10T13:43:12.297Z", "2021-09-10T13:43:12.297Z"]},
                            {"id": "379686","prezzoVendita": 40, "prezzoNoleggio": 0.5, "vendite": [], "noleggi": []},
                            {"id": "385128","prezzoVendita": 50, "prezzoNoleggio": 0.5, "vendite": [], "noleggi": []},
                            {"id": "588228","prezzoVendita": 60, "prezzoNoleggio": 0.5, "vendite": [], "noleggi": []}
                        ],
        "recensioni": [ {"voto": 1, "titolo": "pessimo", "contenuto": "brutto", "autore": "giacomorossi@gmail.com", "data": "2021-08-02T13:43:12.297Z"},
                        {"voto": 1, "titolo": "no", "contenuto": "non ok", "autore": "giacomorossi@gmail.com", "data": "2020-09-04T13:43:12.297Z"},
                      ]
    },
    ],
  "clienti" : [
    {   "nome": "Giacomo",
        "cognome":"Rossi",
        "data":"1996-10-04",
        "telefono":"3465889485",
        "via":"viale dei santi",
        "numcivico":"3",
        "citta":"milano",
        "provincia":"milano",
        "nazione":"italia",
        "email":"giacomorossi@gmail.com",
        "password":"1",
        "portafogli":  {   "metodo": "carta di credito",
                            "saldo": 100
                        },
        "type": "cliente",
        "film_preferiti":   [   {"id": "10674"},
                                {"id":"10020"}
                            ],

        "generi_preferiti": [],

        "film_acquistati":  [   {"id": "11224","data": "2021-09-10T13:43:12.297Z"},
                                {"id": "8587","data": "2021-09-10T13:43:12.297Z"}
                            ],

        "film_noleggiati": [    {"id": "420818","data": "2021-09-10T13:43:12.297Z"}, 
                                {"id": "566525","data": "2021-09-10T13:43:12.297Z"},
                                {"id": "155","data": "2020-09-10T13:43:12.297Z"}
                            ]
    },
  ]
}

var structData = {
    "venditore" : {"nomenegozio": "", "telefono": "", "partitaiva": "", "email": "", "password": "", "portafogli":   {"saldo": 0}, "type": "venditore", "film_vendita" : []},
    "cliente" : {"nome": "", "cognome":"" ,"data":"", "telefono":"", "via":"","numcivico":"","citta":"","provincia":"","nazione":"","email":"","password":"","portafogli": {"metodo": "", "saldo": 0}, "type": "cliente"},
}

var key = "?api_key=2bb75004dddb3cae50be3c30cc0f551d";

function checkparameters_registrazione() {
  var select = document.getElementById("typeRegistrazione").value;
  //console.log(select);
  var form = document.getElementById("formRegistrazione");
  tuttok = true;
  if ( select == "Venditore"){
    i = 0;
    var password_to_check = "";
    while (form.children[i].nodeName =="DIV") {
       
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

function registrazione() {
    
  var select = document.getElementById("typeRegistrazione").value;
  if ( select == "Venditore") {
    venditori = window.localStorage.getItem("venditori");
   // console.log(venditori);
    venditori = JSON.parse(venditori);
   //aggiungo al local storage la lista con il nuovo contatto 
    venditori.push(structData.venditore);
   // console.log(structData.venditore);
    window.localStorage.setItem("venditori", JSON.stringify(venditori));
    window.localStorage.setItem("active_user",JSON.stringify(structData.venditore));
  } else {
    clienti = window.localStorage.getItem("clienti");
    clienti = JSON.parse(clienti);
    clienti.push(structData.cliente);
    window.localStorage.setItem("clienti", JSON.stringify(clienti));
    window.localStorage.setItem("active_user",JSON.stringify(structData.cliente));
  }  

}


function init() {
    if (window.localStorage.hasOwnProperty("venditori") && window.localStorage.hasOwnProperty("clienti")) {
        return
    } else {
        window.localStorage.setItem("venditori", JSON.stringify(data.venditori));
        window.localStorage.setItem("clienti", JSON.stringify(data.clienti));
    }
}

function login() {
    clienti = JSON.parse(window.localStorage.getItem("clienti"));
    venditori = JSON.parse(window.localStorage.getItem("venditori"));

   // console.log(venditori);
    email = document.getElementById('login_email').value
    //console.log(email);
    password = document.getElementById('login_password').value
    for (var i = 0; i < clienti.length; i++) {
        if (email == clienti[i].email && password == clienti[i].password ) {
            //login corretto
            window.localStorage.setItem("active_user", JSON.stringify(clienti[i]));
           // alert('login corretto');
            btn = document.getElementById('submit');
            console.log(btn);
           // btn.setAttribute=("href",'./paginaPersonale.html');
            //window.location.href='./paginaPersonale.html';
            return;
        }
    }
    for (var i = 0; i < venditori.length; i++) {
        if (email == venditori[i].email && password == venditori[i].password ) {
            //login corretto
           // alert("login corretto");
            window.localStorage.setItem("active_user", JSON.stringify(venditori[i]));
           // document.getElementById.
            return;
        }
    }

  //  alert("non corretto");
}
// form registrazione
function create_form() {
  var type = document.getElementById('typeRegistrazione').value;
  var form = document.getElementById('formRegistrazione');
  //form.setAttribute("action", "./paginaPersonale.html");

  //rimuovo la scelta nulla nella select del form di registrazione 
  if (document.getElementById("typeRegistrazione").children[0].value == "null") { // select , first child = option 
      document.getElementById("typeRegistrazione").children[0].remove();
  }

  //rimuovo tutti i figli del form
  while (form.firstChild) { // finchè ha un primo figlio
    form.removeChild(form.firstChild);
  }

  var array = []; // var = visibile localmente

  if ( type == "Cliente" ) {
      form.style='background-color:rgba(213, 203, 203, 0.8);padding:3em;width:600px;margin-bottom:3em;border-radius:1.5em;color:black;';
      nome = document.createElement("input");
      nome.setAttribute("type","text");
      array.push(createFormElement(nome,"Nome", "nome"));

      // campo cognome
      cognome = document.createElement("input");
      cognome.setAttribute("type","text");
      array.push(createFormElement(cognome,"Cognome", "cognome"));
      // campo data
      data = document.createElement("input");
      data.setAttribute("type","date");
      array.push(createFormElement(data,"Data di nascita", "data"));
      
      
      //campo telefono
      telefono = document.createElement("input");
      telefono.setAttribute("type","text");
      array.push(createFormElement(telefono,"Telefono", "telefono"));
      
      // campo via
      via = document.createElement("input");
      via.setAttribute("type","text");
      array.push(createFormElement(via,"Via","via"));
      // campo numero civico
      numCivico = document.createElement("input");
      numCivico.setAttribute("type","text");
      array.push(createFormElement(numCivico, "Numero Civico","numcivico"));
      // campo città
      citta = document.createElement("input");
      citta.setAttribute("type","text");
      array.push(createFormElement(citta, "Città","citta"));
      // campo provincia
      provincia = document.createElement("input");
      provincia.setAttribute("type","text");
      array.push(createFormElement(provincia, "Provincia","provincia"));
      // campo nazione
      nazione = document.createElement("input");
      nazione.setAttribute("type","text");
      array.push(createFormElement(nazione, "Nazione","nazione"));
  } else {
      //console.log(type);
      //nome_negozio
      form.style='background-color:rgba(213, 203, 203, 0.8);padding:3em;width:600px;margin-bottom:3em;border-radius:1.5em;color:black;'
      nome_negozio = document.createElement("input");
      nome_negozio.setAttribute("type","text");
      array.push(createFormElement(nome_negozio, "Nome del Negozio","nomenegozio"));
      //numero_di_telefono
      numero_di_telefono = document.createElement("input");
      numero_di_telefono.setAttribute("type","text");
      array.push(createFormElement(numero_di_telefono, "Numero di Telefono","telefono"));
      //p_iva
      p_iva = document.createElement("input");
      p_iva.setAttribute("type","text");
      array.push(createFormElement(p_iva, "Partita Iva","partitaiva"));
  }

  //e-mail
  email = document.createElement("input");
  email.setAttribute("type","email");
  //email.required = true;
  array.push(createFormElement(email, "email", "email"));
  //password
  password = document.createElement("input");
  password.setAttribute("type","password");
  array.push(createFormElement(password, "Password", "password"));
  //conferma_password
  conferma_password = document.createElement("input");
  conferma_password.setAttribute("type","password");
  array.push(createFormElement(conferma_password, "Conferma password", "conferma_password"));


  //button submit
  var btn_submit_link = document.createElement("a");
  
  array.push(btn_submit_link);
  btn_submit = document.createElement("button");
  btn_submit.className = "btn btn-primary";
  btn_submit.setAttribute("type", "submit");
  btn_submit.setAttribute("id", "submit_registrazione");
  btn_submit.disabled = true;
  btn_submit.setAttribute("onclick", "registrazione()");
  btn_submit.innerHTML = "Invia";
  btn_submit_link.appendChild(btn_submit);
  //btn_submit_link.setAttribute("href", "./paginaPersonale.html");
  
 

  //Array di elementi da aggiungre al form
  for (var i = 0; i < array.length; i++) {
    form.appendChild(array[i]);
  }
 

}

function createFormElement(elemento, id, nameforjson) {
  /*Incapsulamento elemento in div per form*/
  // elemento = input incapsulato nel div 
  div1 = document.createElement("div");
  div1.className = "mb-3";
  elemento.setAttribute("id", id);
  elemento.setAttribute("name", nameforjson);
  elemento.setAttribute("onchange", "checkparameters_registrazione()");

  label = document.createElement("label");
  label.className = "form-label";
  label.setAttribute("for", id);
  label.innerHTML = '<b>'+id+":</b>";

  elemento.className = "form-control";
  div1.appendChild(label);
  div1.appendChild(elemento);
  return div1;
}

function scaricaDati(tipo) {
  return window.localStorage.getItem(tipo);
  
}


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

// x API 
function get(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true); 
    xhr.responseType = 'json';
  
    xhr.onload = function() { // cosa fa quando ottengo la risposta
      callback(xhr.response);
    }; // fine cosa fa quando ottengo la risposta
  
    xhr.send();
  
}

//gerazione pagina descrizione
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
function genera_descrizione() {
    id = get_from_url("id="); // id da usare nella richiesta per ottenere info del film da descrivere

    get("https://api.themoviedb.org/3/movie/"+id+"?api_key=2bb75004dddb3cae50be3c30cc0f551d", function(response){
        var film = response;
        console.log(film);
        //riga Descrizione
        var rigaDescrizione = document.getElementById("rigaDescrizione");
        rigaDescrizione.style= "background-image: url('https://www.themoviedb.org/t/p/original"+film.poster_path+"'); background-repeat: no-repeat; background-size: cover; background-position: center;";

        var col4 = rigaDescrizione.children[0].children[0];
        var col8 = rigaDescrizione.children[0].children[1];

        var img = col4.children[0];
        img.src = "https://www.themoviedb.org/t/p/original"+film.poster_path;

        var title = col8.children[0];
        title.innerHTML = film.original_title;

        var info = col8.children[1];
        for (i = 0; i < film.genres.length; i++) {
            if (i == film.genres.length-1) {
                info.innerHTML += film.genres[i].name+" ";
            } else {
                info.innerHTML += film.genres[i].name + ", ";
            }
            
        }
        info.innerHTML += "&bull; <b>"+film.runtime+"</b> min &bull; "+ film.status;
        
        var stelline = col8.children[2];
        var piene;
        if (film.vote_average <= 2) {
            piene = 1;
        } else if (film.vote_average <= 4) {
            piene = 2;
        } else if (film.vote_average <= 6) {
            piene = 3;
        }else if (film.vote_average <= 8) {
            piene = 4;
        } else {
            piene = 5
        }
        
        for (i = 0; i < piene; i++) {
            stelline.children[i].className = "fas fa-star";
        }
        for (i = piene; i < 5; i++) {
            stelline.children[i].className = "far fa-star";
        }

        get("https://api.themoviedb.org/3/movie/"+id+"/videos?api_key=2bb75004dddb3cae50be3c30cc0f551d", function(response){
            var link_trailer = col8.children[3];
            for ( i=0 ; i<response.results.length; i++){
                objVideo = response.results[i];
                if (objVideo.site == "YouTube" && objVideo.type == "Trailer") {
                    link_trailer.style.display = "";
                    document.getElementById("TrailerFilm").setAttribute("src", "https://www.youtube.com/embed/"+objVideo.key);
                    //document.getElementById("TrailerFilm").setAttribute("src", "https://www.youtube.com/embed/039nv45oth8");
                    break; 
                }
            }
        });

        
        var descrizione = document.createElement("p");
        descrizione.style = "font-size: medium; color: white; margin-top: 1em;";
        descrizione.innerHTML = "<b>Descrizione</b><br>"+film.overview;
        col8.appendChild(descrizione);
        
        var trailer = document.createElement("div");              
        col8.appendChild(trailer);

        var btn_trailer = document.createElement("button");
        btn_trailer.setAttribute("type", "button");



        if (window.localStorage.hasOwnProperty("active_user")) {
            active_user = JSON.parse(window.localStorage.getItem("active_user"));

            if (active_user.type == "venditore") {

                col8.innerHTML +=   '<div class="row" id="rigaPulsanti">'+
                '<div class="col-md-4" style="margin-top: 2em;">'+
                    '<button type="button" class="btn btn-outline-light"><i class="fas fa-shopping-cart"></i> Acquista</button>'+
                '</div>'+
                '<div class="col-md-4" style="margin-top: 2em;">'+
                    '<button type="button" class="btn btn-outline-light"><i class="fas fa-user-clock"></i> Noleggia</button>'+
                '</div>'


                if (active_user.film_vendita.find(searchFilminArray, id) == undefined ) {
                    col8.innerHTML += '<div class="col-md-4" style="margin-top: 2em;">'+
                '<button id="add_pref" type="button" class="btn btn-outline-light" onclick="aggiungiVendita()"><i class="far fa-thumbs-up"></i> Aggiungi ai venduti</button></div></div>'
                } else {
                    col8.innerHTML += '<div class="col-md-4" style="margin-top: 2em;">'+
                '<button id="add_pref" type="button" class="btn btn-outline-light"><i class="far fa-thumbs-up"></i> Già in vendita </button></div></div>'
                }

                

            } else {

                col8.innerHTML += `
                <div class="row" id="rigaPulsanti">
                    <div class="col-md" style="margin-top: 2em;">
                        <a target="_blank" rel="noopener noreferrer">
                            <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#NegoziModal"><i class="fas fa-shopping-cart"></i> Acquista</button>
                        </a>
                    </div>
                    <div class="col-md" style="margin-top: 2em;">
                        <button type="button" class="btn btn-outline-light"><i class="fas fa-user-clock"></i> Noleggia</button>
                    </div>
                `;


                if (active_user.film_preferiti.find(searchFilminArray, id) == undefined ) {
                    col8.innerHTML += '<div class="col-md" style="margin-top: 2em;">'+
                '<button id="add_pref" type="button" class="btn btn-outline-light" onclick="aggiungiPreferiti()"><i class="far fa-thumbs-up"></i> Aggiungi ai preferiti</button></div></div>'
                } else {
                    col8.innerHTML += '<div class="col-md" style="margin-top: 2em;">'+
                '<button id="add_pref" type="button" class="btn btn-outline-light"><i class="far fa-thumbs-up"></i> Già nei preferiti</button></div></div>'
                }

            }

        }

        for (venditore of JSON.parse(window.localStorage.getItem("venditori")) ) {

            index = venditore.film_vendita.findIndex(film => film.id === id);

            if (index != -1) {
                console.log(venditore.film_vendita[index])
                document.getElementById("elencoNegozi").innerHTML += `
                <div class="card text-white bg-dark" style="border: 1px, solid,  white;">
                    <div class="card-header">
                        ${venditore.nomenegozio}
                    </div>
                    <div class="card-body">
                        <p class="card-text">prezzo di vendita: ${venditore.film_vendita[index].prezzoVendita}</p>
                        <button class="btn btn-primary" onclick="AcquistaFilm(JSON.parse(window.localStorage.getItem('active_user')).email, '${venditore.email}', '${id}', ${venditore.film_vendita[index].prezzoVendita})">Compra</button>
                        <p class="card-text">prezzo di noleggio: ${venditore.film_vendita[index].prezzoNoleggio}</p>
                        <a href="#" class="btn btn-primary">Noleggia</a>
                    </div>
                </div>
                `;
            }

            //console.log(index); // 3
            //console.log(fruits[index]); // blueberries

            //email_cliente =
            //email_venditore = 
            //id
            //document.getElementById("elencoNegozi").innerHTML +=

        }
        


        //riga OtherInfo
        var col8_other = document.getElementById("rigaOtherInfo").childNodes[3];

        for ( i = 0; i < film.production_companies.length; i++) {
            
            var div = document.createElement("div");
            div.className = "d-flex align-items-center align-middle";
            div.style = "margin-bottom: 1em;";
            col8_other.appendChild(div);

            var logo = document.createElement("img");
            logo.style = "background-color: white; border-radius: 100%; border: 0.1em solid white; width: 3em; height: 3em;";
            if (film.production_companies[i].logo_path != null) {
                logo.src = "https://www.themoviedb.org/t/p/original"+film.production_companies[i].logo_path;
            }
            div.appendChild(logo);

            var name = document.createElement("p");
            name.style = "color: #c1c1c1; margin-top: auto; margin-bottom: auto; margin-left: 0.5em;";
            name.innerHTML = film.production_companies[i].name;
            div.appendChild(name);   
        }
        
        var col4_other = document.getElementById("rigaOtherInfo").childNodes[5];

        if (film.production_countries.length > 0) {
            var prod_country = document.createElement("p");
            prod_country.innerHTML = "<b>Production Country</b> "+film.production_countries[0].name;
            col4_other.appendChild(prod_country);
        }

        var status = document.createElement("p");
        status.innerHTML = "<b>Status</b> "+film.status;
        col4_other.appendChild(status);

        if (film.release_date != null){
            var release_date = document.createElement("p");
            release_date.innerHTML = "<b>Release Date</b> "+film.release_date;
            col4_other.appendChild(release_date);
        }
    });
   
    //getFilmCorrelati(id);
    getFilmCorr(id);



}

function aggiungiVendita(){
    
    id = get_from_url("id=");

    active_user = JSON.parse(window.localStorage.getItem("active_user"));
    
    if (active_user.film_vendita.find(searchFilminArray, id) == undefined ) {
        active_user.film_vendita.push(id);
        window.localStorage.setItem("active_user", JSON.stringify(active_user));
    } else {
        return alert('film già presente');
    }

    venditori = JSON.parse(window.localStorage.getItem("venditori"));

    for ( i=0 ; i<venditori.length; i++) {
        
        if (venditori[i].email==active_user.email) {

            if (venditori[i].film_vendita.find(searchFilminArray, id) == undefined ) {
                venditori[i].film_vendita.push(id);
                window.localStorage.setItem("venditori", JSON.stringify(venditori));
                break;
            }

        }

    }

}


//restituisce indice successivo a quello trovato, undefined altrimenti
function searchFilminArray(film) {
    return film == this;
}

function aggiungiPreferiti(){
    id = get_from_url("id=");
    active_user = JSON.parse(window.localStorage.getItem("active_user"));
    active_user.film_preferiti.push(id);
    //console.log(active_user.film_preferiti);
    // guarda array , se è gia nei preferiti , non lo aggiungi , il bottone lo deve segnalare .  
    //console.log(active_user_preferiti.film_preferiti);
    clienti = JSON.parse(scaricaDati("clienti"));
    //console.log(clienti);
    var presente = false ; 
    for ( i=0 ; i<clienti.length; i++){
        if (clienti[i].email==active_user.email){
            //console.log("trovato");
            //console.log(clienti[i].film_preferiti);
            film_cliente = clienti[i].film_preferiti;
            for (j = 0; j<film_cliente.length; j++){
                if ( film_cliente[j]==id){
                   presente = true;
                }
               // console.log(film_cliente);
            }
           if (!presente){
               console.log("non trovato");
               clienti[i].film_preferiti.push(id);
                btn=document.getElementById('add_pref');
                btn.innerHTML='<i class="far fa-thumbs-up"></i> Aggiunto ai Preferiti';
                btn.className='btn btn-outline-light';
                btn.style='background-color:white;color:black;';
              // console.log(clienti[i]);
               localStorage.setItem('active_user',JSON.stringify(clienti[i]));
           }  else {
               console.log("già inserito");
           }
        }
        localStorage.setItem('clienti',JSON.stringify(clienti));
    }
    // devo cambiare parametri film nell'active users e anche aggiornare clienti 
}
function stopvideo() {
    document.getElementById("TrailerFilm").src = document.getElementById("TrailerFilm").src;
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

function getFilmCorrelati(id){
    scroller = document.getElementById('scroller_film_correlati');
    var array = []; 
    get("https://api.themoviedb.org/3/movie/"+id+key, function(response){    
       // console.log(response.genres);
        for ( i=0 ; i<response.genres.length; i++){
            //console.log(response.genres[i]);
            array.push(response.genres[i].id);
        }
        console.log(array);
        
        for ( i=0 ; i<array.length; i++){
            get("https://api.themoviedb.org/3/discover/movie"+key+"&sort_by=popularity.desc&include_adult=true&page=1&with_genres="+(array[i].toString()) , function(response){
                //console.log(response.results);
                for ( i=0 ; i< response.results.length; i++){
                    if (!(id == response.results[i].id)){
                        card = createCard(response.results[i]);
                        scroller.appendChild(card);
                    }   
                }
            });
        }
    });
}

function getFilmCorr(id){
    scroller = document.getElementById('scroller_film_correlati');
    get("https://api.themoviedb.org/3/movie/"+id+"/similar?api_key=2bb75004dddb3cae50be3c30cc0f551d", function(response){
        for ( i=0 ; i<response.results.length; i++){
            card = createCard(response.results[i]);
            scroller.appendChild(card);
        }
    });
}

function sfondo(){
    sfondo=document.getElementById('sfondo');  
    get("https://api.themoviedb.org/3/discover/movie?api_key=2bb75004dddb3cae50be3c30cc0f551d&sort_by=popularity.desc&include_adult=true&include_video=false", function(response){
        var immagini = [];
        len = response.results.length;
        for ( i = 0 ; i<response.results.length; i++){
            immagini.push("https://www.themoviedb.org/t/p/original"+response.results[i].backdrop_path);
        }
        
        num =  getRandomInt(len);
        
        sfondo.background=immagini[num];
        sfondo.style='background-repeat:no-repeat; background-size:1480px 850px; background-position:scroll; background-color:rgba(0,0,0,0.5);';

    
      
    });
      
}
 function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

function pagPersonale(){
    if ( window.localStorage.getItem('active_user')!='null'){
        console.log(window.localStorage.getItem('active_user'));
        document.getElementById('user').href='paginaPersonale.html';
    } else {
         alert("Nessun Utente attivo ");
    }
}

function sfondo_reg(){
    scroller=document.getElementById('scroller_reg');
    get("https://api.themoviedb.org/3/discover/movie?api_key=2bb75004dddb3cae50be3c30cc0f551d&sort_by=popularity.desc&include_adult=true&include_video=false", function(response){
        var immagini = [];
        len = response.results.length;
        for ( i = 0 ; i<response.results.length; i++){
            immagini.push("https://www.themoviedb.org/t/p/original"+response.results[i].backdrop_path);
        }
        var listadiv = [];
       for (i=0 ; i<immagini.length; i++){
           div= document.createElement('div');
           div.style='display:inline-block;'
           img= document.createElement('img');
           img.src=immagini[i];
           div.appendChild(img);
           listadiv.push(div);
       }
       console.log(listadiv[0].childNodes[0]);
       for ( i=0 ; i<listadiv.length; i++){
           scroller.appendChild(listadiv[i]);
       }

    });
}

//search
function multiSearchResult(query) {
    get("https://api.themoviedb.org/3/search/multi?api_key=2bb75004dddb3cae50be3c30cc0f551d&query="+query, function(response){                
        //console.log("get response: ", response.results);

        for (obj of response.results) {
            //console.log(obj.media_type, obj)
            switch (obj.media_type) {
                case "movie":
                    document.getElementById("resultsFilms").innerHTML += createFilm(obj)
                    break;
                case "person":
                    document.getElementById("resultsActors").innerHTML += createActor(obj)
                    break;
            }
        }               
    });
}

function genereSearchResult(genere) {
    get("https://api.themoviedb.org/3/discover/movie?api_key=2bb75004dddb3cae50be3c30cc0f551d&sort_by=popularity.desc&with_genres="+genere, function(response){                
        for (obj of response.results) {
            document.getElementById("resultsFilms").innerHTML += createFilm(obj)
        }
    });
}

function companySearchResult(company) {
    get("https://api.themoviedb.org/3/search/company?api_key=2bb75004dddb3cae50be3c30cc0f551d&query="+company, function(response){                
        console.log("company", response.results)
        x = response.results
        for (obj of response.results) {
            document.getElementById("resultsCompanies").innerHTML += createCompany(obj)
        }
    });
}



function createFilm(obj) {
    return card = `
    <div class="card text-white bg-dark mb-3" style="max-width: 18rem; margin: 1em;">
        <img src="https://www.themoviedb.org/t/p/original${obj.poster_path}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${obj.title}</h5>
            
            <a href="./film_description.html?id=${obj.id}" class="btn btn-primary">visualizza</a>
        </div>
    </div>
    `;
}

function createActor(obj) {

    var card = `
    <div class="card text-white bg-dark mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
            <div class="card bg-dark text-white">
                <img src="https://www.themoviedb.org/t/p/original${obj.profile_path}" class="card-img" alt="...">
                <div class="card-img-overlay">
                    <h5 class="card-title">${obj.name}</h5>
                </div>
            </div>
            </div>
            <div class="col-md-8">
            <div class="card-body">
    `;

    films = obj.known_for.filter(film => film.media_type == "movie") // tiene film con media_type == "movie"

    card += createCarousel(obj.id, films)
    

    card += "</div></div></div></div>";
    return card;
}

function createCarousel(id, films) {
    if (films.length == 0) {
        return "<p>no films</p>";
    }
    var carousel = `
    <div id="carousel${id}" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
    `;

    first = true;
    for (film of films) {

        if (first) {
            carousel += `
                <div class="carousel-item active">
                <img src="https://www.themoviedb.org/t/p/original${film.poster_path}" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <a href="./film_description.html?id=${film.id}" class="btn btn-primary">visualizza</a>
                </div>
                </div>
            `;
            first = false;
        } else {
            carousel += `
                <div class="carousel-item">
                <img src="https://www.themoviedb.org/t/p/original${film.poster_path}" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <a href="./film_description.html?id=${film.id}" class="btn btn-primary">visualizza</a>
                </div>
                </div>
            `;
        }
            
        
    }

    carousel += `
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carousel${id}" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carousel${id}" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    </div>
    `;

    return carousel;

}

function createCompany(obj) {

    var card = `
    <div class="card text-white bg-dark mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
            <div class="card bg-dark text-white">
    `;
    if (obj.logo_path != null) {
        card += `<img src="https://www.themoviedb.org/t/p/original${obj.logo_path}" class="card-img" alt="...">`;
    } else {
        card += `<img src="" class="card-img" alt="...">`;
    }
    card += `
                <div class="card-img-overlay">
                    <h5 class="card-title">${obj.name}</h5>
                </div>
            </div>
            </div>
            <div class="col-md-8">
            <div class="card-body">
    `;

    var request = new XMLHttpRequest();
    
    request.open('GET', "https://api.themoviedb.org/3/discover/movie?api_key=2bb75004dddb3cae50be3c30cc0f551d&sort_by=popularity.desc&with_companies="+obj.id, false);  // `false` makes the request synchronous
    
    request.send();

    if (request.status === 200) {
        card += createCarousel(obj.id, JSON.parse(request.response).results)
    }

    card += "</div></div></div></div>";

    return card;
}

function AcquistaFilm(emailCliente, emailVenditore, idFilm, price) {

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

}

function NoleggiaFilm(emailCliente, emailVenditore, idFilm, price) {
    
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
    active_user.film_acquistati.push({"id": idFilm, "data": (new Date().getDate()+"-"+(new Date().getMonth()+1)+"-"+new Date().getFullYear())})

    index = clienti.findIndex(cliente => cliente.email === emailCliente);
    clienti[index] = active_user;

    index = venditori.findIndex(venditore => venditore.email === emailVenditore);
    venditori[index].portafogli.saldo += price;


    window.localStorage.setItem("active_user", JSON.stringify(active_user));
    window.localStorage.setItem("clienti", JSON.stringify(clienti));
    window.localStorage.setItem("venditori", JSON.stringify(venditori));

}


// TODO: controllare new Date(), restituisce oraio italiano?


function test() {
    console.log("test")
}