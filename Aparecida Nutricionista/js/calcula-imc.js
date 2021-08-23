/*alert("Olá, mundo!");*/ 
	var titulo = document.querySelector(".titulo");
	console.log(titulo.textContent);
	titulo.textContent = "Aparecida Nutricionista";

    var pacientes = document.querySelectorAll(".paciente");
    rodoGeral(pacientes);


    function rodoGeral(pacientes){
    for (var i = 0; i < pacientes.length; i++) 
        calcularImc(pacientes[i]);
    }

    function calcularImc (paciente){

        var tdPeso = paciente.querySelector(".info-peso");
        var tdAltura = paciente.querySelector(".info-altura");
        var tdImc = paciente.querySelector(".info-imc");

        var peso = tdPeso.textContent;
        var altura = tdAltura.textContent;

        if (verificarIndices(peso, altura)) {
            var imc = calculoDoImc(peso, altura);
            tdImc.textContent = imc;
            colorirTexto(imc, tdImc);
    }   else
            tdImc.textContent = "Dados inválidos";
}
    function calculoDoImc(peso, altura){
        var imc = 0;

        imc = peso / (altura * altura);

        return imc.toFixed(2);
    }
    function verificarIndices(peso, altura){
        if (peso < 0 || peso > 300){
            return false;
        }

        else if (altura < 0 || altura > 3.0){
            return false;
        }

        else 
            return true;
    }
    function colorirTexto (imc, paciente){
        if(imc <= 18.50 || imc >= 25){
            paciente.classList.add("paciente-invalido");
        } else
            paciente.classList.add("paciente-valido");
        }

