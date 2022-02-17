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