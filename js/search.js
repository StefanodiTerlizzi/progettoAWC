function multiSearchResult(query) {
    get("https://api.themoviedb.org/3/search/multi?api_key=2bb75004dddb3cae50be3c30cc0f551d&query="+query, function(response){                
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
            }
        }               
    });
}

function genereSearchResult(genere) {
    get("https://api.themoviedb.org/3/discover/movie?api_key=2bb75004dddb3cae50be3c30cc0f551d&sort_by=popularity.desc&with_genres="+genere, function(response){                
        for (obj of response.results) {
            document.getElementById("resultsFilms").innerHTML += createFilm(obj)
        }
    });
}

function companySearchResult(company) {
    get("https://api.themoviedb.org/3/search/company?api_key=2bb75004dddb3cae50be3c30cc0f551d&query="+company, function(response){                
        //console.log("company", response.results)
        x = response.results
        for (obj of response.results) {
            document.getElementById("resultsCompanies").innerHTML += createCompany(obj)
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

    films = obj.known_for.filter(film => film.media_type == "movie") // tiene film con media_type == "movie"

    card += createCarousel(obj.id, films)
    

    card += "</div></div></div></div>";
    return card;
}

function createCarousel(id, films) {
    if (films.length == 0) {
        return "<p>no films</p>";
    }
    var carousel = `
    <div id="carousel${id}" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
    `;

    first = true;
    for (film of films) {

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
            
        
    }

    carousel += `
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carousel${id}" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carousel${id}" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    </div>
    `;

    return carousel;

}

function createCompany(obj) {

    var card = `
    <div class="card text-white bg-dark mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
            <div class="card bg-dark text-white">
    `;
    if (obj.logo_path != null) {
        card += `<img src="https://www.themoviedb.org/t/p/original${obj.logo_path}" class="card-img" alt="...">`;
    } else {
        card += `<img src="" class="card-img" alt="...">`;
    }
    card += `
                <div class="card-img-overlay">
                    <h5 class="card-title">${obj.name}</h5>
                </div>
            </div>
            </div>
            <div class="col-md-8">
            <div class="card-body">
    `;

    var request = new XMLHttpRequest();
    
    request.open('GET', "https://api.themoviedb.org/3/discover/movie?api_key=2bb75004dddb3cae50be3c30cc0f551d&sort_by=popularity.desc&with_companies="+obj.id, false);  // `false` makes the request synchronous
    
    request.send();

    if (request.status === 200) {
        card += createCarousel(obj.id, JSON.parse(request.response).results)
    }

    card += "</div></div></div></div>";

    return card;
}