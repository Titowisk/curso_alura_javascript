// Responsável pela lógica do formulário
var botao = document.querySelector("#adicionar-paciente");

var botaoAdicionar = botao.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);

    // Valida o formulário
    var mensagensDeErro = validaPaciente(paciente);
    
    // Impede que um formulário inválido seja adicionado a tabela

    if (mensagensDeErro.length > 0){
        // Imprimi mensagem de erro no html
        exibeMensagemDeErro(mensagensDeErro);
        return;
    }

    // Adiciona o paciente
    adicionaPacienteNaTabela(paciente);

    form.reset();

})

function adicionaPacienteNaTabela (paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagemDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        
        li.textContent = erro;
        ul.appendChild(li);
    })
}

function validaPaciente(paciente){
    //Valida cada campo e imprimi uma mensagem de acordo com o erro
    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("O campo nome não pode estar em branco.")
    }

    if (paciente.peso.length == 0){
        erros.push("O campo peso não pode estar em branco")
    }

    if (paciente.altura.length == 0){
        erros.push("O campo altura não pode estar em branco")
    }

    if (paciente.gordura.length == 0){
        erros.push("O campo gordura não pode estar em branco")
    }


    var alturaEhValida = validaAltura(paciente.altura);
    if (!alturaEhValida){
        erros.push('A Altura precisa ser maior que 0.3 e menor que 3.')
    }

    var pesoEhValido = validaPeso(paciente.peso);
    if (!pesoEhValido){
        erros.push('O peso precisa ser maior que 0 e menor que 300.')
    }

    return erros;
}

function obtemPacienteDoFormulario(form){

    var paciente = {

        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.altura.value, form.peso.value)
    }

    return paciente
}

function montaTr(paciente){

    var tr = document.createElement("tr");
    tr.classList.add("paciente");

    tr.appendChild(montaTd(paciente.nome, "info-nome"));
    tr.appendChild(montaTd(paciente.peso, "info-peso"));
    tr.appendChild(montaTd(paciente.altura, "info-altura"));
    tr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    tr.appendChild(montaTd(paciente.imc, "info-imc"));

    return tr
}

function montaTd(texto, classe){

    var td = document.createElement("td");
    td.textContent = texto;
    td.classList.add(classe);

    return td
}