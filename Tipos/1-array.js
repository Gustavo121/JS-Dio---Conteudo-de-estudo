const users = ['Gustavo', 'Julia', 'Marisa'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Gustavo',
        age: 30,
        gender: gender.MAN
    },
    {
        name: 'Julia',
        age: 35,
        gender: gender.WOMAN
    },
    {
        name: 'Marisa',
        age: 60,
        gender: gender.WOMAN
    }
];

// Retornar a quantidade de itens de um array
console.log('Items', persons.length);

// Verificar se é array
console.log('A variável persons é uma array:', Array.isArray(persons));

// Iterar os itens do array
persons.forEach(person => {
    console.log(`Nome: ${person.name}`);
});

// Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\nNova lista apenas com homens', mens);

// Retornar um novo array
const personsWithCourse = persons.map(person => {
    person.course = 'Introdução ao JavaScript';
    return person;
});

console.log('\nPessoas com a adição do course:', personsWithCourse);

// Transformar um array em outro tipo (soma de idades)
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log('\nSoma de idade das pessoas', totalAge);

// Juntando operações

const totalEvenAges = persons
                        .filter(person => person.age % 2 === 0) 
                        .reduce((age, person) => {
                            age += person.age;
                            return age;
                        }, 0);