var navbar = `
<script>
init()
</script>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav  mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./paginaPersonale.html">User <i class="fas fa-users-cog"></i></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" target="_blank" rel="noopener noreferrer" data-bs-toggle="modal" data-bs-target="#SearchModal">complete search</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown" style="margin-right : 0px!important;">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </li>
        <!--
        <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
            -->
        </ul>
        <form action="./search.html" class="d-flex" style="margin-left:auto; margin-right:auto; width:60%;">
            <input class="form-control me-2 search_bar" type="search" placeholder="Search Movie and Person" aria-label="Search" name="QueryToSearch">
            <input type="hidden" name="TypeOfSearch" value="multi">
            <!--
            <select id="TypeOfSearch" name="TypeOfSearch">
                <option value="movie">movie</option>
                <option value="person">person</option>
                <option value="company">company</option>
                <option value="collection">collection</option>
                <option value="keyword">keyword</option>
                <option value="multi">multi</option>
            </select>
            -->
            
            <button type='submit' class="search" ><i class="fas fa-search"></i></button>
        </form>
        <form action="./signup.html">
            <button   id='submit_logout' type="submit" onclick="window.localStorage.setItem('active_user', null); alert('Logout eseguito con sucesso')">Logout <i class="fas fa-sign-out-alt"></i></button>
        </form>
    </div>
    </div>
</nav>
`;

navbar += `
<!-- OVERLAY SEARCH -->
<div class="modal fade" id="SearchModal" tabindex="-1" aria-labelledby="SearchModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content bg-dark text-white">
            <div class="modal-header" style="border-bottom: 0px;">
                <h5 class="modal-title" id="SearchModalLabel">complete search</h5>
                <button onclick="stopvideo()" type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" ></button>
            </div>
            <div class="modal-body">
                <!-- search genere -->
                <form action="./search.html" class="d-flex" style="margin-left:auto; margin-right:auto; width:60%;">
                    <label>search by genere</label>
                    <select name="genere" id="genere" class="form-select" aria-label="Default select example" onchange="(this.value == 'null') ? (this.parentNode.lastElementChild.disabled =  true) : (this.parentNode.lastElementChild.disabled =  false)">
                        <option value=null selected>seleziona genere</option>
                    </select>
                    <button disabled type='submit' class="search" id="searchGenere" ><i class="fas fa-search"></i></button>
                </form>
                <!-- search genere -->
                <!-- search company -->
                <form action="./search.html" class="d-flex" style="margin-left:auto; margin-right:auto; width:60%;">

                    <label>search by company</label>
                    <input type="text" name="company" placeholder="Company name" onchange="(this.value == '') ? (this.parentNode.lastElementChild.disabled =  true) : (this.parentNode.lastElementChild.disabled =  false)">

                    <button disabled type='submit' class="search" id="searchGenere" ><i class="fas fa-search"></i></button>
                </form>
                <!-- search company -->
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
    <h5 style='font-weight:medium;'>Assistenza</h5>
    <div style = "font-size:15px;">
        <div>Chi siamo</div>
        <div> FAQ </div>
        <div> Contatti </div>
    </div>
    </div>
</div>
`;

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