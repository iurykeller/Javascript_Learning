let dinheiro = parseFloat(prompt("insira o valor de 2,00 R$ para comprar coca-cola"));
let coca = 2.00

function Maquina_Processando(processando){
  if(processando === coca){
    console.log("pegando coca-cola")
  } else if ( processando > coca){
    let devolucao = processando - coca
    console.log(`você depositou ${devolucao}  a mais`); 
    console.log(`realizando devolução de ${devolucao}`); 
  } else {
    console.log(`a coca custa ${coca}R$, Deposite o valor referente ao produto desejado.`)
  }
}

let resultado = Maquina_Processando(dinheiro);
console.log(resultado);
