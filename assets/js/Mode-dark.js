
// Função para alternar entre os modos
function DarkMode() {
    const body = document.body;
    const modeText = document.getElementById('mode-text');

    // Alterna a classe 'dark-mode' no body
    body.classList.toggle('dark-mode');

    // Altera o texto do botão
    if (body.classList.contains('dark-mode')) {
        modeText.textContent = 'Modo Claro';
    } else {
        modeText.textContent = 'Modo Escuro';
    }
}

document.getElementById('btn-darkmode').addEventListener('click', DarkMode);
