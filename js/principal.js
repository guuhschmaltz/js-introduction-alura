var titleEl = document.querySelector('.titulo');
titleEl.textContent = 'Gustavo Nutricionista';


var pacientes = document.querySelectorAll('.paciente');

for(i = 0; i < pacientes.length; i++) {

    var peso = pacientes[i].querySelector('.info-peso').textContent;
    var altura = pacientes[i].querySelector('.info-altura').textContent;
    var imcEl = pacientes[i].querySelector('.info-imc');
    
    var pesoEhValido = true;
    if (peso <= 0 || peso >= 250)
    {
        pesoEhValido = false;
        imcEl.textContent = 'Peso inválido';
        //pacientes[i].style.color = 'red'; Ao invés de modificarmos o CSS pelo JavaScript, devemos atribuir uma classe ao elemento
        pacientes[i].classList.add('paciente-invalido');
    }
    
    var alturaEhValida = true;
    if (altura <= 0 || altura >= 3.00)
    {
        alturaEhValida = false;
        imcEl.textContent = 'Altura inválida';
        //pacientes[i].style.color = 'red'; Ao invés de modificarmos o CSS pelo JavaScript, devemos atribuir uma classe ao elemento
        pacientes[i].classList.add('paciente-invalido');
    }
    if (pesoEhValido === true && alturaEhValida === true)
    {
       var imc = peso / (altura * altura);
       imcEl.textContent = imc.toFixed(2);
    }
}





