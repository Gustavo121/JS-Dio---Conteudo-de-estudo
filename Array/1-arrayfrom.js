const divs = document.querySelectorAll('div')

console.log(divs);
// undefined

const divArray = Array.from(divs)

console.log(divArray)

// transforma todo conteudo em array, antes era um node list
// assim consigo usar função pop. shift. e outras como se fosse um array