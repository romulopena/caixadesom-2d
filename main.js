//Criando/declarando a função tocaSom com parâmetro idElementoAudio
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
//criando referência constante listaDeTeclas buscando 
//todos os itens pela classe .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');

//criando referência variável "contador" iniciando = 0
let contador = 0;

//estrutura de repetição "while" significa 
//"enquanto algo acontecer"
while(contador < listaDeTeclas.length ){
    const efeito = listaDeTeclas[contador].classList[1];
    const idAudio = "#som_"+ efeito;
    listaDeTeclas[contador].onclick = function(){
        tocaSom(idAudio);
    }
    contador = contador + 1;
    console.log(contador);
}