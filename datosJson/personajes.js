
const botonMenu = document.querySelector(".boton-menu");
const menu = document.querySelector(".menu");

botonMenu.addEventListener("click", () => {
    botonMenu.classList.toggle("active");
    menu.classList.toggle("active");
});

/*Mostrando datos en tablas-*/
//console.log('Ingreso');

document.querySelector('#encontrar').addEventListener('click', traerDatos());

function traerDatos() {

    //console.log('estamos dentro 7u7');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'datosJson/datos.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            //console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            //console.log(datos);
            let res = document.querySelector('#res');
            res.innerHTML = '';

            //datos del personaje
            for (let item of datos) {
                //console.log(item.nombre);
                res.innerHTML += `
                <tr>
                    <th>${item.nombre}</th>
                    <th>${item.edad}</th>
                    <th>${item.cabello}</th>
                </tr>
                `

            }

            //nombre y numero de familiares
            for (let item of datos) {
                //console.log(item.nombre);
                res2.innerHTML += `
                <tr>
                    <th>${item.nombre}</th>
                    <th>${item.familiar.length}</th>
                </tr>
                `

            }
        }
    }


}

/*---Busqueda de datos---*/


function buscar() {

    const ahttp = new XMLHttpRequest();

    ahttp.open('GET', 'datosJson/datos.json', true);

    ahttp.send();

    ahttp.onreadystatechange = function () {

        let datos = JSON.parse(this.responseText);
        let buscar = document.querySelector('personaje');
        buscar.innerHTML = "";

        let nombreInput = document.getElementById("nombres");

        nombreInput = nombreInput.charAt(0) + nombreInput.slice(1);

        for (var i = 0; i < datos.length; i++) {
            if (datos[i].nombre.search(nombreInput) > -1) {
                document.getElementById('mostrar').innerHTML = ("Personaje encontrado: " + datos[i].nombre + " Edad: " + datos[i].edad);
            }
        }

    }
}

class Busqueda {
    constructor(){
        this.personas = [
            {nombre:"Isaac",edad:20},
            {nombre:"Andrea",edad:19},
            {nombre:"Tomas",edad:33}
        ];
        this.personaBK = this.personas;
        console.log(this.personas);
    }
    onInit(){
        let cuerpo
    }
    buscar(){}
}
let busqueda = new Busqueda();
/*--Buscar Personaje--*/
