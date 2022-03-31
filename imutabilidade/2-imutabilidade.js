const students = [
    {
        name: 'Grace',
        grade: 7
    },
    {
        name: 'Jannifer',
        grade: 4
    },
    {
        name: 'Paul',
        grade: 10
    }
];

function getApprovedStundets(stundentsList) {
    return studentsList.filter(students => students.grade >= 7);    
}

console.log('Alunos aprovados:');
console.log(getApprovedStundets(students));

console.log('\nLista de alunos:')
console.log(students)

