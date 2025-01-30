window.onload = () => {


    let formElement = document.querySelector("#formulario");
    console.log(formElement);
    formElement.onsubmit = async (event) => {

        event.preventDefault();  

        let formData = new FormData(formElement);  

        let url = "http://localhost/gestorIMG/BACKEND/CONTROLADORES/controladorUsuario.php?funcion=login"   

        let config = {
            method: 'POST', 
            body: formData
        }

        let respuesta = await fetch(url, config); 

        let datos = await respuesta.json();     
        
        if (datos.length > 0) {
            window.location.href = "../CARGA/carga.html"; 
        } else {
            alert("ERROR: USUARIO O EL PASSWORD SON INCORRECTOS"); 
        }
    }

}
