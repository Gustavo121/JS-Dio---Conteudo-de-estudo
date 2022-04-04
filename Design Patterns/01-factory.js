function Pessoa(customProperties) {
    return {
        name: 'Gustavo',
        lastName: 'Gouvea',
        ...customProperties
    }
}

const p = Pessoa({name: 'Custom-Name', age: 27});
console.log(p);