function trivial() {
    var nombre = document.getElementById('nom').value;
    var apellido = document.getElementById('cognom').value;
    var edad = document.getElementById('edad').value;

    /*localStorage.setItem("Nombre", nombre);
    localStorage.setItem("Apellido", apellido);
    localStorage.setItem ("Edad", contrasenya);*/

    if (document.getElementById('edad').value >= 18) {
        window.location.href = "./web/trivial.api.htm";
    }
    else {
        alert("No hi pots accedir!")
    }
}
/*function trivial2(){
    var nombre = document.getElementById('nom').value;
    var apellido = document.getElementById('cognom').value;
    var contrasenya = document.getElementById('edad').value;

    if (localStorage.getItem("Nombre").value = document.getElementById('nom')){
        window.location.href = "./web/trivial.api.htm";
    }

    else {
        alert("No hi pots accedir!");
    }
}
*/
var contingut = document.querySelector('#contingut')
function agafar() {
fetch('https://randomuser.me/api/')
.then(res => res.json())
.then(data => {
console.log(data.results['0'])
contingut.innerHTML = `
<img src="${data.results['0'].picture.large}"
width="100px" class="img-fluid rounded-circle">
<p>Nombre: ${data.results['0'].name.last}</p>
`
})
}

function respuesta(){
    var respuesta1 = "4";
    var respuesta2 = "LOL";
    var respuesta3 = "Tanjiro Kamado";
    var respuesta4 = "Guinea Ecuatorial";
    var respuesta5 = "OBVIO QUE SI PAPÁ";

    if (document.getElementById('res1').value == respuesta1) {
        document.getElementById('respuesta1').innerHTML = respuesta1
    }
    else {
        document.getElementById('respuesta1').innerHTML = respuesta1
    }


    if (document.getElementById('res2').value == respuesta2) {
        document.getElementById('respuesta2').innerHTML = respuesta2
    }
    else {
        document.getElementById('respuesta2').innerHTML = respuesta2
    }


    if (document.getElementById('res3').value == respuesta3) {
        document.getElementById('respuesta3').innerHTML = respuesta3
    }
    else {
        document.getElementById('respuesta3').innerHTML = respuesta3
    }


    if (document.getElementById('res4').value == respuesta4) {
        document.getElementById('respuesta4').innerHTML = respuesta4
    }
    else {
        document.getElementById('respuesta4').innerHTML = respuesta4
    }


    if (document.getElementById('res5').value == respuesta5) {
        document.getElementById('respuesta5').innerHTML = respuesta5
    }
    else {        
        document.getElementById('respuesta5').innerHTML = respuesta5
    }
}
