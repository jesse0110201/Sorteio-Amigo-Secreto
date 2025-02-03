//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

const nomes = []; //array onde será armazenado os nomes
const inputNome = document.getElementById('amigo'); //pega o valor digitado no campo
const listaNomes = document.getElementById('listaAmigos'); //seleciona a lista de nomes do HTML

//função que adiciona o nome digitado no campo na lista de nomes
function adicionarAmigo(){
    const nome = inputNome.value.trim();
    if(nome === ''){ //verifica se o campo não está vazio 
        alert('Você não digitou um nome válido, preencha o campo corretamente!');
        return;
    }
    if (/^[A-Za-zÀ-ú\s]+$/.test(nome)) {//verifica se o campo foi preenchido corretamente
        nomes.push(nome);//armazena o nome na lista de nomes
        limpaCampo(); //limpa o campo onde se insere os nomes
        inputNome.focus(); //volta o curso para o campo novamente
        const listaNomeLi = document.createElement('li'); //variável que cria lista de itens no HTML
        listaNomeLi.textContent = nome; //armazenando o nome na variável que contém o li
        listaNomes.appendChild(listaNomeLi); // Adiciona o novo <li> na lista de amigos visível no HTML
    }else {
        alert('Você não digitou um nome válido, preencha o campo corretamente!');
        limpaCampo(); //limpa o campo onde se insere os nomes
    }

    //limpaCampo(); //limpa o campo onde se insere os nomes
    //inputNome.focus(); //volta o curso para o campo novamente
    //const listaNomeLi = document.createElement('li'); //variável que cria lista de itens no HTML
    //listaNomeLi.textContent = nome; //armazenando o nome na variável que contém o li
    //listaNomes.appendChild(listaNomeLi); // Adiciona o novo <li> na lista de amigos visível no HTML
}

// função que limpa o campo nome
function limpaCampo(){
    campo = document.querySelector('input'); //indica qual campo do HTML o javascript está manipulando
    campo.value = ''; //limpa o campo no HTML
}

// função que faz o sorteio do amigo secreto
function sortearAmigo(){
    const indiceAleatorio = Math.floor(Math.random() * nomes.length);//sorteio um número para ser usado como indice na array nomes
    const resultadoNome = nomes[indiceAleatorio];//armazena o nome sorteado da array
    document.getElementById('resultado').innerText = `Amigo secreto sorteado: ${resultadoNome}`;//exibe o resultado na página HTML
}
