const name = 'Gustavo';

// Não podemos alterar o valor
name = 'Gustavo';

const user = {
    name: 'Gustavo'
};

// Mas se for um objeto, podemos trocar suas propriedades
user.name = 'Outro nome';

//Não podemos fazer o objeto "apontar" para outro lugar
user = {
    name: 'Guilherme'
};

const persons = ['Gustavo', 'Julia', 'Marisa'];

//Podemos adicionar novos itens
persons.push('João');

//Podemos remover algum item
persons.shift();

//Podemos alterar diretamente
persons[1] = 'James'

console.log('\nArray após as alterações: ', persons);