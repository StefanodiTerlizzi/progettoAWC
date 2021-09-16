// script recupero film x scroller
function creazionePag(generi){
    get("https://api.themoviedb.org/3/movie/popular?api_key=2bb75004dddb3cae50be3c30cc0f551d&language=en-US&page=1", function(response){
        scroller = document.getElementById('scroller_popolari');
        for ( i = 0 ; i<response.results.length; i++){
            film = response.results[i];
            card = createCard(film);
            scroller.appendChild(card);
        }
    });

    get("https://api.themoviedb.org/3/movie/top_rated?api_key=2bb75004dddb3cae50be3c30cc0f551d&language=en-US&page=1", function(response){
        scroller1 = document.getElementById("scroller_toprated");
        for ( i = 0 ; i<response.results.length; i++){
            film = response.results[i];
            card = createCard(film);
            scroller1.appendChild(card); 
        }
    });

    get("https://api.themoviedb.org/3/movie/upcoming?api_key=2bb75004dddb3cae50be3c30cc0f551d&language=en-US&page=1", function(response){
        scroller2 = document.getElementById("scroller_upcoming");
    for ( i = 0 ; i<response.results.length; i++){
        film = response.results[i];
        card = createCard(film);
        scroller2.appendChild(card); 
    }
    });

    active_user =  getActiveUser();

    if (active_user && active_user.privacy) {
        
        document.getElementById("film_scelti_per_te").style.display = ""; 
        document.getElementById("link-film_scelti_per_te").style.display = ""; 

        generi = (active_user.generi_preferiti).toString()

        get("https://api.themoviedb.org/3/discover/movie?api_key=2bb75004dddb3cae50be3c30cc0f551d&sort_by=popularity.desc&with_genres="+generi, function(response){          
            
            scroller2=document.getElementById('scroller_scelti_per_te');     
        
            for (film of response.results) {
                card = createCard(film);
                scroller2.appendChild(card); 
            }
            
        });

    } else {
        document.getElementById("film_scelti_per_te").style.display = "none"; 
        document.getElementById("link-film_scelti_per_te").style.display = "none"; 
    }

}