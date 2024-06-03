const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quais são os possiveis efeitos da homofobia na saúde mental de indivíduos LGBT?",
        alternativas: [
            { texto: "isso é assustador!",
            afirmacao: "afirmacao"
            }, 
            {
                texto:"Isso é maravilhoso!",
                afirmacao: "afirmacao!"
            }
            
            "aumento do bem-estar e da autoestima",
            "aumento da asniedade,depressão e estresse"
        ]
    },
        
]; 

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostarAlternativas();
    }

    function mostarAlternativas(){
 for(const alternativas of perguntaAtual.alternativas){
    const botaoAlternativas = document.Element( "button");
    botaoAlternativas.textContent = alternativas;
    caixaAlternativas.appendChild( botaoAlternativas);
 }
    }
    
    mostraPergunta()


