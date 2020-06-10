# Calculadora-aula-logica-

const mensagem_erro_divisão = "Não é possivel";
const mensagem_erro_expo = "Não vai dar certo";
// retornar a soma de dois números 
function somadoisnumeros (numero1, numero2) {
cosnt soma = numero1 + numero2;
   return soma;
};
// Subtração de dois números 
function subtrairdoisnumeros (numero1, numero2) {
const subtrair = numero1 - numero2;
    return subtrair;
};
// Divisão de dois números que não podem ser divisiveis por zero e não podem ter o retorno menor do que um;
function dividirdoisnumeros (numero1, numero2) {
    if (numero2 === 0 || numero2>numero1) {
        console.log ("(mensagem_erro_divisão");
    return "(mensagem_erro_divisão";
    }
const dividir = numero1 / numero2
    return dividir         
};
// Multiplicação 
function multiplicardoisvalores (numero1, numero2) {
const Multiplicação = numero1 * numero2; 
    return Multiplicação;
}
// Exponenciação 
function expodoisvalores (numero1, numero2) {
    if (numero2>0) {
    return numero1 ** numero2;
    } else { mensagem_erro_expo Não vai dar certo;}    
}
// Raiz quadrada 
function raizvalor (numero1) {
const raiz = math.sqrt(raiz);
    return raiz; 
}
