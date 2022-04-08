// Retorna um novo tipo de dado iterando cada posição de um array

const arr = [1, 2, 3, 4, 5];

arr.reduce((total,value) => total += value, 0);
//15
// soma todos os valores do array e retorna