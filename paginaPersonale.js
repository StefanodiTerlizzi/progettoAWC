
function CreatePage() {
    if (JSON.parse(window.localStorage.getItem("active_user"))==null) {
       
    } else if (JSON.parse(window.localStorage.getItem("active_user")).type == "venditore") {
        createVenditore();
        getFilmVenduti();
       
    } else if (JSON.parse(window.localStorage.getItem("active_user")).type == "cliente") {
        createCliente();
        getFilmPreferiti();
    } 
    
}

function get(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true); 
    xhr.responseType = 'json';
  
    xhr.onload = function() { // cosa fa quando ottengo la risposta
      callback(xhr.response);
    }; // fine cosa fa quando ottengo la risposta
  
    xhr.send();
  
  }

function getFilmVenduti(){ 
    film = JSON.parse(window.localStorage.getItem("active_user")).film_vendita;
   // console.log(film); 
    for(i=0 ; i<film.length; i++){
        get("https://api.themoviedb.org/3/movie/"+film[i]+"?api_key=2bb75004dddb3cae50be3c30cc0f551d&sort_by=popularity.desc&include_adult=true&include_video=false", function(response){
            div = document.getElementById("div_film_venduti");
                card = cardOverlay(response);
               // console.log(card);
                div.appendChild(card);
         });
    }
}

function getFilmPreferiti(){ 
    film = JSON.parse(window.localStorage.getItem("active_user")).film_preferiti;
    console.log(film); 
    for(i=0 ; i<film.length; i++){
        get("https://api.themoviedb.org/3/movie/"+film[i]+"?api_key=2bb75004dddb3cae50be3c30cc0f551d&sort_by=popularity.desc&include_adult=true&include_video=false", function(response){
            div = document.getElementById("div_film_preferiti");
                card = cardOverlay(response);
                div.appendChild(card);
         });
    }
}

function cardOverlay(film) {
    var card = document.createElement("div");
    card.className = "card bg-dark text-white rounded";
    card.style = "width: 190px!important;margin: 0.5em;";
    card.style.display = "inline-block";
    card.setAttribute("id", film.id);
    //console.log(card);
    //card.style.borderRadius = "1.5em";

    var img = document.createElement("img");
    img.className = "card-img rounded";
    img.style.borderRadius = "1.5em";
    img.src = "https://www.themoviedb.org/t/p/original"+ film.poster_path;
    img.style='height:268px!important;';
    //img.setAttribute("href", "./film_description.html?id="+film.id);
    card.appendChild(img);

    var div_ov = document.createElement("div");
    div_ov.className = " rounded";
    div_ov.style.backgroundColor = "rgba(0,0,0,0.2)";
  
    card.appendChild(div_ov);

    var a = document.createElement("a");
    a.setAttribute("href", "./film_description.html?id="+ film.id);
    a.style.color = "white";
    a.style.textAlign='center';
    //a.style.textDecoration = "none";
    div_ov.appendChild(a);

    var title = document.createElement("h6");
    title.className = "card-title";
    title.innerHTML = "<br>" +film.original_title;
    title.style.fontSize='small';
    a.appendChild(title);

    var btn_el = document.createElement("button");
   // btn_el.className = "btn btn-danger";
    btn_el.setAttribute("id","trashbutton");
    btn_el.style.alignItems='center';
    btn_el.innerHTML = "<i class='fas fa-trash-alt'></i>";
    btn_el.setAttribute("onclick", "elimina_film_venditore(this)")
    div_ov.style.textAlign='center';
    div_ov.appendChild(btn_el);

    return card;    
}

function elimina_film_venditore(btn) {
    id = btn.parentNode.parentNode.id;
   // console.log(id);
    active_user = JSON.parse(window.localStorage.getItem("active_user"));
    venditori = JSON.parse(window.localStorage.getItem("venditori"));

    for (venditore of venditori) {
       
        // tolgo film del venditore 
        if (JSON.stringify(active_user) == JSON.stringify(venditore)) {
            for (i = 0; i < venditore.film_vendita.length; i++) {
                if (venditore.film_vendita[i] == id) {
                    lista1 =  venditore.film_vendita.slice(0,i);
                    lista2 = venditore.film_vendita.slice(i+1,venditore.film_vendita.length);
                    venditore.film_vendita = lista1.concat(lista2);

                    lista3 =  active_user.film_vendita.slice(0,i);
                    lista4 = active_user.film_vendita.slice(i+1,active_user.film_vendita.length);
                    active_user.film_vendita = lista3.concat(lista4);

                    break;
                }
            }
        }
        //console.log(JSON.stringify(venditore));
    }
    window.localStorage.setItem("venditori", JSON.stringify(venditori));
    window.localStorage.setItem("active_user", JSON.stringify(active_user));
    window.location.reload();

}
// passo un film , mi crea una card per quel film 
function createCard(film){
        card = document.createElement("div");
        card.className = "card";
        card.style = "width: 10rem; margin:2em; display:inline-block; background-color: rgb(0,0,0)";


        immagine_link = document.createElement("a");
        immagine_link.setAttribute("href","./film_description.html?id="+ film.id);
        

        image = document.createElement("img");
        image.src="https://www.themoviedb.org/t/p/original"+ film.poster_path;
        image.className = "card-img-top";
        image.style="border-radius:15px;"

       

        immagine_link.appendChild(image);
      
        card.appendChild(immagine_link);
        
        div_card = document.createElement("div");
        div_card.className="card-body";
        div_card.style="heigth:200px;!important; width: "
        

        
        title = document.createElement("h7");
        title.className = "card-title";
        title.innerHTML = film.original_title;
        title.style="color:white; "
        div_card.appendChild(title);

        card.appendChild(div_card);

        return card;


}
var pushPar = {};

function elimina_account() {
    // c'e un fomr gestito dal signup ... PROBLEMA : sull'onload del signup si ricaricano gli utenti.
    //document.body.style.display="";
    var account = JSON.parse(window.localStorage.getItem("active_user"));
    var lista;
    if (account.type == "cliente") {
        lista = JSON.parse(window.localStorage.getItem("clienti"));
    } else {
        lista = JSON.parse(window.localStorage.getItem("venditori"));
    }
    //console.log("prima",lista);
   
    for ( i=0 ; i<lista.length; i++) {
        if (lista[i].email == account.email) {
            lista1 =  lista.slice(0,i);
            
            lista2 = lista.slice(i+1,lista.length);
           
            lista = lista1.concat(lista2);
        }
    }
    //console.log("dopo",lista);

    if (account.type == "cliente") {
        window.localStorage.setItem("clienti", JSON.stringify(lista));
    } else {
        window.localStorage.setItem("venditori", JSON.stringify(lista));
    }

    window.localStorage.setItem("active_user", null);



    /* funziona quetta
    lista = lista.filter(function filtra(value){
        var account = JSON.parse(window.localStorage.getItem("active_user"));
        return value == account;
    });
    */
      
}
function createFormElement(elemento, id, nameforjson) {
    /*Incapsulamento elemento in div per form*/
    // elemento = input incapsulato nel div 
    div1 = document.createElement("div");
    div1.className = "mb-3";
    elemento.setAttribute("id", id);
    elemento.setAttribute("name", nameforjson);
    elemento.setAttribute("onchange","check(this)");
  
    label = document.createElement("label");
    label.className = "form-label";
    label.setAttribute("for", id);
    label.innerHTML = id;
  
    elemento.className = "form-control";
    div1.appendChild(label);
    div1.appendChild(elemento);
    return div1;
}

function check(campo) {
    if (controllo(campo)) {
        if (campo.name == "password") {
            document.getElementById("changeConfPassword").style.display = "";
        } else if (campo.name == "conferma_password") {
            if ( campo.value == document.getElementById("Password").value ) {
                pushPar["password"] = campo.value;
            } else {
                console.log("non uguali");
                conferma_password =  document.getElementById("changeConfPassword").childNodes[1];
                conferma_password.className="form-control is-invalid";
                var err = document.createElement("div"); // error message 
                err.className = "invalid-feedback";
                err.innerHTML = "Le password non coincidono!";
                conferma_password.parentNode.insertBefore(err, campo.nextSibling);
               
            }
        } else {
            pushPar[campo.name] = campo.value;
        }

        console.log(pushPar);


    }

}

function conferma_la_password(pass, campo){
    valoreCampo = campo.value; // valore
    nomeCampo = campo.name; //nome, cognome
    //console.log(campo);
    // rimuove il messaggio di errore
    if (campo.nextSibling != null) {
        campo.nextSibling.remove();
    }

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


function controllo(campo){
    //campo = oggetto
    valore = campo.value; // valore
    nome = campo.name; //nome, cognome

    // da controllare 

    var regex = "";
    var errore = "";

    switch ( nome ) {
        case "nome": 
            regex = '/^([a-zA-Z\xE0\xE8\xE9\xF9\xF2\xEC\x27]\s?)+$/';
            errore =  "Il parametro deve contenere solo caratteri alfabetici"; 
            break;
        case "nomenegozio":
            regex = /[a-zA-Z1-9]+/;
            errore = "Il parametro non può essere vuoto"; 
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
        case "password" :
            regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ ; 
            errore = "La password deve contenere almeno 8 caratteri di cui almeno uno maiuscolo , uno minuscolo , uno numerico e un carattere speciale"
            break;
        case "conferma_password" :
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

    if (valore.match(regex)) {
        alert('passo il controllo');
        campo.className = "form-control is-valid"
        var err = document.createElement("div"); // error message 
        err.className = "valid-feedback";
        err.innerHTML = "Looks good!";
        campo.parentNode.insertBefore(err, campo.nextSibling);
        if ( nome != "password" && nome != "conferma_password" ){
            document.getElementById("Aggiorna_Parametri").disabled = false;
        }
        if (nome == "conferma_password" && valore == document.getElementById("Password").value) {
            document.getElementById("Aggiorna_Parametri").disabled = false;
        }
       
        return true;
    } else if ( valore == "" ) {
    } else {
        campo.className = "form-control is-invalid"
        //<span class="badge bg-danger">Danger</span>
        var err = document.createElement("div"); // error message 
        err.className = "invalid-feedback";
        err.innerHTML = errore;
        campo.parentNode.insertBefore(err, campo.nextSibling);
        return false;
    }
}

function createCliente() {
    active_user = JSON.parse(window.localStorage.getItem("active_user"));
    var form = document.getElementById('form_anagrafica');
    nome = document.createElement("input");
    nome.setAttribute("type","text");
    nome.setAttribute("value",active_user.nome);
    //nome.setAttribute("onchange", "checkparameters_registrazione(this)")
    form.appendChild(createFormElement(nome,"Nome", "nome"));
    // campo cognome
    cognome = document.createElement("input");
    cognome.setAttribute("type","text");
    cognome.setAttribute("value",active_user.cognome);
    form.appendChild(createFormElement(cognome,"Cognome", "cognome"));
    // campo data
    data = document.createElement("input");
    data.setAttribute("type","date");
    data.setAttribute("value",active_user.data);
    form.appendChild(createFormElement(data,"Data di nascita", "data"));
    //campo telefono
    telefono = document.createElement("input");
    telefono.setAttribute("type","text");
    telefono.setAttribute("value",active_user.telefono);
    form.appendChild(createFormElement(telefono,"Telefono", "telefono"));
    
    // campo via
    via = document.createElement("input");
    via.setAttribute("type","text");
    via.setAttribute("value",active_user.via);
    form.appendChild(createFormElement(via,"Via","via"));
    // campo numero civico
    numCivico = document.createElement("input");
    numCivico.setAttribute("type","text");
    numCivico.setAttribute("value",active_user.numcivico);
    form.appendChild(createFormElement(numCivico, "Numero Civico","numcivico"));
    // campo città
    citta = document.createElement("input");
    citta.setAttribute("type","text");
    citta.setAttribute("value", active_user.citta);
    form.appendChild(createFormElement(citta, "Città","citta"));
    // campo provincia
    provincia = document.createElement("input");
    provincia.setAttribute("type","text");
    provincia.setAttribute("value", active_user.provincia);
    form.appendChild(createFormElement(provincia, "Provincia","provincia"));
    // campo nazione
    nazione = document.createElement("input");
    nazione.setAttribute("type","text");
    nazione.setAttribute("value", active_user.nazione);
    form.appendChild(createFormElement(nazione, "Nazione","nazione"));
    
    cambia_password_div = document.createElement("div");
    cambia_password = document.createElement("a")
    cambia_password_div.appendChild(cambia_password);
    cambia_password.setAttribute("href","#");
    cambia_password.setAttribute("onclick","cambiaPassword()");
    cambia_password.innerHTML="Cambia Password";
    cambia_password_div.style = "margin-bottom:1em";
    form.appendChild(cambia_password_div);

    password = document.createElement("input");
    password.setAttribute("type","password");
    password_div = createFormElement(password,"Password", "password");
    password_div.setAttribute("id", "changePassword");
    password_div.style="display:none; margin-bottom:1em;"
    form.appendChild(password_div);

    conf_password = document.createElement("input");
    conf_password.setAttribute("type","password");
    conf_password_div = createFormElement(conf_password,"Conferma password", "conferma_password");
    conf_password_div.setAttribute("id", "changeConfPassword");
    conf_password_div.style="display:none; margin-bottom:1em;"
    form.appendChild(conf_password_div);


    //button submit
    var btn_submit_link = document.createElement("a");
    //btn_submit_link.setAttribute("href", "./index.html");
    form.appendChild(btn_submit_link);
    btn_submit = document.createElement("button");
   // btn_submit.className = "btn btn-primary";
    btn_submit.setAttribute("type", "submit");
    btn_submit.style.display='block';
    btn_submit.setAttribute("id", "Aggiorna_Parametri");
    btn_submit.disabled = true;
    btn_submit.setAttribute("onclick", "AggiornaParametri()");
    btn_submit.innerHTML = "Aggiorna";
    btn_submit_link.appendChild(btn_submit);
    
    var btn_elimina = document.createElement("button");
    btn_elimina.setAttribute("type","button");
   // btn_elimina.className = "btn btn-danger";
    btn_elimina.setAttribute("id","Elimina_Account");
    btn_elimina.setAttribute("data-bs-toggle","modal");
    btn_elimina.setAttribute("data-bs-target","#exampleModal");
    btn_elimina.innerHTML = "Elimina Account";
    form.appendChild(btn_elimina);

    
}

function createVenditore() {
    utente = JSON.parse(window.localStorage.getItem("active_user"));
    form = document.getElementById("form_anagrafica");
   
    nome_negozio = document.createElement("input");
    nome_negozio.setAttribute("type","text");
    nome_negozio.setAttribute("value",utente.nomenegozio);
    form.appendChild(createFormElement(nome_negozio,"Nome del negozio", "nomenegozio"));
    
    
    numero_di_telefono = document.createElement("input");
    numero_di_telefono.setAttribute("type","text");
    numero_di_telefono.setAttribute("value",utente.telefono);
    form.appendChild(createFormElement(numero_di_telefono,"Numero di Telefono", "telefono"));
    
    p_iva = document.createElement("input");
    p_iva.setAttribute("type","text");
    p_iva.setAttribute("value",utente.partitaiva)
    form.appendChild(createFormElement(p_iva,"Partita Iva", "partitaiva"));
    
    cambia_password_div = document.createElement("div");
    cambia_password = document.createElement("a")
    cambia_password_div.appendChild(cambia_password);
    cambia_password.setAttribute("href","#");
    cambia_password.setAttribute("onclick","cambiaPassword()");
    cambia_password.innerHTML="Cambia Password";
    cambia_password_div.style = "margin-bottom:1em";
    form.appendChild(cambia_password_div);

    password = document.createElement("input");
    password.setAttribute("type","password");
    password_div = createFormElement(password,"Password", "password");
    password_div.setAttribute("id", "changePassword");
    password_div.style="display:none; margin-bottom:1em;"
    form.appendChild(password_div);

    conf_password = document.createElement("input");
    conf_password.setAttribute("type","password");
    conf_password_div = createFormElement(conf_password,"Conferma password", "conferma_password");
    conf_password_div.setAttribute("id", "changeConfPassword");
    conf_password_div.style="display:none; margin-bottom:1em;"
    form.appendChild(conf_password_div);



    //button submit
    var btn_submit_link = document.createElement("a");
    //btn_submit_link.setAttribute("href", "./index.html");
    form.appendChild(btn_submit_link);
    btn_submit = document.createElement("button");
    btn_submit.setAttribute("type", "submit");
    btn_submit.setAttribute("id", "Aggiorna_Parametri");
    btn_submit.style.display='block';
    btn_submit.disabled = true;
    btn_submit.setAttribute("onclick", "AggiornaParametri()");
    btn_submit.innerHTML = "Aggiorna";
    btn_submit_link.appendChild(btn_submit);

    var btn_elimina = document.createElement("button");
    btn_elimina.setAttribute("type","button");
   // btn_elimina.className = "btn btn-danger";
    btn_elimina.setAttribute("id","Elimina_Account");
    btn_elimina.style='width:150px!important;'
    btn_elimina.setAttribute("data-bs-toggle","modal");
    btn_elimina.setAttribute("data-bs-target","#exampleModal");
    btn_elimina.innerHTML = "Elimina Account";
    form.appendChild(btn_elimina);
    


    
}

function cambiaPassword(){
    password = document.getElementById("changePassword");
    password.style.display="block";


    /*conf_password = document.getElementById("changeConfPassword");
    conf_password.style.display="block";
    */
  
}

function AggiornaParametri(){
    // si attiva quando schiaccio bottone aggiorna 
    var utenteAttivo = JSON.parse(window.localStorage.getItem("active_user"));
    console.log(utenteAttivo);
    var lista;
    if (utenteAttivo.type=="cliente") {
        lista = JSON.parse(window.localStorage.getItem("clienti"));
        for (i=0; i<lista.length; i++) {
            
            if ( lista[i].email==utenteAttivo.email) {
                // trovato utente giusto 
                    
                for ( key in pushPar) {
                    // aggiorno parametri 
                    lista[i][key] = pushPar[key];
                }
                window.localStorage.setItem("clienti", JSON.stringify(lista));
                window.localStorage.setItem("active_user", JSON.stringify(lista[i]));
                window.location.reload();// refresha pagina = aggiorna parametri nella pagina 
                break;
            } 
        }
    }  else {
        console.log("venditore");
        lista = JSON.parse(window.localStorage.getItem("venditori"));
        for (i=0; i<lista.length; i++) {
            
            if ( lista[i].email==utenteAttivo.email) {
                // trovato utente giusto 
                    
                for ( key in pushPar) {
                    // aggiorno parametri 
                    lista[i][key] = pushPar[key];
                }
                window.localStorage.setItem("venditori", JSON.stringify(lista));
                window.localStorage.setItem("active_user", JSON.stringify(lista[i]));
                window.location.reload();// refresha pagina = aggiorna parametri nella pagina 
                break;
            } 
        }

    }

    
}