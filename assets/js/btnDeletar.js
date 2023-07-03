function deletarCard(button) {
    // Buscando o parente do parente direto para excluir todo o conteudo
    let card = button.parentNode.parentNode;
    let confirmacao = window.confirm('Tem certeza que deseja excluir permanente mente?');

    if (confirmacao) {
        card.remove();
        alert('O conteúdo foi excluido com sucesso')
    }
}