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
    clienti = JSON.parse(window.localStorage.getItem("clienti"));
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

function getFilmCorr(id){
    scroller = document.getElementById('scroller_film_correlati');
    get("https://api.themoviedb.org/3/movie/"+id+"/similar?api_key=2bb75004dddb3cae50be3c30cc0f551d", function(response){
        for ( i=0 ; i<response.results.length; i++){
            card = createCard(response.results[i]);
            scroller.appendChild(card);
        }
    });
}