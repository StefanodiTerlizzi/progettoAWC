var navbar = `
<script>
init()
</script>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">

        <a class="navbar-brand" href="./index.html"><i class="fas fa-home"></i></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav  mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="./paginaPersonale.html">User <i class="fas fa-users-cog"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="./venditori.html">Venditori <i class="fas fa-dollar-sign"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="./registrazione.html">Registrazione</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="./signup.html" id="LinkAccedi">Accedi</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" target="_blank" rel="noopener noreferrer" data-bs-toggle="modal" data-bs-target="#SearchModal">Search <i class="fas fa-search"></i></a>
                </li>
            </ul>
            <div class="d-flex mx-auto"></div>
            <button id='submit_logout' onclick="logout()">Logout <i class="fas fa-sign-out-alt"></i></button>
        </div>
    </div>
</nav>
`;

navbar += `
<!-- OVERLAY SEARCH -->

<div style='margin-right:2em;'class="modal fade" id="SearchModal" tabindex="-1" aria-labelledby="SearchModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content bg-dark text-white">
            <div class="modal-header" style="border-bottom: 0px;">
                <h5 class="modal-title" id="SearchModalLabel">Complete search</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" ></button>
            </div>
            <div class="modal-body">

                <!-- search genere -->
                <form action="./search.html" class="d-flex mx-auto mb-3">
                    <label>Search by genere</label>
                    <select name="genere" id="genere" class="form-select" aria-label="Default select example" onchange="(this.value == 'null') ? (this.parentNode.lastElementChild.disabled =  true) : (this.parentNode.lastElementChild.disabled =  false)">
                        <option value=null selected>seleziona genere</option>
                    </select>
                    <button disabled type='submit' class="search" id="searchGenere" ><i class="fas fa-search"></i></button>
                </form>
                <!-- search genere -->

                <!-- search company -->
                <form action="./search.html" class="d-flex mx-auto mb-3">

                    <label>Search by company</label>
                    <input type="text" name="company" placeholder="Company name" class="form-text" style="width: 100%;" onchange="(this.value == '') ? (this.parentNode.lastElementChild.disabled =  true) : (this.parentNode.lastElementChild.disabled =  false)">

                    <button disabled type='submit' class="search" id="searchGenere" ><i class="fas fa-search"></i></button>
                </form>
                <!-- search company -->
                
                <!-- search multi -->
                <form action="./search.html" class="d-flex mx-auto mb-3" >
                    <label>Search by title or actor</label>
                    <input type="text" name="multiSearch" placeholder="title or actor" class="form-text" style="width: 100%;" onchange="(this.value == '') ? (this.parentNode.lastElementChild.disabled =  true) : (this.parentNode.lastElementChild.disabled =  false)">
                    <button disabled type='submit' class="search"><i class="fas fa-search"></i></button>
                </form>
                <!-- search multi -->

            </div>
        </div>
    </div>
</div>
<!-- OVERLAY -->

<script>
generate_complete_search()
</script>
`;


var footer = `
<div style='margin:2em;border-top:2px solid gray;'class="row">
    <div class="col-md-4" style ="margin-top:1em; margin-bottom:2em; color:#c1c1c1">
        <h5 style='font-weight: medium;'>Metodi di pagamento</h5>
            <div style = "font-size:30px;">
            <i class="fab fa-cc-visa"></i>
            <i class="fab fa-cc-paypal"></i>
            <i class="fab fa-cc-mastercard"></i>
            <i class="fab fa-cc-apple-pay"></i>
            <br>
            <i class="fab fa-cc-amex"></i>
            <i class="fab fa-cc-stripe"></i>
            <i class="fab fa-cc-jcb"></i>
            <i class="fab fa-cc-discover"></i>
            </div>
    </div>
    <div class="col-md-4" style ="margin-top:1em; margin-bottom:2em; color:#c1c1c1">
        <h5 style='font-weight: medium;'>Guarda su</h5>
        <div style = "font-size:30px;">
            <i class="fas fa-laptop"></i>
            <i class="fas fa-tablet-alt"></i>
            <i class="fas fa-mobile-alt"></i>
            <i class="fas fa-desktop"></i>
        </div>
    </div>
    <div class="col-md-4"> 
    <h5 style='font-weight:medium;margin:0.5em;'>Assistenza</h5>
    <div style = "font-size:15px;">
        <div>Chi siamo</div>
        <div> FAQ </div>
        <div> Contatti </div>
    </div>
    </div>
</div>
`;

// scarica lista generi da mettere in ricerca
function generate_complete_search() {
    //genere search
    get("https://api.themoviedb.org/3/genre/movie/list?api_key=2bb75004dddb3cae50be3c30cc0f551d", function(response){                
        //console.log("get response: ", response);
        //console.log("funzione search")
        for (obj of response.genres) {
            //console.log(obj)
            document.getElementById("genere").innerHTML +=  `
            <option value="${obj.id}">${obj.name}</option>
            `;
        }
    });

}

function init() {
    // hasownproperty: esiste un venditore nel localstorage?
    if (window.localStorage.hasOwnProperty("venditori") && window.localStorage.hasOwnProperty("clienti")) {
        return
    } else {
        window.localStorage.setItem("venditori", JSON.stringify(data.venditori));
        window.localStorage.setItem("clienti", JSON.stringify(data.clienti));
    }
}

function logout() {
    active_user = getActiveUser()
    if (active_user != null) {
        window.localStorage.setItem('active_user', null)
        alert('Logout eseguito con sucesso')
        window.location.assign('./signup.html');
    }
}