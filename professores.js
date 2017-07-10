$(document).ready(function () {

    $(".button-collapse").sideNav();
    $('.modal').modal();
    $('select').material_select();
    $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: 3
    });
});

$("#salvarBtn").click(function () {

    var professor = {
        nome: $("#nomme").val(),
        idade: (parseint$("#idade").val()),
        genero: $("input[name=genero]:checked").val(),
        formacao: $("#formacao").val(),
        areaAtuacao: $("#areaAtuacao").val(),
        disponibilidadeInicio: $("#dataINicio").val(),
        disponibilidadeFim: $("#dataFim").val()
    };

    var valido = validar(professor);

    if (valido) {
        //adicionar na tabela
    } else {
        // mensagem de erro
    }
});

function validar(professor) {

    if (professor.nome &&
        professor.idade &&
        professor.genero &&
        professor.formacao &&
        professor.areaAtuacao &&) {
      
      return true;
        } else {
            return false;
        }

}
