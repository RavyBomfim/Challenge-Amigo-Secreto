let listaAmigos = [];
let listaSorteados = [];
let contador = 1;

function adicionarAmigo() {
    let nomeAmigo = document.querySelector('#amigo').value;
    if(nomeAmigo === '') {
        alert('Por favor, insira um nome válido.');
    } else if(listaAmigos.includes(nomeAmigo)) {
        alert(`O nome ${nomeAmigo} já foi cadastrado.`);
    }   else {
        listaAmigos.push(nomeAmigo);
        limparCampo();
        addTextoNaTela('#listaAmigos', nomeAmigo);
    }
}

function limparCampo() {
    let campoAmigo = document.querySelector('#amigo');
    campoAmigo.value = "";
}

function addTextoNaTela(tag, texto) {
    const listaAmigosUl = document.querySelector(tag);
    const item = document.createElement('li');
    item.textContent = texto;
    listaAmigosUl.appendChild(item);
}

function sortearAmigo() {
    if(listaAmigos.length > 0) {
        let numeroSorteado = parseInt(Math.random() * listaAmigos.length);
        let amigoSorteado = listaAmigos[numeroSorteado];
        if(listaSorteados.includes(amigoSorteado)) {
            sortearAmigo();
        } else {
            listaSorteados.push(amigoSorteado);
            texto = `O ${contador}º amigo secreto sorteado é ${amigoSorteado}`;
            addTextoNaTela('#resultado', texto);
            contador++;
        }
    }
}
