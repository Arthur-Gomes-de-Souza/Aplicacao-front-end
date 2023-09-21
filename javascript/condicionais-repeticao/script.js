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

function ex02() {
    var nota1 = prompt('Digite a nota do trabalho de laboratório:');
    var nota2 = prompt('Digite a nota da avaliação semestral:');
    var nota3 = prompt('Digite a nota do exame final:');
    var peso1 = prompt('Digite o peso da nota do trabalho de laboratório:');
    var peso2 = prompt('Digite o peso da nota da avaliação semestral:');
    var peso3 = prompt('Digite o peso da nota do exame final:');
    var mediaAprovacao = prompt('Digite a média necessária para aprovação do aluno:');
    var media, soma, somaPesos;

    peso1 = parseInt(peso1);
    peso2 = parseInt(peso2);
    peso3 = parseInt(peso3);

    soma = nota1 * peso1 + nota2 * peso2 + nota3 * peso3;
    somaPesos = peso1 + peso2 + peso3;
    media = soma / somaPesos;

    if (media >= mediaAprovacao) {
        alert('Média ponderada: ' + media + '\nSituação: Aprovado');
    } else if (media >= 4) {
        alert('Média ponderada: ' + media + '\nSituação: Exame especial');
    } else {
        alert('Média ponderada: ' + media + '\nSituação: Reprovado');
    }
} 

function ex03() {
    do {
        var idade = prompt('Digite a idade do nadador:');
        if (idade < 5) {
            alert('IDADE INVÁLIDA! TENTE NOVAMENTE.');
        }
    } while (idade < 5);

    if (idade <= 7) {
        alert('Categoria: Infantil.');
    } else if (idade <= 10) {
        alert('Categoria: Juvenil.');
    } else if (idade <= 15) {
        alert('Categoria: Adolescente.');
    } else if (idade <= 30) {
        alert('Categoria: Adulto.');
    } else {
        alert('Categoria: Sênior.');
    }
}

function ex04() {
    var h, f, g;
    var x = prompt('Digite o valor do ponto X:');
    x = parseFloat(x);

    h = Math.pow(x, 2) - 16;

    if (h >= 0) {
        f = h;
    } else {
        f = 1;
    }

    if (x > 5) {
        g = Math.pow(x, 2) + 16;
    } else {
        g = (-x) / 2;
    }

    alert('Valor da função h(x) = ' + h + '\nValor da função f(x) = ' + f + '\nValor da função g(x) = ' + g);
}

function ex05() {
    var numeros = [];
    var pares = 0, impares = 0;
    do {
        var numero = prompt('Digite um número (-1 para encerrar):');
        if (numero == -1) {
            break;
        }
        numeros.push(numero);

    } while (numero != -1);

    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 0) {
            pares++;
        } else {
            impares++;
        }
    }

    alert('Quantidade de números digitados: ' + numeros.length + '\nQuantidade de números pares: ' + pares + '\nQuantidade de números ímpares: ' + impares);
}

function ex06() {
    var numeros = [];
    var numero, maiorNum = null, menorNum = 9999;
    var repeticoes = prompt('Digite a quantidade de números que deseja inserir:');

    for (var i = 0; i < repeticoes; i++) {
        numero = prompt('Digite um número:')
        numero = parseFloat(numero);
        numeros.push(numero);
    }

    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] > maiorNum) {
            maiorNum = numeros[i];
        }
        if (numeros[i] < menorNum) {
            menorNum = numeros[i];
        }
    }

    alert('Maior número: ' + maiorNum + '\nMenor número: ' + menorNum);
}