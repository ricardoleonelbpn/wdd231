// Exibir o ano atual
const anoAtual = new Date().getFullYear();

document.getElementById("anoatual").textContent = anoAtual;

// Exibir a última modificação do documento
const ultimaModificacao = document.lastModified;

document.getElementById("ultimaModificacao").textContent =
    `Última modificação: ${ultimaModificacao}`;