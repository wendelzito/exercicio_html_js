function validarFormulario() {
    var numberA = parseFloat(document.getElementById("numberA").value);
    var numberB = parseFloat(document.getElementById("numberB").value);

    if (numberB > numberA) {
        document.getElementById("resultado").textContent = "Formulário válido: B é maior que A.";
    } else {
        document.getElementById("resultado").textContent = "Formulário inválido: B não é maior que A.";
    }
}