const form = document.getElementById('formulario');

function validaNome(nomeCompleto){
    const nomeComArray = nomeCompleto.split(' ');
    return nomeComArray.legth >= 2;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nomeCompleto = document.getElementById('nome-completo');
    if(!validaNome(nomeCompleto.value)){
        alert('O nome não está completo')
    }else{
        alert('Está tudo certo!')
    }

} )

console.log(form);