function fn() {
    console.log(text);

    var text = 'Exemplo';

    console.log(text);
}

fn();

// Assim ele da undefined na primeira chamada, e depois mostra o Exemplo


/**
 function fn() {
     var text;
     console.log(text);

     text = 'Exemplo';

     console.log(text);
 }
 */