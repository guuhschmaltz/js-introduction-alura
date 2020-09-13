var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obterPacienteDoFormulario(form);
   
    var erros = validaPaciente(paciente);
    if(erros.length > 0){
        exibeMensagensDeErro(erros);

        return;
    } 
    
    //Adicionando o paciente na tabela
   adicionarPacienteNaTabela(paciente);
    
    //Resetando formulario após adicionar com sucesso
    form.reset();   //Resetando campos
    var mensagensDeErro = document.querySelector("#mensagens-erro"); // Capturando erros
    mensagensDeErro.innerHTML = ""; // Resetando erros que foram exibidos
});

function adicionarPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function obterPacienteDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value),
    };
    
    return paciente;
}

function montaTr(paciente){

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add('paciente'); //Adicionando classe no CSS para ficar igual outros já na tabela
    //Criando Td manualmente
    //var nomeTd = document.createElement("td");
    //nomeTd.classList.add('info-nome');
    //nomeTd.textContent = paciente.nome;

    //Criando outras Tds e tr com função

    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));
    

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);
    
    return td;
}

function validaPaciente(paciente) {
    var erros = [];

    if (paciente.nome.length <= 0) erros.push('O Nome não pode ser em branco');
    if (paciente.peso.length <= 0) erros.push('O Peso não pode ser em branco');
    if (paciente.altura.length <= 0) erros.push('A Altura não pode ser em branco');
    if (paciente.gordura.length <= 0) erros.push('O percentual de gordura não pode ser em branco');

    if (!validaPeso(paciente.peso))  erros.push('Peso é inválido'); //Se for um if simples podemos remover as {}
    if (!validaPeso(paciente.altura)) erros.push('Altura é inválida');

    return erros;
}


function exibeMensagensDeErro(erros){
    var ul = document.querySelector('#mensagens-erro');
    ul.innerHTML = "" //Apagar as mensagens de erro anteriores como se fosse um reset para não mostrar erros infinitos
    erros.forEach(function(erro){
        var li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li); 
    });
}
