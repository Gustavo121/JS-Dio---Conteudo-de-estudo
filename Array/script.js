let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];

// forEach //function no array... realiza uma repetição para cada indice do array
// array.forEach(function(item, index){console.log(item, index)})


// array.push('novo item'); coloca mais 1 elemento no final do array
// console.log(array);


// array.pop();       remove o ultimo elemento do array
// console.log(array);


// array.shift();     remove o primeiro elemento do array
// console.logo(array); 


// array.unshift('novo item no inicio')  coloca um elemento no inicio do array
// console.log(array);


// console.log(array.indexOf(true));  assim ele passa a posição do true no array


// array.slice(0, 3); apagou as posições citadas, e retornou um novo array
// console.log(array);


// let novoArray = array.slice(0, 3);  retorna em um novo array as 3 primeiras posições
// console.log(novoArray);


let object = { string: 'string', number: 1, boolean: true, array: ["array"], objectInterno: { objectInterno: 'objeto interno'}};

/* console.log(object.objectInterno);

var string = object.string;       Destruturação pegando partes de um objeto
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno); */

var { string, boolean, objectInterno } = object;
console.log(string, boolean, objectInterno);
