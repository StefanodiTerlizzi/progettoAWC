

function elencoVenditori() {

    venditori = JSON.parse(window.localStorage.getItem("venditori"));

    txt ='';
    
    for (venditore of venditori) {
        txt += `
        <div class="card bg-dark border border-white m-2" style="max-width: 20em;">
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

/*
active_user = JSON.parse(window.localStorage.getItem("venditori"));
        
        if (active_user != null && active_user.type == "cliente") {
            document.write(elencoVenditori(true))
        } else {
            document.write(elencoVenditori(false))
        }

    
if (cliente) {
    // bottone lascia recensione
} else {
    // non bottone lascia recensione
}
*/

function compilaModal(emailVenditore) {

    venditori = JSON.parse(window.localStorage.getItem("venditori"));
    active_user = JSON.parse(window.localStorage.getItem("venditori"));


    index = venditori.findIndex(vend => vend.email == emailVenditore)
    venditore = venditori[index]

    if (active_user != null && active_user.type == "cliente") {
        // bottone lascia recensione, compra, noleggia
        rowFilmVendita = generaCardFilms(true)
    } else {
        // non bottone lascia recensione, no compra, no noleggia
        rowFilmVendita = generaCardFilms(false)
    }

    



    document.getElementById("ModalVenditore").innerHTML = `
    <div class="container">
        <div class="row">
            <div class="col">
            film in vendita
            </div>
            <div class="col">
            2 of 2
            </div>
        </div>
        <div class="row">
            <div class="col">
            1 of 3
            </div>
            <div class="col">
            2 of 3
            </div>
            <div class="col">
            3 of 3
            </div>
        </div>
    </div>
    film in vendita: ${JSON.stringify(venditore.film_vendita)}
    `;



    function generaCardFilms(cliente) {
        if (cliente) {
            return `
            <div class="card text-white bg-dark mb-3" style="max-width: 18rem; margin: 1em;">
                <img src="https://www.themoviedb.org/t/p/original${obj.poster_path}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${obj.title}</h5>
                    
                    <a href="./film_description.html?id=${obj.id}" class="btn btn-primary">visualizza</a>
                </div>
            </div>
            `;

        } else {
            return `
            <div class="card text-white bg-dark mb-3" style="max-width: 18rem; margin: 1em;">
                <img src="https://www.themoviedb.org/t/p/original${obj.poster_path}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${obj.title}</h5>
                    
                    <a href="./film_description.html?id=${obj.id}" class="btn btn-primary">visualizza</a>
                </div>
            </div>
            `;
        }

        return txt
    }
    
}