const btn = document.getElementById('btn');
const elemento = document.getElementById('elemento');

btn.addEventListener('click', () => {
    if(elemento.style.display === 'none'){
        elemento.style.display = 'inline';
    }else {
        elemento.style.display = 'none';
    }
});