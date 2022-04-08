function init() {
    const exemplo = 'Essa variável';

    return function(exemplo) {
        console.log(`1 - 0 valor da variável exemplo é: ${exemplo}.`);

        return function(exemplo) {
            console.log(`2 - 0 valor da variável exemplo é: ${exemplo}.`);

            return function(exemplo) {
                console.log(`3 - 0 valor da variável exemplo é: ${exemplo}.`);
            }
        }
    }
}

const initFn1 = init();

const initFn2 = initFn1();

const initFn3 = initFn2();

initFn3();

// Closure ou escopo léxico é a capacidade da função "lembrar" do seu contexto de criação.