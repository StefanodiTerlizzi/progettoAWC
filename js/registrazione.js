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
  get("https://api.themoviedb.org/3/discover/movie?api_key=2bb75004dddb3cae50be3c30cc0f551d&sort_by=popularity.desc", function(response){
    
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