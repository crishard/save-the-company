
const stepsMissionFour = {

    // card 1
    title: 'Operadores Lógicos 3: While',
    textSubtitlePage: 'HORA DE DAR SEGUIMENTO',
    text1: 'A condição no laço while é avaliada antes da execução de cada iteração. Se a condição for verdadeira, o bloco de código dentro do laço é executado. Se for falsa, o laço é interrompido. É crucial garantir que a condição eventualmente se torne falsa para evitar loops infinitos.',
    text2: 'Um loop while pode facilmente se tornar um loop infinito se a condição nunca for falsa. Para evitar isso, é importante modificar o estado dentro do loop de forma que a condição possa se tornar falsa em algum momento.',
    text3: 'É útil quando o número de iterações não é conhecido previamente e depende de uma condição dinâmica. Exemplo: leitura de dados até o fim de um arquivo.',
    exemplo1: 'A condição é avaliada antes de cada iteração', exemplo2: 'Evite loops infinitos garantindo que a condição se torne falsa eventualmente.', exemplo3: 'Ideal para situações onde o número de iterações não é conhecido',
    subtitle1: 'Condição Inicial e Avaliação', subtitle2: 'Possibilidade de Loop Infinito', subtitle3: ' Uso Adequado para Condições Dinâmicas',

    // card 2
    titleCard2: 'Exemplo do uso em uma implementação real:',
    textCard2: 'Inicialização do Índice',
    text2Card2: 'Condição do Loop',
    text3Card2: ' Incremento do Índice',
    codigo: `const lines = ["Primeira linha", "Segunda linha", "Terceira linha", "Quarta linha", "Quinta linha"];

    //   inicialização do índice
      let index = 0;

    //   Condição do loop while
      while (index < lines.length) {
        console.log("Linha {index + 1}: {lines[index]}");
        // incremento do índice
        index++;
      }
        
    `,
    saida: '1 2 3 4 5',
    popover1Text: "Antes do while, inicializamos uma variável index que será usada para rastrear a posição atual no array.",
    popover2Text: 'A condição do while é index < lines.length. Isso significa que o loop continuará enquanto index for menor que o comprimento do array lines.',
    popover3Text: 'No final de cada iteração, incrementamos o index para avançar para o próximo elemento do array.',


    // card 3
    title1: "Erros mais comuns",
    title2: "Como corrigi-los",
    textCardThree1: "Loop infinito, modificação incorreta da condição, condição nunca verdadeira, erro de escopo, alteração da condição dentro do loop, esquecer de inicializar a variável de controle, uso incorreto de operadores lógicos",
    textCardThree2: "Incrementar a variável de controle dentro do loop, usar um incremento adequado para a variável de controle, definir a variável de controle no escopo correto, inicializar corretamente a variável de controle, usar operadores de comparação corretos na condição do loop.",
}
export default stepsMissionFour