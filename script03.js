// Função para verificar se o modal já foi exibido antes
function modalDisplayed() {
    return localStorage.getItem('modalDisplayed') === 'true';
}

// Função para exibir o modal
function displayModal() {
    var welcomeMessage = document.getElementById('welcomeMessage');
    if (welcomeMessage) { // Verifica se welcomeMessage não é nulo
        welcomeMessage.style.display = 'block';
        localStorage.setItem('modalDisplayed', 'true'); // Marca o modal como exibido
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Verifica se o modal já foi exibido antes
    if (!modalDisplayed()) {
        displayModal(); // Exibe o modal se ainda não tiver sido exibido
    }

    // Função para fechar o modal ao clicar no botão de fechar
    var closeButton = document.querySelector('.close-button');
    if (closeButton) { // Verifica se closeButton não é nulo
        closeButton.addEventListener('click', function() {
            var welcomeMessage = document.getElementById('welcomeMessage');
            if (welcomeMessage) { // Verifica se welcomeMessage não é nulo
                welcomeMessage.style.display = 'none';
            }
        });
    }

    // Função para fechar o modal ao clicar fora dele
    window.onclick = function(event) {
        var modal = document.getElementById('welcomeMessage');
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

