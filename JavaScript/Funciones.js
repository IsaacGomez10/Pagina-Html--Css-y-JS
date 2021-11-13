/*-header responsive-*/

const botonMenu = document.querySelector(".boton-menu");
const menu = document.querySelector(".menu");

botonMenu.addEventListener("click", () => {
    botonMenu.classList.toggle("active");
    menu.classList.toggle("active");
});



/*-modificar palabra-*/
function convertir(tipo) {

    var palabra = document.getElementById("palabra");
    var texto = palabra.value;

    if (tipo == 1) {
        var leng = texto.length;
        vista = document.getElementById("vista").innerHTML = ("La palabra tiene " + leng + " caracteres");
    } else if (tipo == 2) {
        palabra.value = texto.toUpperCase();
    } else if (tipo == 3) {
        palabra.value = texto.toLowerCase();
    } else if (tipo = 4) {
        palabra.value = (texto[0]);
        document.getElementById("vista").innerHTML = ("Primer caracter es: " + palabra.value);
    }

}

/*-calculadora básica-*/

function limpiar() {
    document.getElementById("formulario").reset();
}

function resultado() {

    var x = document.getElementById("numero1").value;
    x = parseInt(x)
    var y = document.getElementById("numero2").value;
    y = parseInt(y)
    var resultado = document.getElementById("operacion").value;

    switch (resultado) {
        case "1":
            var suma = (x + y);
            vista2 = document.getElementById("vista2").innerHTML = ("su resultado es: " + suma);
            break

        case "2":
            var resta = (x - y);
            vista2 = document.getElementById("vista2").innerHTML = ("su resultado es: " + resta);
            break
        case "3":
            var multiplicacion = (x * y);
            vista2 = document.getElementById("vista2").innerHTML = ("su resultado es: " + multiplicacion);
            break
        case "4":
            var divicion = (x / y);
            vista2 = document.getElementById("vista2").innerHTML = ("su resultado es: " + divicion);
            break
    }

}



