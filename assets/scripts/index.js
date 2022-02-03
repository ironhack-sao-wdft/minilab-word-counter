const contarPalavra = () => {
    let totalPalavra = document.getElementById('localDasPalavras').value;

    totalPalavra = totalPalavra.match( /\w+/g ).length;

    document.getElementById('variavelNumero').innerHTML = `Voce digitou ${totalPalavra} palavras.`
};