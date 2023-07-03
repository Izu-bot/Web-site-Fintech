// Direcionand o botão parar outra pagina
document.querySelector('#formulario').addEventListener('submit', (e) => {
    e.preventDefault();

    window.location.href = '/assets/pages/home.html';
})