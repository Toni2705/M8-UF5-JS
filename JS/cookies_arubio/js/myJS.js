function comprovar() {
    if (document.getElementById('user').value == 'Ibai') {
        if (document.getElementById('passw').value == '1234') {
            if (document.getElementById('passw2').value == document.getElementById('passw').value) {
                alert ("Contrasenya i Usuari correctes");
            }
            else {
                alert ("Error, torna a ingresar les dades");
            }
        }
        else {
            alert ("Error, torna a ingresar les dades");
        }
    }
    else {
        alert ("Error, torna a ingresar les dades");
    }
}
function guardar() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var contrasenya = document.getElementById('passw').value;
    
    localStorage.setItem("Nombre", nombre);
    localStorage.setItem("Apellido", apellido);
    
    if (document.getElementById('passw2').value == document.getElementById('passw').value) {
        localStorage.setItem("Contrasenya", contrasenya);
        if (localStorage.getItem("Contrasenya")) {
            alert ("Pots accedir :D");
        }
    }
    else {
        alert ("No pots accedir");
    }
    
}
function recuperar() {
    localStorage.getItem("Nombre");
    localStorage.getItem("Apellido");
    console.log(localStorage.getItem("Nombre")+" ***** "+localStorage.getItem("Apellido"));
}
function borrar() {
    localStorage.removeItem("Nombre");
    localStorage.removeItem("Apellido");
    localStorage.removeItem("Contrasenya");
}