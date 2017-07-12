$(document).ready(function () {

    // Inicializar os serviços
    $(".button-collapse").sideNav();
    $('.modal').modal();
    $('select').material_select();
    $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: 3
    });
     
      inicializarDados ();
});      
   




        


$("#salvarBtn").click(function () {

    var professor = {
        nome: $("#nome").val().trim(),
        idade: parseInt($("#idade").val().trim()),
        genero: $("input[name=genero]:checked").val(),
        formacao: $("#formacao").val(),
        areaAtuacao: $("#areaAtuacao").val(),
        disponibilidadeInicio: $("#dataINicio").val(),
        disponibilidadeFim: $("#dataFim").val()
    };

    var valido = validar(professor);

    if (valido) {

        adicionarProfessorNaTabela(professor);
        Materialize.toast("Professor cadastrado!", 5000);
        $ ("#modalAdicionar").modal("close");
        $ ("#cadastroProfesssor").trigger("reset");
    } else {
        // mensagem de erro
        
        Materialize.toast("Preencha os campos obrigatórios", 3000);
    }
});

function validar(professor) {

    //false, 0,"",undefined, null
    if (professor.nome &&
        professor.idade &&
        professor.genero &&
        professor.formacao &&
        professor.areaAtuacao) {
      
      return true;
        } else {
            return false;
        }

}
 var contador = 0;

function adicionarProfessorNaTabela(professor) {
    contador++;
    var idvalue ="row" + contador;
    
    $("#corpoTabela").append("<tr>" + 
                                     "<td>" +
                                     "<input type='radio' name='edicao' id='" + idvalue + "'value'" + idvalue +"'>" +
                                    "<label for= '" + idvalue + "'></label>" +
                                    "</td>" +
                                     "<td>" + professor.nome +"</td>" +
                                "<td>" + professor.idade +"</td>" +
                                     "<td>" + professor.genero + "</td>" +
                                      "<td>" + professor.formacao +"</td>" +
                                      "<td>" + professor.areaAtuacao +"</td>" +
                                      "<td>" + professor.disponibilidadedeInicio +"</td>" +
                                      "<td>" + professor.disponibilidadedeFim +"</td>" +
                                      "</tr>");

}

$("#removerBtn").click(function(){

    var selecionado = $("input[name=edicao]:checked");

    if (selecionado.val()) {
        // Lógica para remover
        selecionado.parent().parent().remove();
        Materialize.toast("Removido com sucesso",5000);
    } else {
         Materialize.toast("Selecione um registro para remover!", 5000);
    }

});

function inicializarDados() {

    var listaProfessores = JSON.parse(dados);
    
    listaProfessores.forEach(function (professor) {
      adicionarProfessorNaTabela(professor);  
    });

}
