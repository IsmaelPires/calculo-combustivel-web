/*Ações*/
$("#btn-calcular-combustivel").on("click", function () {
    var obj = {
        Etanol: $("#field-etanol").val(),
        Gasolina: $("#field-gasolina").val()
    };

    if (obj.Etanol <= 0.00 || obj.Etanol == '') {
        $('#field-etanol').addClass('campo-obg');
        exibeToast("etanol");
        return;
    } else {
        $('#field-etanol').removeClass('campo-obg');
    }

    if (obj.Gasolina <= 0.00 || obj.Etanol == '') {
        $('#field-gasolina').addClass('campo-obg');
        exibeToast("gasolina");
        return;
    } else {
        $('#field-gasolina').removeClass('campo-obg');
    }

    calcularCombustivel(obj);

});

$("#btn-limpar").on("click", function () {
    $("#field-etanol").val('');
    $("#field-gasolina").val('');

    $('.resultado').html('');
    $('.resultado').removeClass('alert alert-info');
});

/*Funções*/

function calcularCombustivel(obj) {
    var etanol = parseFloat(obj.Etanol);
    var gasolina = parseFloat(obj.Gasolina);
    var compensa = "";

    var combustivel = parseFloat(etanol / gasolina);

    if (combustivel < 0.70) {
        compensa = "Etanol"
    } else {
        compensa = "Gasolina"
    }

    $('.resultado').html('<p>Com os valores inseridos, compensa mais utilizar ' + '<b>'+compensa+'</b>' + '!</p>');
    $('.resultado').addClass('alert alert-info');
}

function exibeToast(campo) {
    SnackBar({
        message: "O valor de "+ campo +" é obrigatório",
        dismissible: true,
        timeout: 3000,
        status: "error",
        position: "tr"
    })
}