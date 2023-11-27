function calcularSomatorio() {
    const numero = parseInt(document.getElementById("numero").value);
    let somatorio = 0;

    for (let i = 1; i < numero; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            somatorio += i;
        }
    }

    document.getElementById("result").innerText = `Resultado: ${somatorio}`;
}
