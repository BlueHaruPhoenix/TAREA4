const btnValidar = document.getElementById("btnValidar");
const contrasenia = document.getElementById("contrasenia");
const resultado2 = document.getElementById("pResultado2");

function validar (){
    let pass = contrasenia.value;
    let expRegPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){10}$/;
    resultado2.innerText = "";

    
    if (pass == "" || !expRegPass.test(pass)){
        resultado2.innerText = "Contraseña invalida";
    }else{
        resultado2.innerText = "Contraseña valida"
    }
}
btnValidar.onclick = () => validar();