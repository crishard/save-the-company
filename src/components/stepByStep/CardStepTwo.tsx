import { StreamLanguage } from '@codemirror/language';
import { javascript } from '@codemirror/legacy-modes/mode/javascript';
import CodeMirror from '@uiw/react-codemirror';

interface ICardStepTwoProps {
  title: string,
  text: string,
  code: string,
}

export const CardStepTwo = ({ }: ICardStepTwoProps) => {

  const javascriptCode = `// Definindo duas variáveis
  var a = 10;
  var b = 20;
  
  // Verificando qual variável é maior
  if (a > b) {
      console.log("a é maior que b");
  } else {
      console.log("a não é maior que b");
  }
  `;
  return (
    <div>

      <h1>Exemplo do uso em uma implementação real:</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor sunt aliquam deserunt dolore, a beatae atque necessitatibus ipsam numquam natus nostrum quae, blanditiis dignissimos dolorem!</p>

      <div className='px-12 flex justify-center'>
        <CodeMirror className='w-full px-32 py-14 ' value={javascriptCode} height="200px" extensions={[StreamLanguage.define(javascript)]} />
      </div>
    </div>
  )
}
