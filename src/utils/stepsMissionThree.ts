
const stepsMissionThree = {

    // card 1
    title: 'Operadores Lógicos 2: for',
    textSubtitlePage: 'HORA DE DAR SEGUIMENTO',
    text1: 'O operador for é usado para criar loops, permitindo a repetição de um bloco de código um número específico de vezes. A estrutura básica de um loop for em JavaScript contém: Inicialização, Condição e Incremento',
    text2: 'O loop for é frequentemente usado para iterar sobre elementos de arrays ou outras estruturas de dados iteráveis. Isso permite acessar e manipular cada elemento individualmente. Ex: arrays, arquivos de texto, json e outros.',
    text3: 'O loop for oferece um controle preciso sobre a execução do loop, permitindo que você ajuste a inicialização, condição e incremento conforme necessário. Isso torna o for muito flexível para uma variedade de situações.',
    exemplo1: 'Exemplo: idade é mais claro que "i"', exemplo2: '', exemplo3: '',
    subtitle1: 'Estrutura de Repetição', subtitle2: 'Iteração sobre Estruturas de Dados', subtitle3: 'Flexibilidade e Controle',

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
    saida: '1 2 3 4 5',
    popover1Text: "O loop for começa com a inicialização var i = 0, onde i é a variável de controle do loop",
    popover2Text: 'A condição i < array.length é verificada antes de cada iteração do loop. Enquanto i for menor que o comprimento do array (array.length), o loop continuará',
    popover3Text: 'O incremento i++ é executado após cada iteração, aumentando o valor de i em 1.',


    // card 3
    title1: "Erros mais comuns",
    title2: "Como corrigi-los",
    textCardThree1: "Erro de sintaxe, uso incorreto do índice, esquecer de inicializar o índice, erro de condição de parada, escopo de variáveis, modificação inesperada do array, variáveis não definidas",
    textCardThree2: "Certifique-se de sempre incluir os parênteses que delimitam a condição do loop, Não inicializar a variável do índice resulta em comportamento imprevisível, verifique se a condição de parada é alcançável, Utilize let para garantir que a variável do índice esteja no escopo adequado, Defina todas as variáveis necessárias antes de usá-las dentro do loop",
}
export default stepsMissionThree