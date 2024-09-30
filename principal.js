var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll('.paciente');
for (let contador = 0; contador < pacientes.length; contador++){
    var dadosPacientes = pacientes[contador];
    var peso = dadosPacientes.querySelector('.info-peso').textContent;
    var altura = dadosPaciente.querySelector('.info-altura').textContent;
    var imc = peso / (altura*altura);
    dadosPacientes.querySelector('.info-imc').textContent = imc;

}