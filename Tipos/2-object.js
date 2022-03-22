const user = {
    name: 'Gustavo',
    lastName: 'Gouvêa Damião'
}

// Recupera as chaves do objeto
console.log('Propriedades do objeto user:', Object.keys(user));

// Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user:', Object.values(user));

// Retorna um array de arrays contendo [ nome_prop, valor_ prop ]
console.log('\nLista de propriedades e valores:', Object.entries(user));

// Margear propriedades de objetos
Object.assign(user, {fullName: 'Gustavo Gouvêa Damião'})

console.log('\nAdiciona a propriedade fullName no objeto user', user);
console.log('\nRetorna um novo objeto mergeado dois ou mais objetos', Object.assign({}, user, {age:26}));

// Previne todas as alterações em um objeto
const newObj = { foo: 'bar' };
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariável newObj após as alterações:', newObj);

// Permite apenas a alteração de propriedades existentes em um objeto
const person = { name: 'Gustavo'};
Object.seal(person);

person.name = 'Gustavo Gouvêa';
delete person.name;
person.age = 26;

console.log('\nVariável person após as alterações:', person);
