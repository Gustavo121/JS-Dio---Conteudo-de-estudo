// retorna um novo array assim como a função map e executa um flat de profundidade 1

// 1º executa um MAP = retorna um novo array, depois um flat onde a profundidade é 1

const arr = [1, 2, 3, 4];

arr.flatMap(value => [value * 2]);
// [2, 4, 6, 8]

arr.flatMap(value => [[value * 2]]);
// [[2], [4], [6], [8]]