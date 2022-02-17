function enviarSalutacio() {
    var nom = document.getElementById('nom');
    var cognom = document.getElementById('cognom');

    document.getElementById('salutacio').innerHTML = "Hola" + nom + cognom + "Moltes gracies!";
}