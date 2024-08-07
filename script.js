const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está em uma convenção de tatuagens e vê um novo estilo de tatuagem que usa tecnologias avançadas para criar designs. Qual é a sua reação inicial?",
        alternativas: [
            {
                texto: "Isso é incrível!",
                afirmacao: "afirmação"
            },
            {
                texto: "Isso é um pouco intimidante!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Um tatuador famoso oferece um workshop sobre como usar essas novas tecnologias para criar tatuagens. No final do workshop, você é solicitado a escrever um relatório sobre a utilização dessas tecnologias. O que você faz?",
        alternativas: [
            {
                texto: "Utilizo uma ferramenta de busca na internet que utiliza IA para ajudar a encontrar informações relevantes e explica de forma clara.",
                afirmacao: "afirmação"
            },
            {
                texto: "Escrevo o relatório com base nas minhas anotações durante o workshop, conversas com colegas e conhecimento pessoal sobre o tema.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Durante um debate com outros participantes sobre como a tecnologia pode transformar a arte da tatuagem, qual é a sua opinião?",
        alternativas: [
            {
                texto: "Acredito que a tecnologia pode abrir novas possibilidades para artistas e criar novas formas de expressão.",
                afirmacao: "afirmação"
            },
            {
                texto: "Estou preocupado com a possibilidade de a tecnologia substituir a habilidade e o toque pessoal dos artistas humanos.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Depois do debate, você precisa criar um design de tatuagem no computador que represente suas ideias sobre a influência da tecnologia na arte. O que você faz?",
        alternativas: [
            {
                texto: "Crio um design utilizando um software de design gráfico.",
                afirmacao: "afirmação"
            },
            {
                texto: "Crio um design utilizando um gerador de design de IA.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você está trabalhando em um projeto de tatuagem em grupo, e um membro do grupo decidiu usar a IA para gerar o design. No entanto, o design está idêntico ao fornecido pela IA. Como você reage?",
        alternativas: [
            {
                texto: "Acredito que usar a IA para criar o design é válido, por isso não vejo problema em usar o design gerado.",
                afirmacao: "afirmação"
            },
            {
                texto: "Embora a IA seja uma ferramenta poderosa, é importante revisar e adicionar um toque pessoal ao design para garantir originalidade.",
                afirmacao: "afirmação"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
4

