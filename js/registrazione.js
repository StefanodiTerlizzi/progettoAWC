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