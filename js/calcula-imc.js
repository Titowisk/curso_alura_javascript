var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"

var paciente = document.querySelectorAll(".paciente")

// Valida os dados e calcula IMC
for (var i=0; i < paciente.length; i++){
    var tdPeso = paciente[i].querySelector(".info-peso")
    var peso = tdPeso.textContent

    var tdAltura = paciente[i].querySelector(".info-altura")
    var altura = tdAltura.textContent

    var tdImc = paciente[i].querySelector(".info-imc")


    var imc = peso / (altura * altura);

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    if (!pesoEhValido){
        tdImc.textContent = 'Peso inválido.';
        paciente[i].classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        tdImc.textContent = 'Altura inválida';
        paciente[i].style.backgroundColor = "lightcoral";
    }

    if (pesoEhValido && alturaEhValida) {
        tdImc.textContent = calculaImc(altura, peso)
    }
}

function validaPeso(peso){
    if (peso >= 0 && peso < 300){
        return true
    }else{
        return false
    }
}

function validaAltura(altura){
    if(altura >= 0  && altura <= 3){
        return true
    }else{
        return false
    }
}

function calculaImc(altura, peso){

    var imc = peso / (altura * altura);

    return imc.toFixed(2)
}

