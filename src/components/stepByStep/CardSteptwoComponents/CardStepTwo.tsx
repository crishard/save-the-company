import { StreamLanguage } from '@codemirror/language';
import { javascript } from '@codemirror/legacy-modes/mode/javascript';
import CodeMirror from '@uiw/react-codemirror';

interface ICardStepTwoProps {
  title: string,
  text: string,
  code: string,
  saida: string,
}

export const CardStepTwo = ({ title, text, code, saida }: ICardStepTwoProps) => {

  const javascriptCode = code;
  return (
    <div className='px-12 py-8'>
      <div className='flex justify-center py-3'>

        <h1 className='text-bold text-4xl'>{title}</h1>
      </div>
      <p className='text-lg'>{text}</p>

      <div className='px-12 py-6 flex justify-center'>
        <CodeMirror className='w-full px-32' value={javascriptCode} height="240px" extensions={[StreamLanguage.define(javascript)]} />
      </div>

      <div className='flex justify-center text-lg'>
        <p>Saída: {saida}</p>
      </div>
    </div>
  )
}
