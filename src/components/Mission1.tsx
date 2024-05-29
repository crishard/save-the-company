

// export const Mission1 = () => {


//   return (
//     <section>
//       <div>
//         <h2>Sua primeira missão para salvar a empresa é sobre declaração de variáveis.</h2>

//         <p>Declarar uma variável significa informar ao computador que reserve um espaço na memória para armazenar um determinado tipo de dado e que este espaço será identificado por um nome.</p>
//       </div>

//       <p>Em C, antes de usar uma variável, você precisa declará-la, especificando o tipo de dados que ela irá armazenar.</p>
//       <div>
//         <h3>Exemplo</h3>
//         <p>
//           <code>
//             int main()
//           </code>
//           <br />
//           int numero;  // Variável do tipo inteiro <br />
//           float decimal;  // Variável do tipo ponto flutuante (número com casas decimais) <br />
//           char caractere; // Variável do tipo caractere (letra ou símbolo) <br />
//           <br />

//         // Atribuindo valores às variáveis
//           numero = 10; <br />
//           decimal = 3.14; <br />
//           caractere = 'A'; br

//         </p>
//       </div>

//       <div>
//         <h2>O hacker que invadiu a empresa se utilizou de um erro de códio no código fonte da empresa, o seu dever é detect-alo e corrigi-lo</h2>


//       </div>

//     </section>
//   )
// }
import { StreamLanguage } from '@codemirror/language';
import { javascript } from '@codemirror/legacy-modes/mode/javascript';
import CodeMirror from '@uiw/react-codemirror';

const javascriptCode = `const a = 12
let b = "Juarez"`;

function Mission1() {
  return (
    <section>

      <h1>Fase 1 </h1>
      <p>Para avançar de fase e continuar salvando a empresa, é hora de corrigir o código vulnerável no código fonte da empresa, identifique os erros de declaração de variável e dê mais um passo rumo a vitória!</p>

      <div className='px-12 flex justify-center'>

        <CodeMirror className='w-full px-32 py-14 ' value={javascriptCode} height="200px" extensions={[StreamLanguage.define(javascript)]} />
      </div>
    </section>
  )
}
export default Mission1