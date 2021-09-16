// TODO: eliuminare rifatto
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
        // campo metodo di pagamento
        metodoPagamento = document.createElement("select");
        metodoPagamento.innerHTML = `
          <option selected value="null">Scegliere l'opzione &#8595;</option>
          <option value="CartaDiCredito">carta di credito</option>
          <option value="CartaPrepagata">carta prepagata</option>
        `;
        array.push(createFormElement(metodoPagamento, "metodoPagamento","portafogli.metodo"));

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

// TODO: eliuminare rifatto
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

function CreateForm2(type) {
  var form = document.getElementById('formRegistrazione')
  if (type == "Cliente") {
    form.style.display =""; 
    form.innerHTML = `
    <div class="mb-3">
        <label class="form-label"><b>Nome:</b></label>
        <input type="text" id="Nome" name="nome" onchange="checkparameters_registrazione2('${type}')" class="form-control">
    </div>
    <div class="mb-3">
        <label class="form-label"><b>Cognome:</b></label>
        <input type="text" id="Cognome" name="cognome" onchange="checkparameters_registrazione2('${type}')" class="form-control">
    </div>
    <div class="mb-3">
        <label class="form-label"><b>Data di nascita:</b></label>
        <input type="date" id="DataNascita" name="data" onchange="checkparameters_registrazione2('${type}')" class="form-control">
    </div>
    <div class="mb-3">
        <label class="form-label"><b>Telefono:</b></label>
        <input type="text" id="Telefono" name="telefono" onchange="checkparameters_registrazione2('${type}')" class="form-control">
    </div>
    <div class="mb-3">
        <label class="form-label"><b>Via:</b></label>
        <input type="text" id="Via" name="via" onchange="checkparameters_registrazione2('${type}')" class="form-control">
    </div>
    <div class="mb-3">
        <label class="form-label"><b>Numero Civico:</b></label>
        <input type="text" id="NumeroCivico" name="numcivico" onchange="checkparameters_registrazione2('${type}')" class="form-control">
    </div>
    <div class="mb-3">
        <label class="form-label"><b>Città:</b></label>
        <input type="text" id="Citta" name="citta" onchange="checkparameters_registrazione2('${type}')" class="form-control">
    </div>
    <div class="mb-3">
        <label class="form-label"><b>Provincia:</b></label>
        <input type="text" id="Provincia" name="provincia" onchange="checkparameters_registrazione2('${type}')" class="form-control">
    </div>
    <div class="mb-3">
        <label class="form-label"><b>Nazione:</b></label>
        <input type="text" id="Nazione" name="nazione" onchange="checkparameters_registrazione2('${type}')" class="form-control">
    </div>
    <div class="mb-3">
        <label class="form-label"><b>Metodo di Pagamento:</b></label>
        <select id="metodoPagamento" name="metodoPagamento" onchange="checkparameters_registrazione2('${type}')" class="form-control form-select">
            <option selected value="">Scegliere l'opzione</option>
            <option value="CartaDiCredito">carta di credito</option>
            <option value="CartaPrepagata">carta prepagata</option>
        </select></div>
    <div class="mb-3">
        <label class="form-label"><b>email:</b></label>
        <input type="email" id="email" name="email" onchange="checkparameters_registrazione2('${type}')" class="form-control">
    </div>
    <div class="mb-3">
        <label class="form-label"><b>Password:</b></label>
        <input type="password" id="Password" name="password" onchange="checkparameters_registrazione2('${type}')" class="form-control">
    </div>
    <div class="mb-3">
        <label class="form-label"><b>Conferma password:</b></label>
        <input type="password" id="ConfermaPassword" name="conferma_password" onchange="checkparameters_registrazione2('${type}')" class="form-control">
    </div>
    <div class="mb-3">
        <input class="form-check-input" type="checkbox" id="Privacy" onchange="checkparameters_registrazione2('${type}')">
        <label class="form-check-label" for="Privacy">Privacy e preferenze</label>
    </div>
    <button class="btn btn-primary" id="submit_registrazione" disabled="" onclick="Registrazione2('${type}')">Invia</button>
    `;
  } else if (type == "Venditore") {
    form.style.display ="";
    form.innerHTML = `
    <div class="mb-3">
        <label class="form-label"><b>Nome del Negozio:</b></label>
        <input type="text" id="NomeNegozio" onchange="checkparameters_registrazione2('${type}')" class="form-control">
    </div>
    <div class="mb-3">
        <label class="form-label"><b>Telefono:</b></label>
        <input type="text" id="Telefono" onchange="checkparameters_registrazione2('${type}')" class="form-control">
    </div>
    <div class="mb-3">
        <label class="form-label"><b>Partita Iva:</b></label>
        <input type="text" id="PartitaIva" onchange="checkparameters_registrazione2('${type}')" class="form-control">
    </div>
    <div class="mb-3">
        <label class="form-label"><b>email:</b></label>
        <input type="email" id="email" onchange="checkparameters_registrazione2('${type}')" class="form-control">
    </div>
    <div class="mb-3">
        <label class="form-label"><b>Password:</b></label>
        <input type="password" id="Password" onchange="checkparameters_registrazione2('${type}')" class="form-control">
    </div>
    <div class="mb-3">
        <label class="form-label"><b>Conferma password:</b></label>
        <input type="password" id="ConfermaPassword" onchange="checkparameters_registrazione2('${type}')" class="form-control">
    </div>
    <button class="btn btn-primary" id="submit_registrazione" disabled="" onclick="Registrazione2('${type}')">Invia</button>
    `;
  } else {
    form.style.display = "none";
    form.innerHTML = '';
  }
}



function sfondo_reg(){
  scroller=document.getElementById('scroller_reg');
  get("https://api.themoviedb.org/3/discover/movie?api_key=2bb75004dddb3cae50be3c30cc0f551d&sort_by=popularity.desc&include_adult=true&include_video=false", function(response){
      var immagini = [];
      len = response.results.length;
      for ( i = 0 ; i<response.results.length; i++){
          if (response.results[i].backdrop_path) {
            immagini.push("https://www.themoviedb.org/t/p/original"+response.results[i].backdrop_path);       
          }
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
    //console.log(listadiv[0].childNodes[0]);
    for ( i=0 ; i<listadiv.length; i++){
        scroller.appendChild(listadiv[i]);
    }

  });
}

function Registrazione2(type) {

    if (type == "Cliente") {
        RegistraCliente()
    } else if (type == "Venditore") {
        RegistraVenditore()
    }

    function RegistraCliente() {

        clienti = window.localStorage.getItem("clienti");
        clienti = JSON.parse(clienti);
        
        cliente = {
            "nome": document.getElementById('Nome').value,
            "cognome": document.getElementById('Cognome').value,
            "data": document.getElementById('DataNascita').value,
            "telefono": document.getElementById('Telefono').value,
            "via": document.getElementById('Via').value,
            "numcivico": document.getElementById('NumeroCivico').value,
            "citta": document.getElementById('Citta').value,
            "provincia": document.getElementById('Provincia').value,
            "nazione": document.getElementById('Nazione').value,
            "email": document.getElementById('email').value,
            "password": document.getElementById('Password').value,
            "portafogli":  { "metodo": document.getElementById('metodoPagamento').value, "saldo": 0 },
            "type": "cliente",
            "film_preferiti":   [],
            "generi_preferiti": [],
            "film_acquistati":  [],
            "film_noleggiati": [],
            "privacy": document.getElementById('Privacy').checked,
        }
        

        clienti.push(cliente);

        window.localStorage.setItem("clienti", JSON.stringify(clienti));
        window.localStorage.setItem("active_user",JSON.stringify(cliente));

    }

    function RegistraVenditore() {

        venditori = window.localStorage.getItem("venditori");
        venditori = JSON.parse(venditori);

        venditore = {
            "nomenegozio": document.getElementById('NomeNegozio').value,
            "telefono": document.getElementById('Telefono').value,
            "partitaiva": document.getElementById('PartitaIva').value,
            "email": document.getElementById('email').value,
            "password": document.getElementById('Password').value,
            "portafogli":   { "saldo": 0 },
            "type": "venditore",
            "film_vendita": [],
            "recensioni": []
        }

        venditori.push(venditore);

        window.localStorage.setItem("venditori", JSON.stringify(venditori));
        window.localStorage.setItem("active_user",JSON.stringify(venditore));

    }
    window.location.assign('./paginaPersonale.html')
}