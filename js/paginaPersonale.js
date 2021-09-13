// TODO: aggiungi film manda ad un elenco di film dai quali si può aggiungere ogni silngolo film in caso non sia già presente
/*
TODO:
noleggio: il film pagato dal cliente sar`a disponibile nel film visibili dal
cliente solo per 72h dal giorno dell’acquisto; successivamente, rimarr`a
in elenco ma sar`a indicato come non disponibile per la visione.
*/
function get(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true); 
    xhr.responseType = 'json';

    xhr.onload = function() { // cosa fa quando ottengo la risposta
    callback(xhr.response);
    }; // fine cosa fa quando ottengo la risposta

    xhr.send();

}

function CreatePage() {
    active_user = JSON.parse(window.localStorage.getItem("active_user"))
    if (active_user==null) {
       
    } else if (active_user.type == "venditore") {
        //createVenditore();
        document.getElementById("form_anagrafica").innerHTML += createVenditore2(JSON.parse(window.localStorage.getItem("active_user")) )
        getFilms( document.getElementById("div_film_venduti"), active_user.film_vendita, "complete", true)
       
    } else if (active_user.type == "cliente") {
        //createCliente();
        document.getElementById("form_anagrafica").innerHTML += createCliente2(JSON.parse(window.localStorage.getItem("active_user")) )
        getFilms( document.getElementById("div_film_preferiti"), active_user.film_preferiti);
        getFilms( document.getElementById("rowStoricoAcquisti"), active_user.film_acquistati ,'noButton');
        
        getFilms( document.getElementById("rowStoricoNoleggi"), active_user.film_noleggiati.filter(film => ( ((Date.now()-new Date(film.data).getTime() ) / 1000 ) / 3600) > 72), "noButton" );
                    // funzione anonima : definisce senza bisongo di crare una funzione , il comportamento della filter . 
                  //  differenza in millisecondi trasformata in secondi e poi in ore . se è maggiore di 72 ore il noleggio , non è più disponibile --> storico . 
        getFilms( document.getElementById("rowNoleggiAttivi"), active_user.film_noleggiati.filter(film => ( ((Date.now()-new Date(film.data).getTime() ) / 1000 ) / 3600) <= 72), "noButton" );

    }

}


// !ps: typeCard di default è "complete" a meno che si specificaquando viene chiamata la funzione
//'complete' = card con bottoni , 'noButton'=no bottoni sulla card .  
// crea card con film e le appende nel div .
function getFilms(divToAppend, films, typeCard = "complete", price = false ){
    
    function get(url, callback, otherParams = null) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true); 
        xhr.responseType = 'json';
    
        xhr.onload = function() { // cosa fa quando ottengo la risposta
        callback(xhr.response, otherParams);
        }; // fine cosa fa quando ottengo la risposta
    
        xhr.send();
    
    }

    active_user = JSON.parse(window.localStorage.getItem("active_user"))
    
    for (film of films) {
        prices = null
        if (price) {
            objIndex = active_user.film_vendita.findIndex(obj => obj.id == film.id)
            prices = {"vendita": active_user.film_vendita[objIndex].prezzoVendita, "noleggio": active_user.film_vendita[objIndex].prezzoNoleggio} 
        }
     
        get("https://api.themoviedb.org/3/movie/"+film.id+"?api_key=2bb75004dddb3cae50be3c30cc0f551d", function(response, otherParams){
            switch (typeCard) {
                case "complete":
                    card = cardOverlay(response, otherParams);
                    break;
                case "noButton":
                    card = cardOverlayNoButton(response);
                    break;
                default:
                    break;
            }
            divToAppend.appendChild(card);
         }, prices);
         
    }

}

function cardOverlayNoButton(film) {
    var card = document.createElement("div");
    card.className = "card bg-dark text-white rounded";
    card.style = "width: 190px!important;margin: 0.5em;";
    card.style.display = "inline-block";
    card.setAttribute("id", film.id);
    //console.log(card);
    card.style.borderRadius = "1.5em";

    card.innerHTML += `
        <img class="card-img rounded" style="height: 268px !important;" src="https://www.themoviedb.org/t/p/original${film.poster_path}">
        <div class=" rounded" style="background-color: rgba(0, 0, 0, 0.2); text-align: center;">
            <a href="./film_description.html?id=${film.id}" style="color: white; text-align: center;">
                <h6 class="card-title" style="font-size: small;">
                    <br>${film.original_title}
                </h6>
            </a>
        </div>
    `;

    
    return card;
    //document.getElementById("idFilm").value = this.parentNode.parentNode.parentnode.value
}

function cardOverlay(film, price = null) {
    var card = document.createElement("div");
    card.className = "card bg-dark text-white rounded";
    card.style = "width: 190px!important;margin: 0.5em;";
    card.style.display = "inline-block";
    card.setAttribute("id", film.id);
    //console.log(card);
    //card.style.borderRadius = "1.5em";
    active_user = JSON.parse(window.localStorage.getItem("active_user"))
    typeAccount = "cliente"
    if (active_user.type == "venditore" ) {
        typeAccount = "venditore";
    }

    priceDiv = '';
    modificaFilm = '';

    if (price != null) {
        priceDiv = `
        <h6 class="card-title" style="font-weight: lighter;border-top:0.5em;">
            <div style='font-weight:lighter'>
            prezzo vendita: ${price.vendita} €
            </div>
            <div style='font-weight:lighter'>
            prezzo Noleggio: ${price.noleggio} €
            </div>
        </h6>
        `;
        
        modificaFilm = `
        <a target="_blank" rel="noopener noreferrer">
            <button class="modifybutton" style="align-items: center;" data-bs-toggle="modal" data-bs-target="#PriceModal" onclick="UpdatePrice(this.parentNode.parentElement.parentElement.id)">
                <i class="fas fa-pen-alt"></i>
            </button>
        </a>
        `;
    }


    //${ }--> consente di prendere il valore della variabile e concatenare testo
    card.innerHTML += `
    <img class="card-img rounded" style="height: 268px !important;" src="https://www.themoviedb.org/t/p/original${film.poster_path}">
    <div class="rounded" style="background-color: rgba(0, 0, 0, 0.2); text-align: center;">
        <a href="./film_description.html?id=${film.id}" style="color: white; text-align: center;">
            <h6 class="card-title" style="font-size: lighter;">
                ${film.original_title}
            </h6>
        </a>
        ${priceDiv}
        <button class="trashButton" style="align-items: center;" onclick="elimina_film_${typeAccount}(this)">
            <i class="fas fa-trash-alt" aria-hidden="true"></i>
        </button>
        ${modificaFilm}
    </div>
    `;

    
    return card;
    //document.getElementById("idFilm").value = this.parentNode.parentNode.parentnode.value
}

function UpdatePrice(id) {
    document.getElementById('idFilm').value = id;

    active_user = JSON.parse(window.localStorage.getItem("active_user"));
    
    for (film of active_user.film_vendita) {
        if (film.id == id) {
            document.getElementById('oldPriceVendita').value = film.prezzoVendita;
            document.getElementById('oldPriceNoleggio').value = film.prezzoNoleggio;
        }
    }

}


//idFilm = input nascosto nel modal 
function modificaPrezzoVendita(idFilm, newPrice) {

    if (newPrice == "" || Number(newPrice) < 0) {
        alert("error, please insert valid price");
        return;
    }
    newPrice = Number(newPrice)

    active_user = JSON.parse(window.localStorage.getItem("active_user"));
    venditori = JSON.parse(window.localStorage.getItem("venditori"));

    //objIndex = myArray.findIndex((obj => obj.id == 1));

    active_user.film_vendita = AggiornaPrezzoInLista(active_user.film_vendita, idFilm, newPrice)

    objIndex = venditori.findIndex(obj => obj.email == active_user.email) ;
    venditori[objIndex] = active_user;


    window.localStorage.setItem("venditori", JSON.stringify(venditori));
    window.localStorage.setItem("active_user", JSON.stringify(active_user));

    alert("prezzo Vendita aggiornato con successo");

    //ricarica
    window.location.reload();

    // pattern matching . 
    //obj è ogni ogg della lista , controlla matching . 
    function AggiornaPrezzoInLista(list, idFilm, newPrice) {
        objIndex = list.findIndex((obj => obj.id == idFilm));
        list[objIndex].prezzoVendita = newPrice;
        return list
    }

}


function modificaPrezzoNoleggio(idFilm, newPrice) {

//    console.log("idFilm: ",idFilm)
//    console.log("newPrice: ",newPrice)

    if (newPrice == "" || Number(newPrice) < 0) {
        alert("error, please insert valid price");
        return;
    }
    newPrice = Number(newPrice)

    active_user = JSON.parse(window.localStorage.getItem("active_user"));
    venditori = JSON.parse(window.localStorage.getItem("venditori"));

    //objIndex = myArray.findIndex((obj => obj.id == 1));

    active_user.film_vendita = AggiornaPrezzoInLista(active_user.film_vendita, idFilm, newPrice)
        
    objIndex = venditori.findIndex(obj => obj.email == active_user.email) ;
    venditori[objIndex] = active_user;


    window.localStorage.setItem("venditori", JSON.stringify(venditori));
    window.localStorage.setItem("active_user", JSON.stringify(active_user));

    alert("prezzo Noleggio aggiornato con successo");

    window.location.reload();

    function AggiornaPrezzoInLista(list, idFilm, newPrice) {
        objIndex = list.findIndex((obj => obj.id == idFilm));
        list[objIndex].prezzoNoleggio = newPrice;
        return list
    }

}


function elimina_film_venditore(btn) {

    id = btn.parentNode.parentNode.id;

    active_user = JSON.parse(window.localStorage.getItem("active_user"));
    venditori = JSON.parse(window.localStorage.getItem("venditori"));

    active_user.film_vendita = DeleteFilmFromList(id, active_user.film_vendita);

    for (let i = 0; i < venditori.length; i++) {
        if (venditori[i].email == active_user.email) {
            venditori[i].film_vendita = DeleteFilmFromList(id, venditori[i].film_vendita)
            break;
        }
    }


    window.localStorage.setItem("venditori", JSON.stringify(venditori));
    window.localStorage.setItem("active_user", JSON.stringify(active_user));
    window.location.reload();

}


function elimina_film_cliente(btn) {

    //prende id della card che contiene il film reltivo al bottone
    id = btn.parentNode.parentNode.id;

    active_user = JSON.parse(window.localStorage.getItem("active_user"));
    clienti = JSON.parse(window.localStorage.getItem("clienti"));
// assegno a film preferiti , la nuova lista fitrata . 
    active_user.film_preferiti = DeleteFilmFromList(id, active_user.film_preferiti);



    for (let i = 0; i < clienti.length; i++) {
        if (clienti[i].email == active_user.email) {
            clienti[i].film_preferiti = DeleteFilmFromList(id, clienti[i].film_preferiti)
            break;
        }
    }

    window.localStorage.setItem("active_user", JSON.stringify(active_user));
    window.localStorage.setItem("clienti", JSON.stringify(clienti));
    window.location.reload();

}


function DeleteFilmFromList(filmId, list) {

    return list.filter(DeleteFilminArray, filmId);

    function DeleteFilminArray(film) {
        return film.id != this;
    }
}

// passo un film , mi crea una card per quel film
// TODO: controllare se viene utilizzata, non mi sembra
/*
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
*/

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
               // console.log("non uguali");
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

       // console.log(pushPar);


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

//crea anagrafica venditoree
// TODO: sistemare aggionra onclick
function createVenditore2(venditore) {
    return `
    <div class="mb-3">
        <label class="form-label" for="Nome del negozio"><b>Nome del negozio:</b></label>
        <input type="text" value="${venditore.nomenegozio}" id="Nome del negozio" name="nomenegozio" onchange="checkparameters_registrazione()" class="form-control">
    </div>
    <div class="mb-3">
        <label class="form-label" for="Numero di Telefono"><b>Numero di Telefono:</b></label>
        <input type="text" value="${venditore.telefono}" id="Numero di Telefono" name="telefono" onchange="checkparameters_registrazione()" class="form-control">
    </div>
    <div class="mb-3">
        <label class="form-label" for="Partita Iva"><b>Partita Iva:</b></label>
        <input type="text" value="${venditore.partitaiva}" id="Partita Iva" name="partitaiva" onchange="checkparameters_registrazione()" class="form-control">
    </div>
    <div class="mb-3">
        <label class="form-label"><b>Saldo:</b></label>
        <input class="form-control" type="text" value="${venditore.portafogli.saldo}"  disabled readonly>
    </div>
    <div style="margin-bottom: 1em;">
        <a href="#" onclick="cambiaPassword()">Cambia Password</a>
    </div>
    <div class="mb-3" id="changePassword" style="display: none; margin-bottom: 1em;">
        <label class="form-label" for="Password"><b>Password:</b></label>
        <input type="password" id="Password" name="password" onchange="checkparameters_registrazione()" class="form-control">
    </div>
    <div class="mb-3" id="changeConfPassword" style="display: none; margin-bottom: 1em;">
        <label class="form-label" for="Conferma password" style="margin-right: 0.2em !important;"><b>Conferma password:</b></label>
        <input type="password" id="Conferma password" name="conferma_password" onchange="checkparameters_registrazione()" class="form-control">
    </div>
    <a><button type="submit" id="Aggiorna_Parametri" style="display: block;" disabled="" onclick="AggiornaParametri()">Aggiorna</button></a>
    <button type="button" id="Elimina_Account" style="width: 150px !important;" data-bs-toggle="modal" data-bs-target="#exampleModal">Elimina Account</button>
    `;
}
// TODO: fare select box con i imetodi e far apparire quello scelto dall'utente come default
// crea anagrafica del cliente passandogli i dati di un cliente registrato;
// TODO: sistemare aggionra onclick
function createCliente2(cliente) {
    return `
    <div class="mb-3">
        <label class="form-label" for="Nome"><b>Nome:</b></label>
        <input type="text" value="${cliente.nome}" id="Nome" name="nome" onchange="checkparameters_registrazione()" class="form-control">
    </div>
    <div class="mb-3">
        <label class="form-label" for="Cognome"><b>Cognome:</b></label>
        <input type="text" value="${cliente.cognome}" id="Cognome" name="cognome" onchange="checkparameters_registrazione()" class="form-control">
    </div>
    <div class="mb-3">
        <label class="form-label" for="Data di nascita"><b>Data di nascita:</b></label>
        <input type="date" value="${cliente.data}" id="Data di nascita" name="data" onchange="checkparameters_registrazione()" class="form-control">
    </div>
    <div class="mb-3">
        <label class="form-label" for="Telefono"><b>Telefono:</b></label>
        <input type="text" value="${cliente.telefono}" id="Telefono" name="telefono" onchange="checkparameters_registrazione()" class="form-control">
    </div>
    <div class="mb-3">
        <label class="form-label" for="Via"><b>Via:</b></label>
        <input type="text" value="${cliente.via}" id="Via" name="via" onchange="checkparameters_registrazione()" class="form-control">
    </div>
    <div class="mb-3">
        <label class="form-label" for="Numero Civico"><b>Numero Civico:</b></label>
        <input type="text" value="${cliente.numcivico}" id="Numero Civico" name="numcivico" onchange="checkparameters_registrazione()" class="form-control">
    </div>
    <div class="mb-3">
        <label class="form-label" for="Città"><b>Città:</b></label>
        <input type="text" value="${cliente.citta}" id="Città" name="citta" onchange="checkparameters_registrazione()" class="form-control">
    </div>
    <div class="mb-3">
        <label class="form-label" for="Provincia"><b>Provincia:</b></label>
        <input type="text" value="${cliente.provincia}" id="Provincia" name="provincia" onchange="checkparameters_registrazione()" class="form-control">
    </div>
    <div class="mb-3">
        <label class="form-label" for="Nazione"><b>Nazione:</b></label>
        <input type="text" value="${cliente.nazione}" id="Nazione" name="nazione" onchange="checkparameters_registrazione()" class="form-control">
    </div>
    <div class="mb-3">
        <label class="form-label"><b>Metodo di pagamento:</b></label>
        <input class="form-control" type="text" value="${cliente.portafogli.metodo}">
    </div>
    <div class="mb-3">
        <label class="form-label"><b>Saldo:</b></label>
        <input class="form-control" type="text" value="${cliente.portafogli.saldo}"  disabled readonly>
    </div>
    <div style="margin-bottom: 1em;">
        <a href="#" onclick="cambiaPassword()">Cambia Password</a>
    </div>
    <div class="mb-3" id="changePassword" style="display: none; margin-bottom: 1em;"><label class="form-label" for="Password"><b>Password:</b></label>
        <input type="password" id="Password" name="password" onchange="checkparameters_registrazione()" class="form-control">
    </div>
    <div class="mb-3" id="changeConfPassword" style="display: none; margin-bottom: 1em;">
        <label class="form-label" for="Conferma password"><b>Conferma password:</b></label>
        <input type="password" id="Conferma password" name="conferma_password" onchange="checkparameters_registrazione()" class="form-control">
    </div>
    <a>
        <button type="submit" style="display: block;" id="Aggiorna_Parametri" disabled="" onclick="AggiornaParametri()">Aggiorna</button>
    </a>
    <button type="button" id="Elimina_Account" data-bs-toggle="modal" data-bs-target="#exampleModal">Elimina Account</button>

    `;
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
   // console.log(utenteAttivo);
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
       // console.log("venditore");

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



function getStatsNegozio() {
    
    // TODO: check che non siano liste vuote

    active_user = JSON.parse(window.localStorage.getItem("active_user"));
    if (active_user == null || active_user.type == "cliente") {
        return;
    }
    txt = `
    <p>Prezzo medio di vendita: ${prezzo_medio_vendita(active_user.film_vendita)}</p>
    <p>Prezzo medio di noleggio: ${prezzo_medio_noleggio(active_user.film_vendita)}</p>
    <p>Totale vendite: ${numero_vendite(active_user.film_vendita)}</p>
    <p>Fotale noleggi: ${numero_noleggi(active_user.film_vendita)}</p>
    <p>Film più venduto: ${filmPiuVenduto(active_user.film_vendita)}</p>
    <p>Film più noleggiato: ${filmPiuNoleggiato(active_user.film_vendita)}</p>
    `;
    return txt



    function prezzo_medio_vendita(ListFilmVendita) {
        var prezzo_medio_vendita = 0.0;
        var numero_vendite = 0;
        for (film of ListFilmVendita) {
            prezzo_medio_vendita += film.prezzoVendita;
            numero_vendite += 1;
        }
        return prezzo_medio_vendita / numero_vendite
    }

    function prezzo_medio_noleggio(ListFilmNoleggio) {
        var prezzo_medio_noleggio = 0.0;
        var numero_noleggi = 0;
        for (film of ListFilmNoleggio) {
            prezzo_medio_noleggio += film.prezzoNoleggio;
            numero_noleggi += 1;
        }
        return prezzo_medio_noleggio / numero_noleggi
    }

    function numero_vendite(ListFilm) {
        var numero_vendite = 0;
        for (film of ListFilm) {
            numero_vendite += film.vendite.length;
        }
        return numero_vendite
    }

    function numero_noleggi(ListFilm) {
        var numero_noleggi = 0;
        for (film of ListFilm) {
            numero_noleggi += film.noleggi.length;
        }
        return numero_noleggi
    }

    function filmPiuVenduto(ListFilm) {

        // gio : capire questa funzione 
        ListFilm.sort((a, b) => b.vendite.length - a.vendite.length)
        return ListFilm[0].id
    }

    function filmPiuNoleggiato(ListFilm) {
        ListFilm.sort((a, b) => b.noleggi.length - a.noleggi.length)
        return ListFilm[0].id
    }
    

}


function createCarouselRecensioni(recensioni) {
    
    if (recensioni.length == 0) {
        return "<p>no recensioni</p>";
    }

    elementi ='';
    first = true;
    
    for (recensione of recensioni) {
        console.log(recensione);
        var rating ='';
            console.log(recensione.voto);
            for ( i=0 ; i<recensione.voto; i++){
                rating += `<i class="fas fa-star"></i>`;
            }
            if (i<5){
                for (i=0 ; i<5-recensione.voto; i++){
                    rating+= `<i class="far fa-star"></i>`
                }
            }

        if (first) {
           // console.log(rating);
            elementi += `
                <div style='margin:0.5em;'class="carousel-item active">
                <p>Voto: ${rating} </p>
                <p>Titolo: ${recensione.titolo}</p>
                <p>Autore: ${recensione.autore}</p>
                <p>Contenuto: ${recensione.contenuto}</p>
                </div>
            `;
            first = false;
        } else {
            elementi += `
                <div style='margin:0.5em;' class="carousel-item">
                <p>Voto: ${rating}</p>
                <p>Titolo: ${recensione.titolo}</p>
                <p>Autore: ${recensione.autore}</p>
                <p>Contenuto: ${recensione.contenuto}</p>
                </div>
            `;
        }

    }

    return `
    <div id="carouselRecensioni" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            ${elementi}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselRecensioni" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselRecensioni" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    `;

}