const arr = [1, 2, 3, 4, 5];

arr.slice(0, 2);
// [1, 2]  pega a posição 0 e 1, assim ele para na 2.

arr.slice(2);
// [3, 4, 5] com apenas 1 parametro, ele pega apartir da posição citada. Retorna ela e as proximas ate o final.

arr.slice(-1);
// [5] ele vai pegar a ultima posição do array

arr.slice(-3);
// [3, 4, 5] vai pega a ultima posição e as demais ate chegar na 3