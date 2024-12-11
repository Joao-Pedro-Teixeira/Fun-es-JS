//FÁCIL

//EX1   
function saudacao(nome) {
    return `Olá, ${nome}! Seja bem-vindo(a)!`;
}
console.log(saudacao("João")); 
console.log(saudacao("Bia")); 

//EX2
function soma(numero1, numero2) {
    return numero1 + numero2;
}
console.log(soma(5, 3));  
console.log(soma(10, 20)); 
console.log(soma(-4, 7));  

//EX3
function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}
console.log(parOuImpar(4));  
console.log(parOuImpar(7));  
console.log(parOuImpar(10)); 
console.log(parOuImpar(15)); 

//EX4   
function multiplica(numero1, numero2) {
    return numero1 * numero2;
}
console.log(multiplica(5, 3));  
console.log(multiplica(10, 20)); 
console.log(multiplica(-4, 7));  
console.log(multiplica(0, 8));   

//EX5
function celsiusParaFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}
console.log(celsiusParaFahrenheit(0));   
console.log(celsiusParaFahrenheit(25));  
console.log(celsiusParaFahrenheit(100)); 
console.log(celsiusParaFahrenheit(-10)); 

//EX6
function calculaMedia(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) / 3;
}
console.log(calculaMedia(5, 8, 10));  
console.log(calculaMedia(7, 3, 9));   
console.log(calculaMedia(10, 10, 10)); 
console.log(calculaMedia(4, 6, 8));   

//EX7
function minutosParaSegundos(minutos) {
    return minutos * 60;
}
console.log(minutosParaSegundos(1)); 
console.log(minutosParaSegundos(5));  
console.log(minutosParaSegundos(0));  

//EX8
function ehPositivo(numero) {
    return numero > 0;
}
console.log(ehPositivo(5));   
console.log(ehPositivo(-3));   
console.log(ehPositivo(10));   

//EX9
function repetePalavra(palavra, vezes) {
    let resultado = "";
    for (let i = 0; i < vezes; i++) {
        resultado += palavra;
    }
    return resultado;
}
console.log(repetePalavra("Olá", 3)); 
console.log(repetePalavra("JavaScript", 2)); 
console.log(repetePalavra("A", 5));    
console.log(repetePalavra("Teste", 1)); 

//ex10
function calculaAreaRetangulo(base, altura) {
    return base * altura;
}
console.log(calculaAreaRetangulo(5, 10));  
console.log(calculaAreaRetangulo(7, 3));   
console.log(calculaAreaRetangulo(12, 4));
console.log(calculaAreaRetangulo(6, 8));   

//MEDIUM

//EX1

function verificaPalindromo(palavra) {
    const palavraInvertida = palavra.split('').reverse().join('');
    return palavra === palavraInvertida;
}
console.log(verificaPalindromo("arara")); 
console.log(verificaPalindromo("hello"));  
console.log(verificaPalindromo("level"));  

//EX2
function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}
console.log(fatorial(5));  
console.log(fatorial(3));  
console.log(fatorial(0));  

//EX3
function filtraPares(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log(filtraPares([1, 2, 3, 4, 5, 6])); 
console.log(filtraPares([7, 8, 9, 10]));      

//EX4
function contaVogais(str) {
    const vogais = 'aeiouAEIOU';
    let contador = 0;
    for (let i = 0; i < str.length; i++) {
        if (vogais.includes(str[i])) {
            contador++;
        }
    }
    return contador;
}
console.log(contaVogais("hello world"));  
console.log(contaVogais("JavaScript"));  
console.log(contaVogais("aeiou"));   

//EX5
function ordenaStrings(arr) {
    return arr.sort();
}
console.log(ordenaStrings(["banana", "maçã", "abacaxi", "laranja"]));  
console.log(ordenaStrings(["zebra", "elefante", "macaco", "gato"]));   
console.log(ordenaStrings(["azul", "verde", "amarelo", "vermelho"]));   

//HARD

//EX1
function contaOcorrencias(palavra, texto) {
    const palavras = texto.split(' '); 
    return palavras.filter(p => p.toLowerCase() === palavra.toLowerCase()).length; 
}
console.log(contaOcorrencias("texto", "Este é um texto de exemplo, texto muito interessante.")); 
console.log(contaOcorrencias("palavra", "A palavra chave foi encontrada na palavra-chave.")); 

//EX2
function encontraNome(letra, nomes) {
    return nomes.find(nome => nome[0].toLowerCase() === letra.toLowerCase());
}
console.log(encontraNome("J", ["Carlos", "Juliana", "Ana", "José"]));  
console.log(encontraNome("A", ["Carlos", "Juliana", "Ana", "José"]));  


//EX3
function mediaIdades(idades) {
    const soma = idades.reduce((total, idade) => total + idade, 0);
    return soma / idades.length;
}
console.log(mediaIdades([25, 30, 35, 40]));  
console.log(mediaIdades([18, 20, 25, 30]));  


//EX4
function removeDuplicatas(arr) {
    return Array.from(new Set(arr)); 
}
console.log(removeDuplicatas([1, 2, 3, 3, 4, 5, 5])); 
console.log(removeDuplicatas(['maçã', 'banana', 'maçã', 'laranja'])); 
console.log(removeDuplicatas([true, false, true, true, false])); 

//EX5

function ordenaPorPreco(produtos) {
    return produtos.sort((a, b) => a.preco - b.preco); 
}
const produtos = [
    { nome: 'Produto A', preco: 30 },
    { nome: 'Produto B', preco: 20 },
    { nome: 'Produto C', preco: 50 }
];
console.log(ordenaPorPreco(produtos)); 




