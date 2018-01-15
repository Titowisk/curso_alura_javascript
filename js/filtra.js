var campoFiltro = document.querySelector("#filtro-tabela");




campoFiltro.addEventListener('input', function(){
    var pacientes = document.querySelectorAll(".paciente");
    
    if(this.value.length > 0){
        for(var i=0; i < pacientes.length; i++){
            var expressaoBuscada = new RegExp(this.value, 'i');
            var paciente = pacientes[i];
            var nomeTd = paciente.querySelector(".info-nome");
            var nome = nomeTd.textContent;
            
            if (expressaoBuscada.test(nome)){
                //Mostra apenas os nomes que se encaixam na busca
                paciente.classList.remove("invisivel");
            }else{
                // Conforme o usuário vai refinando a busca, esconde os outros nomes
                paciente.classList.add("invisivel");
            }
        }
    }else{
        for(var i=0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var nomeTd = paciente.querySelector(".info-nome");
            var nome = nomeTd.textContent;
    
            // Mostrar todos os pacientes novamente quando o campo de filtro está vazio.
            paciente.classList.remove("invisivel");
        }
        
    }
});