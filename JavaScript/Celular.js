function openNav(){
    document.getElementById("celular").style.width = "90%";

}

function closeNav(){
    document.getElementById("celular").style.width = "0";
}

/* -----datos para arreglar -------
async function requestInfo(){
    console.log("Cargando Infirmación...");
    //1. obtener la informacion de la API
    const data = await fetch("data.json");
    const json = await data.json();
    let html = "";

    //2. para cada post se van a descargar las imágenes
    for(let i = 0; i < json.posts.length; i++){
        const post = json.post[i];
        const [photoUrl] = await Promise.all([
            downloadImage(post.content.photo),
        ]);
        //3. crear la tarjeta para cada post
        html +=
        `       <div class="card-contenedor">
            <div class="card-header">
                <h3 class="fadeIn">${post.picture.name}</h3>
            </div>
        
        <div class="card-cont">
            <div class="card-text">
                <p class="fadeIn">${post.content.text}</p>
            </div>

            <div class="card-img">
                <img src="${photoUrl}" class="fadeIn">
            </div>
        </div>
        `; 
     }
    //4. adjuntar tarjetas en #container
    document.querySelector("#contenedor").innerHTML = html;
}

async function downloadImage(url){
    console.log(`Descargando ${url}...`);
    const response = await fetch(`file:///C:/Users/isaac/OneDrive/Documentos/Pagina%20Html,%20Css%20y%20JS/Detalles.html${url}`);
    const blob = await response.blob();
    const imgUrl = URL.createObjectURL(blob);
    console.log(`Descarga Completa de ${url}`)
    return imgUrl;
}

requestInfo();
*/