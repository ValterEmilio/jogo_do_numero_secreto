// variaveis de numero aleatorio e de numero de tentativas
let listNumSorteados = [];
let numeroLimite = 100;
let numeroSecreto = criarNumeroAleatorio();
let tentativas = 1;

// funcao que exibe texto na tela 
function exibirTextoNaTela(tag, texto) {
    let lerTexto = document.querySelector(tag);
    lerTexto.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}
// chama essa funcao quando clica no botão novo jogo
function textoInicial() {
    exibirTextoNaTela('h1', 'numero secreto');
    exibirTextoNaTela('p', 'Digite um numero entre 1 e 100');   
}
textoInicial();
// função que verifica o chute e exibe na tela se a pessoa acertou ou nao
function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Você é um génio!');
        let msgTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let numeroTentativas = `Você acertou o numero secreto depois de ${tentativas} ${msgTentativas}`;
        exibirTextoNaTela('p', numeroTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O numero secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O numero secreto é maior');
        }
        tentativas++;
        limparChute();
    }
}
// funcao que gera numero aleatorio
function criarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantElmentosNaLista = listNumSorteados.length;

    if (quantElmentosNaLista == numeroLimite) {
        listNumSorteados = [];
    }
    if (listNumSorteados.includes(numeroEscolhido)) {
        return criarNumeroAleatorio();
    } else {
        listNumSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
// funcao que limpa o valor do chute que a pessoa deu
function limparChute() {
    chute = document.querySelector('input');
    chute.value = '';   
}

function reiniciarJogo(params) {
    let numeroSecreto = criarNumeroAleatorio();
    limparChute();
    textoInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    let tentativas = 1;

}

print('ola mundo')