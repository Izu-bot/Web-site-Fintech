// Obtém os elementos do DOM
const modal = document.querySelector('#modal');
const btnOpenModal = document.querySelector('#openModal');
const spanClose = document.querySelector('.close');

// Função para manipular o modal
function abrirModal(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    } else if (event.target === btnOpenModal) {
        modal.style.display = 'block';
    } else if (event.target === spanClose) {
        modal.style.display = 'none';
    }
}

// Adiciona o evento de clique ao documento
document.addEventListener('click', abrirModal);

// Adicionando novos elementos na página
const formulario = document.querySelector('#formulario-modal');

formulario.addEventListener('submit', (e) => {
    // Cancelar o evento padrão
    e.preventDefault();

    // Construindo uma array com os dados do formulario
    const dadosArray = [
        document.querySelector('#nomeGasto').value,
        document.querySelector('#dataGasto').value,
        document.querySelector('#formaPagamento').value,
        document.querySelector('#valorGasto').value,
        document.querySelector('#descricao').value
    ];

    // Criando uma div para armazenar todo o conteudo
    const boxGastos = document.querySelector('#boxGasto');

    // Construir o card com as classes do bootstrap
    const card = document.createElement('div');
    card.classList.add('card');

    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    /* 
    forEach reponsável por percorrer o array, com dois parametros, o primeiro representa os valores
    da array dadosArray, a segunda representa o indice de seus valores.
    */
    dadosArray.forEach((dado, index) => {

        if (dado.trim() !== '') {

            // Criação da tag p com uma class do bootstrap
            const cardText = document.createElement('p');
            cardText.classList.add('card-text');

            // Condições para executar uma determinada operação em indices diferentes
            if (index === 0) {
                const cardTitle = document.createElement('h5');
                cardTitle.classList.add('card-title');
                cardTitle.textContent = `Titulo: ${dado}`;
                cardHeader.appendChild(cardTitle);
                card.appendChild(cardHeader);

            } else if (index === 1) {
                cardText.textContent = `Data: ${dado}`;
            } else if (index === 2) {
                cardText.textContent = `Pagamento em: ${dado}`;
            } else if (index === 3) {
                parseInt(dado);
                cardText.textContent = `Valor gasto: R$${dado}`;
            } else if (index === 4) {
                cardText.textContent = `Descrição: ${dado}`;
            };

            // Saida das condições e atribuindo elas como filhos de outras tags ja criadas
            card.appendChild(cardText);
            boxGastos.appendChild(card);
        };
    });

    // Fechar o modal
    modal.style.display = 'none';

    // Resetar o formulário
    formulario.reset();
})