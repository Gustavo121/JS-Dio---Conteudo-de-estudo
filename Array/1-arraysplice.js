const arr = [1, 2, 3, 4, 5]; // vai mecher no array de origem

arr.splice(2);
// [3, 4, 5]  remove os elementos apartir da posição citada

console.log(arr);
// [1, 2]

arr.splice(0, 0, 'first'); // primeiro 0 é onde vou mecher no array; segundo 0 é quantos item vou remover; first é oq eu vou adiciona na primeira posição
// []

console.log(arr);
// ["first", 1, 2]