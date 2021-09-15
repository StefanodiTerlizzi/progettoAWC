function elencoVenditori() {

    venditori = JSON.parse(window.localStorage.getItem("venditori"));

    txt ='';
    
    for (venditore of venditori) {
        txt += `
        <div class="card bg-dark border border-white mt-4 ms-2" style="max-width: 20em;">
            <h5 class="card-header">${venditore.nomenegozio}</h5>
            <div class="card-body">
                <h5 class="card-title">email: <a href="mailto:${venditore.email}">${venditore.email}</a></h5>
                <p class="card-text">
                    partita iva: ${venditore.partitaiva}<br>
                    telefono: <a href="tel: +39${venditore.telefono}">${venditore.telefono}</a><br>
                    totale film in vendita: ${venditore.film_vendita.length}<br>
                    media voti: ${MediaVotoRecensioni(venditore.recensioni)}<br>
                </p>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ModalFullscreen" onclick="compilaModal('${venditore.email}')">Dettagli</button>
            </div>
        </div>
        `; 

    }
    return txt;


    function MediaVotoRecensioni(Recensioni) {
        var sommaVoti = 0;
        for (recensione of Recensioni) {
            sommaVoti += recensione.voto;
        }
        return (sommaVoti / Recensioni.length);
    }



}

function compilaModal(emailVenditore) {

    active_user = getActiveUser();

    venditori = JSON.parse(window.localStorage.getItem("venditori"));
    index = venditori.findIndex(vend => vend.email == emailVenditore)
    venditore = venditori[index]

    document.getElementById('ModalFullscreenLabel').innerHTML = venditore.nomenegozio

    if (active_user != null && active_user.type == "cliente") {
        // bottone lascia recensione, compra, noleggia
        generaCardFilms(venditore.film_vendita, {"emailCliente": active_user.email,"emailVenditore": venditore.email})
    } else {
        // non bottone lascia recensione, no compra, no noleggia
        generaCardFilms(venditore.film_vendita)
    }

    


    /*
    document.getElementById("ModalVenditore").innerHTML += `
    film in vendita: ${JSON.stringify(venditore.film_vendita)}
    `;
    */



    function generaCardFilms(FilmVendita, ParametroEmail = null) {
        rowFilmVendita = document.getElementById("rowFilmVendita");

        rowFilmVendita.innerHTML = '';
        
        for (film of FilmVendita) {

            get("https://api.themoviedb.org/3/movie/"+film.id+"?api_key=2bb75004dddb3cae50be3c30cc0f551d", function(response, otherParams){
                //console.log(response)
                //console.log(otherParams)

                bottoni = '';
                if (ParametroEmail != null) {
                    bottoni = `
                    <button class="btn btn-primary m-2" onclick="AcquistaFilm('${ParametroEmail.emailCliente}', '${ParametroEmail.emailVenditore}', '${response.id}', ${otherParams.prezzoVendita})"><i class="fas fa-shopping-cart"></i> compra</button>
                    <button class="btn btn-success m-2" onclick="NoleggiaFilm('${ParametroEmail.emailCliente}', '${ParametroEmail.emailVenditore}', '${response.id}', ${otherParams.prezzoNoleggio})"><i class="fas fa-caret-square-right"></i> noleggia</button>
                    `;
                }
                

                rowFilmVendita.innerHTML += `
                <div class="card text-white bg-dark mb-3" style="max-width: 15rem; margin: 1em;">
                    <a href="./film_description.html?id=${response.id}">
                        <img ${setSrcImgApi(response.poster_path)} class="card-img-top">
                    </a>
                    <div class="card-body" style="text-align: center;">
                        <h5 class="card-title">${response.title}</h5>
                        ${bottoni}
                    </div>
                </div>
                `;

            }, film );    
        }

        if (ParametroEmail != null) {
            document.getElementById("rowRecensione").innerHTML = `
            <h5 >Lascia una recensione</h5>
            <div class="row border border-white">
<!--email-->
                <div class="mb-3 row">
                    <label class="col-sm-1 col-form-label">Email: </label>
                    <div class="col-sm-11">
                        <input type="text" readonly class="form-control-plaintext text-white" id="emailCliente" value="${ParametroEmail.emailCliente}">
                    </div>
                </div>
<!--voto-->
                <div class="mb-3 row">
                    <label for="voto" class="col-sm-1 col-form-label">Voto :</label>
                    <div class="col-sm-11">
                    <input id="rating" type="hidden"/>

                    <div class="rate">
                    <input type="radio" onclick="document.getElementById('rating')=this.value " id="star5" name="rate" value="5" />
                    <label for="star5" title="text">5 stars</label>
                    <input type="radio" onclick="document.getElementById('rating')=this.value " id="star4" name="rate" value="4" />
                    <label for="star4" title="text">4 stars</label>
                    <input type="radio" onclick="document.getElementById('rating')=this.value " id="star3" name="rate" value="3" />
                    <label for="star3" title="text">3 stars</label>
                    <input type="radio" onclick="document.getElementById('rating')=this.value " id="star2" name="rate" value="2" />
                    <label for="star2" title="text">2 stars</label>
                    <input type="radio" onclick="document.getElementById('rating')=this.value " id="star1" name="rate" value="1" />
                    <label for="star1" title="text">1 star</label>
                    </div>
    
                    <input class="form-check-input" name="rating" type="radio" id="rate1" value=1 onclick="document.getElementById('rating').value = this.value" /> 
                    <label for="rate1">1</label>
                    <input class="form-check-input" name="rating" type="radio" id="rate2" value=2 onclick="document.getElementById('rating').value = this.value" /> 
                    <label for="rate2">2</label>
                    <input class="form-check-input" name="rating" type="radio" id="rate3" value=3 onclick="document.getElementById('rating').value = this.value" /> 
                    <label for="rate3">3</label>
                    <input class="form-check-input" name="rating" type="radio" id="rate4" value=4 onclick="document.getElementById('rating').value = this.value" /> 
                    <label for="rate4">4</label>
                    <input class="form-check-input" name="rating" type="radio" id="rate5" value=5 onclick="document.getElementById('rating').value = this.value" /> 
                    <label for="rate5">5</label>
                    </div>
                </div>
                
<!--titolo-->
                <div class="mb-3 row">
                    <label for="titolo" class="col-sm-1 col-form-label">Titolo : </label>
                    <div class="col-sm-11">
                    <input type="text" class="form-control" id="titolo">
                    </div>
                </div>

<!--contenuto-->
                <div class="mb-3">
                    <label class="form-label">Scrivi recensione</label>
                    <textarea class="form-control" id="Recensione-contenuto" rows="3"></textarea>
                </div>
<!-- button -->
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" onclick="InviaRecensioneVenditore('${ParametroEmail.emailCliente}', '${ParametroEmail.emailVenditore}')">invia recensione</button>
            </div>
            `;
        }



    }


    function get(url, callback, otherParams = null) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true); 
        xhr.responseType = 'json';
    
        xhr.onload = function() { // cosa fa quando ottengo la risposta
            if (xhr.status<200 || xhr.status>299) {
                return window.location.assign('./404.html');
            }
            callback(xhr.response, otherParams);
        }; // fine cosa fa quando ottengo la risposta
    
        xhr.send();
    
    }


    
}

function InviaRecensioneVenditore(emailAutore, emailNegozio) {

    venditori = JSON.parse(window.localStorage.getItem("venditori"));

    voto = document.getElementById("rating").value
    titolo = document.getElementById("titolo").value
    contenuto = document.getElementById("Recensione-contenuto").value

    recensione = {"voto": Number(voto), "titolo": titolo, "contenuto": contenuto, "autore": emailAutore, "data": new Date()}

    index = venditori.findIndex(venditore => venditore.email === emailNegozio);
    venditori[index].recensioni.push(recensione)

//    console.log("voto", voto)
//    console.log("titolo", titolo)
//    console.log("contenuto",contenuto)
//    console.log("emailAutore",emailAutore)
//    console.log("data", new Date())
//    console.log("emailNegozio",emailNegozio)

    window.localStorage.setItem("venditori", JSON.stringify(venditori));

}