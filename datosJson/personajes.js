/*-Busqueda de datos-*/
//console.log('Ingreso');

document.querySelector('#encontrar').addEventListener('click',traerDatos());

function traerDatos(){

    //console.log('estamos dentro 7u7');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET','datosJson/datos.json',true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

            //console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            //console.log(datos);
            let res = document.querySelector('#res');
            res.innerHTML = '';

            for(let item of datos){
                //console.log(item.nombre);
                res.innerHTML += `
                <tr>
                    <th>${item.nombre}</th>
                    <th>${item.edad}</th>
                    <th>${item.familiar}</th>
                    <th>${item.Cabello}</th>
                    <th>${item.Comprobado}</th>
                </tr>

                `

            }
        }
    }
}