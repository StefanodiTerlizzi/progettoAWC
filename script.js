var data = {
  "venditori" : [
    {"nomenegozio": "Euronics","telefono": "3336098348","partitaiva": "0234532","email": "euronics@gmail.com","password": "xx1","type": "venditore","film_vendita": ["399566", "791373", "527774","379686","385128","588228"]},
    {"nomenegozio": "Blockbuster", "telefono": "345672890", "partitaiva": "5532090", "email": "x2@gmail.com", "password": "xx2", "type": "venditore",  "film_vendita": ["399566", "791373", "527774"]},
    ],
  "clienti" : [
    {"nome": "Giacomo","cognome":"Rossi","data":"1996-10-04","telefono":"3465889485","via":"viale dei santi","numcivico":"3", "citta":"milano","provincia":"milano", "nazione":"italia","email":"giacomorossi@gmail.com","password":"1","type": "cliente","film_preferiti": ["10674", "10020"],"film_acquistati": [{"id": "11224","data": "20-09-2020"}, {"id": "8587","data": "10-05-2020"}],"film_noleggiati": [{"id": "420818","data": "23-04-2020"}, {"id": "155","data": "23-04-2020"}]
    },
  ]
}

var structData = {
    "venditore" : {"nomenegozio": "", "telefono": "", "partitaiva": "", "email": "", "password": "", "type": "venditore", "film_vendita": []},
    "cliente" : {"nome": "", "cognome":"" ,"data":"", "telefono":"", "via":"","numcivico":"","citta":"","provincia":"","nazione":"","email":"","password":"", "type": "cliente"},
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

                col8.innerHTML +=   '<div class="row" id="rigaPulsanti">'+
                '<div class="col-md" style="margin-top: 2em;">'+
                    '<button type="button" class="btn btn-outline-light"><i class="fas fa-shopping-cart"></i> Acquista</button>'+
                '</div>'+
                '<div class="col-md" style="margin-top: 2em;">'+
                    '<button type="button" class="btn btn-outline-light"><i class="fas fa-user-clock"></i> Noleggia</button>'+
                '</div>'


                if (active_user.film_preferiti.find(searchFilminArray, id) == undefined ) {
                    col8.innerHTML += '<div class="col-md" style="margin-top: 2em;">'+
                '<button id="add_pref" type="button" class="btn btn-outline-light" onclick="aggiungiPreferiti()"><i class="far fa-thumbs-up"></i> Aggiungi ai preferiti</button></div></div>'
                } else {
                    col8.innerHTML += '<div class="col-md" style="margin-top: 2em;">'+
                '<button id="add_pref" type="button" class="btn btn-outline-light"><i class="far fa-thumbs-up"></i> Già nei preferiti</button></div></div>'
                }



                

            }

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
/*
function getPaginaFilm(){ 
     get("https://api.themoviedb.org/3/movie/popular?api_key=2bb75004dddb3cae50be3c30cc0f551d&language=en-US&page=1", function(response){
        scroller = document.getElementById('scroller_popolari');
        for ( i = 0 ; i<response.results.length; i++){
            film = response.results[i];
            card = createCard(film);
            scroller.appendChild(card);
        }
     });

     get("https://api.themoviedb.org/3/movie/popular?api_key=2bb75004dddb3cae50be3c30cc0f551d&language=en-US&page=2", function(response){
        scroller = document.getElementById('scroller_popolari1');
        for ( i = 0 ; i<response.results.length; i++){
            film = response.results[i];
            card = createCard(film);
            scroller.appendChild(card);
        }
     });

     get("https://api.themoviedb.org/3/movie/top_rated?api_key=2bb75004dddb3cae50be3c30cc0f551d&language=en-US&page=1", function(response){
          scroller1 = document.getElementById("scroller_toprated");
         for ( i = 0 ; i<response.results.length; i++){
            film = response.results[i];
            card = createCard(film);
            scroller1.appendChild(card); 
         }
     });

     get("https://api.themoviedb.org/3/movie/upcoming?api_key=2bb75004dddb3cae50be3c30cc0f551d&language=en-US&page=1", function(response){
        scroller2 = document.getElementById("scroller_upcoming");
       for ( i = 0 ; i<response.results.length; i++){
          film = response.results[i];
          card = createCard(film);
          scroller2.appendChild(card); 
       }
   });

}
*/
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

      /* div1 = document.getElementById('img1');
       img1=document.createElement('img');
       img1.src=immagini[num];
       img1.style='height:200px;';
       div1.append(img1);

       div2 = document.getElementById('img2');
       img2=document.createElement('img');
       img2.src=immagini[num+1];
       img2.style='height:200px;';
       div2.append(img2);

       div3 = document.getElementById('img3');
       img3=document.createElement('img');
       img3.src=immagini[num+2];
       img3.style='height:200px;';
       div3.append(img3);

       div4 = document.getElementById('img4');
       img4=document.createElement('img');
       img4.src=immagini[num+3];
       img4.style='height:200px;';
       div4.append(img4);
       */
    });
}

//search
function screateResult(TypeOfSearch, query) {
    //coding
    switch (TypeOfSearch) {
        case "movie":
            get("https://api.themoviedb.org/3/search/"+TypeOfSearch+"?api_key=2bb75004dddb3cae50be3c30cc0f551d&query="+query, function(response){
                
                console.log("get response: ", response.results);
                
                for (film of response.results) {
                    console.log(film)
                    var card = `
                        <div class="card text-white bg-dark mb-3" style="max-width: 18rem; margin: 1em;">
                            <img src="https://www.themoviedb.org/t/p/original${film.poster_path}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${film.title}</h5>
                                
                                <a href="./film_description.html?id=${film.id}" class="btn btn-primary">visualizza</a>
                            </div>
                        </div>
                    `;
                    document.getElementById("results").innerHTML += card;
                }
            });
            
            break;

        case "multi":
            get("https://api.themoviedb.org/3/search/"+TypeOfSearch+"?api_key=2bb75004dddb3cae50be3c30cc0f551d&query="+query, function(response){
                
                console.log("get response: ", response.results);


                for (obj of response.results) {
                    switch (obj.media_type) {
                        case "movie":
                            var card = `
                            <div class="card text-white bg-dark mb-3" style="max-width: 18rem; margin: 1em;">
                                <img src="https://www.themoviedb.org/t/p/original${obj.poster_path}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${obj.title}</h5>
                                    
                                    <a href="./film_description.html?id=${obj.id}" class="btn btn-primary">visualizza</a>
                                </div>
                            </div>
                            `;
                            document.getElementById("results").innerHTML += card;
                            break;
                        case "person":
                            var card = `
                            <div class="card mb-3" style="max-width: 540px;">
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



                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>


                            `;

                            for (film of object.known_for) {

                            }

                            var carousel = `
                            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                    <img src="..." class="d-block w-100" alt="...">
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>First slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </div>
                                    </div>
                                    <div class="carousel-item">
                                    <img src="..." class="d-block w-100" alt="...">
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Second slide label</h5>
                                        <p>Some representative placeholder content for the second slide.</p>
                                    </div>
                                    </div>
                                    <div class="carousel-item">
                                    <img src="..." class="d-block w-100" alt="...">
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Third slide label</h5>
                                        <p>Some representative placeholder content for the third slide.</p>
                                    </div>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            `;

                            card += "</div></div></div></div>";
                            
                            document.getElementById("results").innerHTML += card;
                            break;

                        default:
                            break;
                    }

                }

                
            });
            
            break;
    
        default:
            break;
    }
}

function createResult(TypeOfSearch, query) {
    get("https://api.themoviedb.org/3/search/"+TypeOfSearch+"?api_key=2bb75004dddb3cae50be3c30cc0f551d&query="+query, function(response){                
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
            
                default:
                    break;
            }
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
    var carousel = `
    <div id="carousel${obj.id}" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
    `;

    first = true;
    for (film of obj.known_for) {
        //console.log(obj.name, film)
        if (film.media_type == "movie") {
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
            
            //card += `<a href="./film_description.html?id=${film.id}" class="btn btn-primary">${film.title}</a><br>`;
        }
    }

    carousel += `
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carousel${obj.id}" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carousel${obj.id}" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    </div>
    `;
    

    card += carousel+"</div></div></div></div>";
    return card;
}