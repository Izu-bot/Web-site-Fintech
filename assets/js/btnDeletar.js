function deletarCard(button) {
    let card = button.parentNode.parentNode;
    let confirmacao = window.confirm('Tem certeza que deseja excluir permanente mente?');

    if (confirmacao) {
        card.remove();
        alert('O conteúdo foi excluido com sucesso')
    }
}