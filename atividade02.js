/*
a)       Criar uma variável com o array ordenado de forma crescente;

b)      Exibir no console.

c)       Criar uma variável com o array ordenado de forma inversa.

d)      Exibir no console

*/
//1
let palavra1="Aprendendo ", palavras="strings em JavaScript",resultado;
resultado=palavra1.concat(palavras);
console.log(resultado);

//2
let palavra2="palavra2", palavra3="palavra3";
palavra1="palavra1";
let frase1="Esta é a frase com a ", frase2="Esta é a frase com a ", frase3="Esta é a frase com a ";
console.log(`${frase1}${palavra1}\n${frase2}${palavra2}\n${frase3}${palavra3}`);

//3
let vetor=["a","b","a","a","c","b"];
vetor.sort();
console.log(vetor);
vetor.reverse();
console.log(vetor);