// variáveis de contagem de tempo
let data 
let ano
let mes
let dia 
let horas
let minutos 
let segundos 

// capturando elementos no DOM
const horaMostrada = document.querySelector('span[data-horas]');
const diaMostrado = document.querySelector('span[data-data]');
const ponteiroHoras = document.querySelector('.horas span');
const ponteiroMinutos = document.querySelector('.minutos span');
const ponteiroSegundos = document.querySelector('.segundos span');





// atualiza as variáveis de tempo e mostra elas na tela, conforme o relógio digital
function atualizaData(){
    data = new Date();
    ano = data.getFullYear();
    mes = data.getMonth();
    dia = data.getDate(); 
    horas = data.getHours();
    minutos = data.getMinutes();
    segundos = data.getSeconds();
   
    
    horaMostrada.innerHTML= horas+ "h " + minutos + "min "  + segundos + "s";
    

    diaMostrado.innerHTML= dia+ "/" + (mes+1) + "/" + ano;

}
setInterval(atualizaData,100); //atualiza os ponteiros a cada 100ms




// define a posição inicial dos ponteiros
function comecaMundo(){
    
    ponteiroSegundos.style.transform = "rotate(270deg)";
    ponteiroMinutos.style.transform = "rotate(270deg)";
    ponteiroHoras.style.transform = "rotate(270deg)";
}
comecaMundo()


// define a movimentação dos ponteiros
function giraMundo(){

    // coeficiente de multiplicação => (360deg)/(60seg) = 6 
    ponteiroSegundos.style.transform = `rotate(270deg) rotate(${segundos*6}deg)`;
    // coeficiente de multiplicação => (360deg)/(60min) = 6
    ponteiroMinutos.style.transform = `rotate(270deg) rotate(${minutos*6}deg)`;
    // coeficiente de multiplicação => (360deg)/(12h) = 30 
    ponteiroHoras.style.transform = `rotate(270deg) rotate(${horas*30}deg)`; // 
    
}
setInterval(giraMundo,100) //atualiza os ponteiros a cada 100ms
