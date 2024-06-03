
const stepsMissionThree = {

    // card 1
    title: 'Operadores Lógicos 2: for',
    textSubtitlePage: 'HORA DE DAR SEGUIMENTO',
    text1: 'O operador for é usado para criar loops, permitindo a repetição de um bloco de código um número específico de vezes. A estrutura básica de um loop for em JavaScript contém: Inicialização, Condição e Incremento',
    text2: 'O loop for é frequentemente usado para iterar sobre elementos de arrays ou outras estruturas de dados iteráveis. Isso permite acessar e manipular cada elemento individualmente.',
    text3: 'O loop for oferece um controle preciso sobre a execução do loop, permitindo que você ajuste a inicialização, condição e incremento conforme necessário. Isso torna o for muito flexível para uma variedade de situações, como loops com passos variáveis, decrementos, ou iterações complexas.',
    exemplo1: 'Exemplo: idade é mais claro que "i"', exemplo2: '', exemplo3: '',
    subtitle1: 'Escolha de nomes significativos:', subtitle2: 'Definição do escopo', subtitle3: 'Inicialização e tipo de dados:',

    // card 2
    titleCard2: 'Exemplo do uso em uma implementação real:',
    textCard2: 'Inicialização',
    text2Card2: 'Condição',
    text3Card2: 'Incremento',
    codigo: `// Definindo um array
    var array = [1, 2, 3, 4, 5];
    
    // Usando um loop for para iterar sobre o array
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }  
    `,
    saida: '24.69',
    popover1Text: "O loop for começa com a inicialização var i = 0, onde i é a variável de controle do loop",
    popover2Text: 'A condição i < array.length é verificada antes de cada iteração do loop. Enquanto i for menor que o comprimento do array (array.length), o loop continuará',
    popover3Text: 'O incremento i++ é executado após cada iteração, aumentando o valor de i em 1.',
}
export default stepsMissionThree