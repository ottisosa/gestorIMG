window.onload = ()=>{
    verImg();
}

function mostrarImg(imagenes){
    let listaimgElement = document.querySelector("#listadoImg");
    listaimgElement.innerHTML="";
    imagenes.forEach(imagen => {
        let imgSrc = `../../BACKEND/IMAGENES/${imagen.id}.${imagen.extension}`;
        console.log('Generando ruta de imagen:', imgSrc);

        listaimgElement.innerHTML+=`
        <div>
            <img id='${imagen.id}' src="${imgSrc}" alt="${imagen.nombre}" onmouseover='escala(${imagen.id})' onmouseleave='restaurar(${imagen.id})'>
        <p>${imagen.nombre}</p>

        </div>
        `
    });
}
 async function verImg(){
    let url = "http://localhost/gestorIMG/BACKEND/CONTROLADORES/controladorImagen.php?funcion=verImagen";
    try {
        let consulta = await fetch(url);
        let datos = await consulta.json();
        console.log('Datos recibidos:', datos);
        mostrarImg(datos);
    } catch (error) {
        console.error('Error al obtener imágenes:', error);
    }
}

function escala(unid){
   document.getElementById(unid).style.transition='1s'
    document.getElementById(unid).style.scale='110%'
}

function restaurar(unid){
    document.getElementById(unid).style.transition='1s'
     document.getElementById(unid).style.scale='100%'
 }
     