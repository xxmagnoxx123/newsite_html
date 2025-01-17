const form = document.getElementById('formulario');

function validaNome(nomeCompleto){
    const nomeComArray = nomeCompleto.split(' ');
    return nomeComArray.legth >= 2;
}

form.addEventListener('submit', function(e) {
    let formValido = false;
    e.preventDefault();

    const nomeCompleto = document.getElementById('nome-completo');
    if (formValido) {
        alert('Está tudo certo!')
    }else{
        alert('O nome não está completo')
    }

} )

console.log(form);