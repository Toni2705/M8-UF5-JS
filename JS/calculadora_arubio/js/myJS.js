function calcula(calculadora) {
    document.getElementById('texto').value+=(calculadora);
}
function borrar() {
    document.getElementById('texto').value='';
}
function evalua() {
    var resultado=document.getElementById('texto').value;
    document.getElementById('texto').value=eval(resultado);
}
