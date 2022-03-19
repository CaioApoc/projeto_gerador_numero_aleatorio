

const inputNum1 = document.getElementById("num1");
const inputNum2 = document.getElementById("num2");
const resultadoDiv = document.querySelector(".resultado");
const submitButton = document.querySelector("#enviar");
const resetButton = document.querySelector("#apagar")

submitButton.addEventListener("click", gerarNum);
resetButton.addEventListener("click", apagar);

function gerarNum(){
    let num1 = +inputNum1.value
    let num2 = +inputNum2.value

    let min = num1 <= num2 ? num1 : num2;
    let max = num1 >= num2 ? num1 : num2;
    let intervalo = max - min;

    let resultado = Math.round(Math.random() * intervalo + min);

    resultadoDiv.innerHTML = resultado 
    
}

function apagar() {
    inputNum1.value = null;
    inputNum2.value = null;
    resultadoDiv.innerHTML = null;
}