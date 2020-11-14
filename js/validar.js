function validar(){

    var nombre, apellidos, DNI, correo, usuario, clave, telefono;
    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    DNI = document.getElementById("DNI").value;
    correo = document.getElementById("correo").value;
    usuario = document.getElementById("usuario").value;
    clave = document.getElementById("clave").value;
    telefono = document.getElementById("telefono").value;
    
	var expresionMAIL = /\w+@\w+.[a-z]{3}/;
	var expresionDNI = /^[0-9]{8}[A-Z]$/;

	if (nombre === "" || apellidos === "" || DNI === "" || correo === "" || usuario === "" || clave === "" || telefono === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }
	else if (nombre.length>30) {
        alert("El nombre sobrepasa los 30 caracteres");
        return false;
    }
	else if (apellidos.length>60) {
        alert("Los apellidos sobrepasan los 60 caracteres");
        return false;
    }
	else if (DNI.length>9) {
        alert("El DNI sobrepasa los 9 caracteres");
        return false;
    }
	else if (!expresionDNI.test(DNI)) {
        alert("El formato del DNI no es valido");
        return false;
    } 
	else if (correo.length>50) {
        alert("El correo tiene que tener menos de 50 caracteres");
        return false;
    }
    else if (!expresionMAIL.test(correo)) {
        alert("El formato del correo electronico no es valido");
        return false;
    } 
    else if (usuario.length>20 || clave.length>20) {
        alert("El usuario y la clave deben tener menos de 20 caracteres");
        return false;
    }
    else if (isNaN(telefono)) {
        alert("El telefono tiene que ser con digitos numericos");
        return false;
    }
			
	alert("las validaciones estan OK"); 

			
}