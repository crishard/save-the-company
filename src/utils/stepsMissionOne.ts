
const stepsMissionOne = {

    // card 1
    title: 'Primeiro Passo: Declaração de Variáveis',
    textSubtitlePage: 'CHEGOU A HORA DO SHOW',
    text1: 'Utilizar nomes que reflitam o propósito da variável facilita a leitura e a compreensão do código por outras pessoas, além de ajudar na manutenção futura.',
    text2: 'Declarar variáveis no escopo adequado: Variáveis locais são acessíveis apenas dentro do bloco de código onde foram definidas, enquanto variáveis globais podem ser acessadas por qualquer parte do programa.',
    text3: 'Declarar o tipo de dado adequado para a variável (inteiro, string, booleano, etc.) é importante para garantir que as operações realizadas com a variável sejam válidas e para aproveitar melhor os recursos de memória.',
    exemplo1: 'Exemplo: idade é mais claro que "i"', exemplo2: '', exemplo3: '',
    subtitle1: 'Escolha de nomes significativos:', subtitle2: 'Definição do escopo', subtitle3: 'Inicialização e tipo de dados:',

    // card 2
    titleCard2: 'Você pode declarar uma variável de três formas:',
    textCard2: 'Com a palavra chave var. Por exemplo, var x = 42. Esta sintaxe pode ser usada para declarar tanto variáveis locais como variáveis globais. ',
    text2Card2: 'Com a palavra chave let. Por exemplo, let y = 13. Essa sintaxe pode ser usada para declarar uma variável local de escopo de bloco.',
    text3Card2: 'Você não pode declarar uma constante com o mesmo nome de uma função ou variável que estão no mesmo escopo',

    codigo: `// Definindo duas variáveis
    var a = 180;
    var b = 80;
    
    const imc = b / a**2
    console.log(imc)
    `,
    saida: '24.69'
}
export default stepsMissionOne