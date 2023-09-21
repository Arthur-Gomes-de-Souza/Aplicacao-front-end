function ex01() {
    var opcao = prompt('Menu de opções:\n1. Somar dois números.\n2. Raiz quadrada de um número.\nDigite a opção desejada:');

    opcao = parseInt(opcao);

    switch (opcao) {
        case 1: somaDoisNumeros(); break;
        case 2: raizQuadrada(); break;
        default: alert('OPÇÃO INVÁLIDA!');
    }

    function somaDoisNumeros() {
        var n1 = prompt('Digite o primeiro número:');
        var n2 = prompt('Digite o segundo número:');
        var soma;

        n1 = parseInt(n1);
        n2 = parseInt(n2);

        soma = n1 + n2;

        alert('Soma dos números = ' + soma);
    }

    function raizQuadrada() {
        var numero = prompt('Digite um número:');

        alert('Raiz quadrada do número = ' + Math.sqrt(numero));
    }
}