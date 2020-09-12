var pacientes = document.querySelectorAll('.paciente');

var tabela = document.querySelector('table');
tabela.addEventListener('dblclick', function(event){
    event.target.parentNode.classList.add('fadeOut');
    setTimeout(function(){
    //var evento = event.target;
    //var paiDoEvento = evento.parentNode;
    //paidoEvento.remove();
    event.target.parentNode.remove(); //PARENT NODE É O PAI DO ELEMENTO QUE FOI CLICADO
    },500); // 500ms


});

//Ao invés de colocarmos para o formulario adicionar um "eventlistener" no paciente, devemos coloca-los no pai da tabela.
//pacientes.forEach(function(paciente){
//    paciente.addEventListener('dblclick', function(){
//        this.remove();
//    }); //double click
//});