/* @Gustavo. */

// hello, world //

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona")
    var paciente = obtemPacienteDoForm(form);

    var erro = validaDados(paciente);
    var mensagemDeErro = document.querySelector("#mensagem-erro");

    if (erro.length > 0){
        mensagemDeErro.textContent = erro;
        form.reset();
        return;
    }
    mensagemDeErro.textContent = "";  

    var pacienteTr = montaTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    form.reset();
});
 
function obtemPacienteDoForm(form){

    var paciente = {
            nome: form.nome.value,
            peso: form.peso.value,
            altura: form.altura.value,
            gordura: form.gordura.value,
            imc: calculoDoImc(form.peso.value, form.altura.value)
    } 
    return paciente;
}
function montaTr(paciente){

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;

}
function montaTd(dado, classe){
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaDados(paciente){
    if (verificarIndices(paciente.peso, paciente.altura))
        return "";
    else 
        return "Dados inválidos"
}