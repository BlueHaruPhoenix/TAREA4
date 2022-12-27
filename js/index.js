// Ejercicio 1
const numero = document.getElementById("numero");
const btnCalcular = document.getElementById("btnCalcular");
const pResultado = document.getElementById("pResultado");

btnCalcular.onclick = () => {
const numeroIngresado = numero.value;
let digito1 = numeroIngresado[0];
let digito2 = numeroIngresado[1];
let digito3 = numeroIngresado[2];

    if (numeroIngresado.length === 3) {
        if (digito1 === digito2 && digito1 === digito3) {
            let sumaRaices = Math.sqrt(parseInt(digito1)) + Math.sqrt(parseInt(digito2)) + Math.sqrt(parseInt(digito3));
            pResultado.innerText = `La suma de las raices es: ${sumaRaices}`;
    } else {
    let sumaCuadrados = Math.pow(parseInt(digito1), 2) + Math.pow(parseInt(digito2), 2) + Math.pow(parseInt(digito3), 2);
    pResultado.innerText = `La suma de los cuadrados es: ${sumaCuadrados}`;
    }
    } else {
    pResultado.innerText = "El numero ingresado no tiene 3 digitos";
    }   
}