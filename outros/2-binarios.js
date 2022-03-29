// in
something in somethingItems

// Arrays
var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro");
0 in arvores;               // retorna true - (posição localizada no Array)
3 in arvores;               // retorna true - (posição localizada no Array)
6 in arvores;               // retorna false - (posição não localizada no Array)
"cedro" in arvores;         // retorna false - (você deve especificar o número do índice, não o valor)
"length" in arvores;        // retorna true - (length é uma propriedade de Array)

// Objetos predefinidos
"PI" in Math;               // retorna true
var minhaString = new String("coral");
"length" in minhaString;    // retorna true

// Objetos personalizados
var meucarro = {marca: "Honda", modelo: "Accord", ano: 1998};
"marca" in meucarro;        //retorna true
"modelo" in meucarro;       //retorna true

// instaceof
objeto instanceof tipoObjeto

var dia = new Date(2018, 12, 17);

if( dia instanceof Date) {
    // code here
}