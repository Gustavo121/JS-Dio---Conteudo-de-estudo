// Retorna um array interator que contém as chaves para cada elemento do array
// pega as posições de cada valor


const arr = [1, 2, 3, 4];

const arrIterator = arr.keys();

arrIterator.next();
// {value: 0, done: false}

arrIterator.next();
// {value: 1, done: false}

arrIterator.next();
// {value: 2, done: false}

arrIterator.next();
// {value: 3, done: false}