function validarFormulario() {
    var numberA = parseFloat(document.getElementById("numberA").value);
    var numberB = parseFloat(document.getElementById("numberb").value);

    if (numberB > numberA) {
        document.getElementById("resultado").textContent = "Formulário válido: B é maior que A.";
    } else {
        document.getElementById("resultado").textContent = "Formulário inválido: A é maior que A";
    }
}



