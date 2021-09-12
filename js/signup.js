function login() {
    clienti = JSON.parse(window.localStorage.getItem("clienti"));
    venditori = JSON.parse(window.localStorage.getItem("venditori"));

   // console.log(venditori);
    email = document.getElementById('login_email').value
    //console.log(email);
    password = document.getElementById('login_password').value
    for (var i = 0; i < clienti.length; i++) {
        if (email == clienti[i].email && password == clienti[i].password ) {
            //login corretto
            window.localStorage.setItem("active_user", JSON.stringify(clienti[i]));
           // alert('login corretto');
            btn = document.getElementById('submit');
            console.log(btn);
           // btn.setAttribute=("href",'./paginaPersonale.html');
            //window.location.href='./paginaPersonale.html';
            return;
        }
    }
    for (var i = 0; i < venditori.length; i++) {
        if (email == venditori[i].email && password == venditori[i].password ) {
            //login corretto
           // alert("login corretto");
            window.localStorage.setItem("active_user", JSON.stringify(venditori[i]));
           // document.getElementById.
            return;
        }
    }

  //  alert("non corretto");
}

function sfondo(){
    sfondo=document.getElementById('sfondo');  
    get("https://api.themoviedb.org/3/discover/movie?api_key=2bb75004dddb3cae50be3c30cc0f551d&sort_by=popularity.desc&include_adult=true&include_video=false", function(response){
        var immagini = [];
        len = response.results.length;
        for ( i = 0 ; i<response.results.length; i++){
            immagini.push("https://www.themoviedb.org/t/p/original"+response.results[i].backdrop_path);
        }
        
        num =  getRandomInt(len);
        
        sfondo.background=immagini[num];
        sfondo.style='background-repeat:no-repeat; background-size:1480px 850px; background-position:scroll; background-color:rgba(0,0,0,0.5);';

    
      
    });
      
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}