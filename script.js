const perguntas = [
    {
        pergunta: "Qual o primeiro filme que a Laika Studios produziu?",
        alternativas: [
            "ParaNorman",
            "Coraline e o Mundo Secreto",
            "Os Boxtrolls",
            "Kubo e as Cordas Mágicas"
        ],
        correta: 1
    },

    {
        pergunta: "Qual o filme mais famoso da Laika Studios?",
        alternativas: [
            "ParaNorman",
            "Kubo e as Cordas Mágicas",
            "Coraline e o Mundo Secreto",
            "Os BoxTrolls"
        ],
        correta: 2
    },

    {
        pergunta: "Qual protagonista dos filmes da Laika Studios fala com os mortos?",
        alternativas: [
            "Norman(ParaNorman)",
            "Coraline(Coraline e o Mundo Secreto)",
            "Kubo(Kubo e as Cordas Mágicas)",
            "Eggs(Os Boxtrolls)"
        ],
        correta: 0
    },

    {
        pergunta: "Qual dos filmes os protagonistas tem que parar a maldição de uma bruxa?",
        alternativas: [
            "Coraline e o Mundo Secreto",
            "ParaNorman",
            "Kubo e as Cordas Mágicas",
            "Os Boxtrolls"
        ],
        correta: 1
    },

    {
        pergunta: "Qual é o poder mágico do instrumento que Kubo toca?",
        alternativas: [
            "Fazer seus origamis ganharem vida",
            "Fazer ele voar",
            "Fazer animais falarem",
            "Fazer ele ficar invencivel"
        ],
        correta: 0
    },

     {
        pergunta: "Por que Kubo precisa evitar ficar fora de casa depois do anoitecer?",
        alternativas: [
            "Por que seus inimigos podem encontrá-lo durante a noite",
            "Por que a mãe dele quer",
            "Por que a noite é perigosa em sua vila",
            "Por que ele tem medo do escuro"
        ],
        correta: 0
    }
];

let perguntaAtual = 0;
let pontos = 0;

function mostrarPergunta() {

    const pergunta = perguntas[perguntaAtual];

    document.getElementById("pergunta").textContent =
        pergunta.pergunta;

    const alternativas = document.getElementById("alternativas");

    alternativas.innerHTML = "";

    pergunta.alternativas.forEach((alternativa, indice) => {

        const botao = document.createElement("button");

        botao.textContent = alternativa;

        botao.onclick = function () {
            verificarResposta(indice);
        };

        alternativas.appendChild(botao);
    });
}

function verificarResposta(indice) {

    if (indice === perguntas[perguntaAtual].correta) {
        pontos++;
    }

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {

    document.getElementById("pergunta").textContent =
        "Quiz finalizado!";

    document.getElementById("alternativas").innerHTML = "";

    document.getElementById("resultado").textContent =
        "Você acertou " + pontos +
        " de " + perguntas.length + " perguntas.";
}

mostrarPergunta();