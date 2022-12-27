const btnEnviar = document.getElementById("btnEnviar");
const correo = document.getElementById("email");
const pResultado3 = document.getElementById("pResultado3");

function enviar(){
    let mail = correo.value;
    let expRegCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    pResultado3.innerText = ""

    if(mail == "" || !expRegCorreo.test(mail)){
        pResultado3.innerText = "Correo invalido";
    }else{
        pResultado3.innerText = "Correo valido";
    }
}

btnEnviar.onclick = () => enviar();