function openNav(){
    document.getElementById("celular").style.width = "90%";

}

function closeNav(){
    document.getElementById("celular").style.width = "0";
}

function innerHTML(id,result){
    return getElementById(id).innerHTML = result;
}
function convertir(tipo){

    var palabra = document.getElementById("palabra");
    var texto = palabra.value;

    if(tipo == 1){
        palabra.value = texto.length;
        return texto.getElementById("vista");
    }else if(tipo == 2){
        palabra.value = texto.toUpperCase();
    }else if (tipo == 3){
        palabra.value = texto.toLowerCase();
    }else if (tipo = 4){
        palabra.map(p => p[0].toUpperCase() + p.slice(1)).join(' ');
    }

}