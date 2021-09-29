
//1
let texto="Todos pensam em mudar a humanidade e ninguém pensa em mudar a si mesmo.",contando=0;
 console.log(texto.length);
console.log(texto.toUpperCase());
 for (let n=0;n<texto.length;n++) {
     if(texto.charAt(n)=="a"||texto.charAt(n)=="e"||texto.charAt(n)=="i"||texto.charAt(n)=="o"||texto.charAt(n)=="u") {
         contando+=1;
     }
 }
 console.log(contando);
 
console.log(texto.toLowerCase());
console.log(texto.indexOf("humanidade"));

//2

var pares=100;
var n=0;
var valorArray=[];
var contadorNumero=0;
for( ;n<=100;n++){
    if(n%2==0){ 
    valorArray.push(n);
    }
}
console.log(valorArray);
console.log(valorArray.join());



