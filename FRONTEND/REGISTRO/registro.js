window.onload=()=> {

   
    let formElement = document.querySelector("#formulario") 
    
    formElement.onsubmit = async (event) =>{
        event.preventDefault()  
 
        let formData =  new FormData(formElement);
        let url =  "http://localhost/gestorIMG/BACKEND/CONTROLADORES/controladorUsuario.php?funcion=registro"
 
        let config = {
            method: 'POST',
            body: formData
        }
 
        let respuesta = await fetch(url, config);  

        let datos = await respuesta.json();    

        console.log(datos);
       
        if (datos == true) {
            alert ("USUARIO AGREGADO CORRECTAMENTE");
        } else (
            alert('ERROR AL REGISTRAR USUARIO :(')
        )
    }

 
    }
 
 