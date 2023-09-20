function ex01() {
    var area;
    var raio = prompt("Digite o raio: ");

    area = Math.PI * Math.pow(raio, 2);
    document.write("Área da circunferência = " + area);
}

function ex02() {
    var area;
    var base = prompt("Digite o valor da base: ");
    var altura = prompt("Digite o valor da altura: ");

    area = (base * altura) / 2;
    document.write(`Área do triângulo = ${area}`);
}

function ex03() {
    var nome = prompt("Digite seu nome: ");
    var sobrenome = prompt("Digite seu sobrenome: ");
    var nomeCompleto = nome + " " + sobrenome;

    alert('Nome completo: ' + nomeCompleto);
}

function ex04() {
    var n1 = prompt('Digite um número inteiro: ');
    var n2 = prompt('Digite outro número inteiro: ');
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    var soma = n1 + n2;

    alert("Soma entre os números = " + soma);
}

function ex05() {
    var ht = prompt('Informe as horas trabalhadas no mês:');
    var vh = prompt('Informe o valor da hora trabalhada:');
    var pd = prompt('Informe o percentual de desconto:');
    var salarioBruto;
    var td;
    var salarioLiquido;

    salarioBruto = ht * vh;
    td = (pd / 100) * salarioBruto;
    salarioLiquido = salarioBruto - td;

    alert('Horas trabalhadas: ' + ht + '\nSalário Bruto: ' + salarioBruto + '\nDesconto: ' + td + '\nSalário Líquido: ' + salarioLiquido);
}

function ex06() {
    var celsius = prompt('Digite a temperatura em graus Celsius:');
    var fahrenheit;

    fahrenheit = (9 * celsius + 160) / 5;

    alert('Temperatura em Fahrenheit = ' + fahrenheit);
}

function ex07() {
    var fahrenheit = prompt('Digite a temperatura em Fahrenheit:');
    var celsius;

    celsius = (fahrenheit - 32) * (5 / 9);

    alert('Temperatura em graus Celsius = ' + celsius);
}

function ex08() {
    var raio = prompt('Digite o valor do raio:')
    var altura = prompt('Digite o valor da altura:')
    var volume;

    volume = 3.14159 * Math.pow(raio, 2) * altura;

    alert('Volume da lata de óleo = ' + volume);
}

function ex09() {
    var tempoGasto = prompt('Digite o tempo gasto na viagem:');
    var velMedia = prompt('Digite a velocidade média durante a viagem:');
    var distanciPercorrida;
    var litrosUsados;

    distanciPercorrida = tempoGasto * velMedia;
    litrosUsados = distanciPercorrida / 12;

    alert('Velocidade Média = ' + velMedia + '\nTempo gasto na viagem = ' + tempoGasto + '\nDistância percorrida = ' + distanciPercorrida + '\nQuantidade de litros utilizada na viagem = ' + litrosUsados);
}

function ex10() {
    var a = prompt('Digite o valor de A:');
    var b = prompt('Digite o valor de B:');
    var auxiliar;

    auxiliar = a;
    a = b;
    b = auxiliar;

    alert('Valores trocados A = ' + a + '; B = ' + b);
}