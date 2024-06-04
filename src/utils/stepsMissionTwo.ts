
const stepsMissionTwo = {

    // card 1
    title: 'Operadores Lógicos 1: if & else',
    textSubtitlePage: 'HORA DE DAR SEGUIMENTO',
    text1: 'O uso dos operadores if e else permite que você controle o fluxo de execução do seu programa. O if avalia uma condição booleana (True ou False). Se a condição for True, o bloco de código indentado abaixo dele será executado. Caso contrário, o programa saltará para o bloco de código abaixo do else',
    text2: 'Você pode aninhar várias instruções if e else para lidar com múltiplas condições e cenários complexos usando elif (abreviação de "else if") Isso permite verificar diversas condições em sequência, onde cada elif é avaliado somente se todas as condições anteriores forem False.',
    text3: 'A utilização correta de if e else é crucial para implementar a lógica de negócios de um programa, desde simples verificações até decisões complexas. Isso torna esses operadores fundamentais em quase todas as linguagens de programação',
    exemplo1: '', exemplo2: '', exemplo3: '',
    subtitle1: 'Estrutura de Decisão Condicional', subtitle2: 'Blocos Aninhados e Múltiplas Condições', subtitle3: 'Importância na Lógica de Programação',

    // card 2
    titleCard2: 'Exemplo do uso em uma implementação real:',
    textCard2: 'Estrutura Básica de Condicional if-else:',
    text2Card2: 'Comparação entre Variáveis:',
    text3Card2: 'Fluxo de Controle:',
    codigo: `// Definindo duas variáveis
    var valor1 = 10;
    var valor2 = 20;
    
    // Verificando qual variável é maior
    if (valor1 > valor2) {
        console.log("o valor1 é maior que o valor2");
    } else {
        console.log("o valor1 não é maior que o valor2");
    }
    `,
    saida: 'o valor1 não é maior que o valor2',
    popover1Text: "O código utiliza a estrutura if-else para tomar decisões com base em uma condição: se verdadeiro é executado somente o bloco if, se falso é executado o bloco else",
    popover2Text: 'O código compara as variáveis a e b usando o operador de comparação: maior que ">". ',
    popover3Text: 'A estrutura if-else altera o fluxo de execução do programa com base na condição : "valor1>valor2"',


    // card 3
    textLeft: "Excesso de condicionais aninhadas, condições redundantes ou desnecessárias, complexidade ciclomática alta(com muitos if-else), comparações inadequadas, ausência de else quando necessário",
    textRight: "Simplifique as condições e remova redundâncias, Divida a lógica em funções menores ou use padrões de design para gerenciar a complexidade, Use comparações estritas (=== e !==) para maior precisão, Certifique-se de cobrir todos os casos possíveis, especialmente quando há múltiplas condições, Certifique-se de cobrir todos os casos possíveis, especialmente quando há múltiplas condições.",
    titleLeft: "O que evitar",
    titleRight: "Como corrigir possíveis erros"
}
export default stepsMissionTwo