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
            //console.log(btn);
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



