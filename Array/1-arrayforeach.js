// interação de cada item dentro de um array, executa o array. Não altera

const arr = [1, 2, 3, 4, 5];

arr.forEach((value, index, arr) => {
    console.log(`${index}: ${value}: ${arr}`);
});

// value = posição   index = valor     arr = array que estou pegando os valores e posições