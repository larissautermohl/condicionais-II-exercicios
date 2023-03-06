

// # Exercício 1

// Crie um código que receba um número por **prompt** e verifique se esse número é divisível por 2 **ou** por 3.
    
// Faça isso:
    
// **a)** Utilizando ifs aninhados
// ```jsx
//     if(expressao){
//         if(expressao){

//         }
//     }
// ```
// **b)** Utilizando um operador lógico para unir duas operações relacionais
// ```jsx
//     if(expressao && expressao){
//         // utilizamos && para E 
    
//     }
    
//     if(expressao || expressao){
//         // utilizamos o II para OU
//     }
// ```




const recebeNum = Number(prompt(`Digite o número !`))


 if (recebeNum % 2 === 0){
    if (recebeNum % 3 === 0){
        console.log(`O ${recebeNum} é divisível por 2 e 3 !`);
    } 
 }


 if(recebeNum % 2 === 0 && recebeNum % 3 === 0) {
    console.log(`O numero é divisivel por 2 e 3.`)
 }

 if(recebeNum % 2 === 0 || recebeNum % 3 === 0) {
    console.log(`O numero é divisivel por 2 e 3.`)}