function validarFormulario() {

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellidos").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;
  
    if (nombre === "") {
      alert("Por favor ingrese su nombre");
      return false;
    }  else if (apellido === "") {
        alert("Por favor ingrese sus apellidos");
        return false;
    }   else if (email === "") {
      alert("Por favor ingrese su correo electrónico");
      return false;
    } else if (mensaje === "") {
      alert("Por favor ingrese su mensaje");
      return false;
    }
      alert("Formulario enviado correctamente");
    return true;
  }
    document.getElementById("submit-btn").addEventListener("onclick", validarFormulario);