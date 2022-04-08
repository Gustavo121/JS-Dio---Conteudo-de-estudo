// Ordena os elementos de um array de acordo com a condição

const students = [
    {name: 'Gustavo', grande: 7},
    {name: 'Julia', grade: 6},
    {name: 'Marisa', grade: 8}
]

students.sort((current, next) => current.grade - next.grade);

// ele vai ordenar do menor para o maior as notas do alunos

const arr = [1, 3, 2, 5, 4]

arr.sort();

//[1, 2, 3, 4, 5]