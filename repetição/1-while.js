/**

while (condicao)
    declaracao
*/
// executa se a condição for verdadeira
var n = 0;
var x = 0;
while (n < 3) {
    n++;
    x += n;         // 1, 3, 6    x = x + n
}

console.log(x);