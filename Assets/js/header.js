$(function () {
    $("#h-quienes-somos").click(function (e) { 
        $("#main").load('view/QuienesSomos.php');
    });
});

$(function () {
    $("#h-principal").click(function (e) { 
        $("#main").load('view/main.php');
    });
});

$(function () {
    $("#h-casos-exito").click(function (e) { 
        $("#main").load('view/casosexito.php');
    });
});

$(function () {
    $("#h-clientes").click(function (e) { 
        $("#main").load('view/clientes.php');
    });
});

$(function () {
    $("#h-contactos").click(function (e) { 
        $("#main").load('view/contactos.php');
    });
});

