

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
import { Button } from '../../@/components/ui/button';

const javascriptCode = `const a = 12
let b = "Juarez"`;

function Mission1() {
  return (
    <section className='px-10 py-16 bg-gray-200'>
      <div className='flex justify-center font-bold text-4xl pb-8'>
        <h1>Fase 1 </h1>
      </div>
      <p className='text-lg'>Para avançar de fase e continuar salvando a empresa, é hora de corrigir o código vulnerável no código fonte da empresa, identifique os erros de declaração de variável e dê mais um passo rumo a vitória!</p>
      <div className='px-12 flex justify-center'>
        <CodeMirror className='w-full px-32 py-14 ' value={javascriptCode} height="200px" extensions={[StreamLanguage.define(javascript)]} />
      </div>
      <div className='flex justify-center'>
        <Button className='bg-indigo-600 rounded px-2 py-2 text-gray-800 hover:bg-indigo-400 hover:text-gray-100 transition ease-linear'>Avaliar Mudanças</Button>

      </div>
    </section>
  )
}
export default Mission1