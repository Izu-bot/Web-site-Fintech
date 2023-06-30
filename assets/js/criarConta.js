document.querySelector('#criarConta').addEventListener('submit', (e) => {
    e.preventDefault(); // Removendo o evento padrão de submit

    // Obtendo valor dos campos para criar a conta

    const nome = document.querySelector('#nome').value;
    const sobrenome = document.querySelector('#sobrenome').value;
    const user = document.querySelector('#usuario').value;
    const senha = document.querySelector('#senha').value;
    const email = document.querySelector('#email').value;
    const data = document.querySelector('#dataNascimento').value;

    // Armazenando os dados no localStorage
    localStorage.setItem('nome', nome);
    localStorage.setItem('sobrenome', sobrenome);
    localStorage.setItem('user', user);
    localStorage.setItem('senha', senha);
    localStorage.setItem('email', email);
    localStorage.setItem('data', data);

    // Limpando o localStorage
    localStorage.clear();

    // Redirecionando o usuario para a página Home, simulando uma criação de conta
    window.location.href = 'index.html'
});