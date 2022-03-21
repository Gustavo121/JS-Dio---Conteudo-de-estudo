let user = {
    name: 'Gustavo'
};

console.log(user);
// Alterando a propriedade de um objeto
user.name = 'Outro nome 1';
console.log(user);
user['name'] = 'Outro nome 2';

console.log(user);

const prop = 'name';
user[prop] = 'Outro nome 3';

console.log(user);
// Criando um propriedade
user.lastName = 'Gouvêa Damião';

// Deletando uma propriedade
delete user.name;