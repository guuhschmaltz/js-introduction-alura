var campo = document.querySelector('#filtrar-tabela');
campo.addEventListener('input',function(){ //Adicionar "ouvidor" de eventos do input
    console.log(`Eu acabei de digitar as letras:${this.value}`); 

    var pacientes = document.querySelectorAll('.paciente'); //Retornando um array de pacientes

    //Primeiramente devemos verificar se o usuário digitou algo
    if(this.value.length > 0){
        for(i=0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector('.info-nome'); //dentro de um paciente buscando um TD com o nome "info-nome"
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, 'i');//Expressao regular com case insensitive

            if(!expressao.test(nome)){
            //if(nome != this.value){
                paciente.classList.add('invisivel');
            }else{
                paciente.classList.remove('invisivel');
            }
        }
    }else{
        for(i=0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove('invisivel');
        }
    }
});