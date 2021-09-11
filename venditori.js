venditori = JSON.parse(window.localStorage.getItem("venditori"));

function elencoVenditori() {

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

    index = venditori.findIndex(vend => vend.email == emailVenditore)
    venditore = venditori[index]

    document.getElementById("ModalVenditore").innerHTML = `
    film in vendita: ${JSON.stringify(venditore.film_vendita)}
    `;
    
}