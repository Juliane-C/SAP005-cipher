//Esse documento é para fazer o DOM
import cipher from './cipher.js';
function cliqueC(){
    let cifra = new MouseEvent("click", prompt("Insira a sua mensagem:").value);
    for(let c=1;c<=1; c++){
        Number(prompt("Insira o número do offset"));
    }
    //o .value pega o movimento feito no hmtl,pra executar a função aqui no JS
    //Tá fluindo o objetivo de com o clique do usuário acionar o console \o/
    //Testar o for aqui pra ver se repete o prompt, mas para armazenar o offset (OK)
}
document.getElementById("buttonc").addEventListener('click', cliqueC);

function cliqueD(){
    let decifra = new MouseEvent("click", prompt("Insira a sua mensagem:").value);
    for(let d=1;d<=1; d++){
        Number(prompt("Insira o número do offset"));
    }    
}
document.getElementById("buttond").addEventListener('click', cliqueD);

console.log(cipher);
