import { StreamLanguage } from '@codemirror/language';
import { javascript } from '@codemirror/legacy-modes/mode/javascript';
import CodeMirror from '@uiw/react-codemirror';
import { MdOutlineControlPoint } from "react-icons/md";

interface ICardStepTwoProps {
  title: string,
  text: string,
  text2: string,
  text3: string,
  code: string,
  saida: string,
}

export const CardStepTwo = ({ title, text, code, saida, text2, text3 }: ICardStepTwoProps) => {

  const javascriptCode = code;
  return (
    <div className='px-12 py-8'>
      <div className='flex justify-center py-3'>

        <h1 className='text-bold text-4xl'>{title}</h1>
      </div>
      <div className='px-10'>
        <div className='flex gap-2 items-center text-2xl'><MdOutlineControlPoint /><p className='text-lg font-medium py-1 '>{text}</p></div>
        <div className='flex gap-2 items-center text-2xl'><MdOutlineControlPoint /><p className='text-lg font-medium py-1 '>{text2}</p></div>
        <div className='flex gap-2 items-center text-2xl'><MdOutlineControlPoint /><p className='text-lg font-medium py-1 '>{text3}</p></div>



      </div>

      <div className='px-12 py-6 flex justify-center'>
        <CodeMirror className='w-full px-32' value={javascriptCode} height="240px" extensions={[StreamLanguage.define(javascript)]} />
      </div>

      <div className='flex justify-center text-lg'>
        <p>Saída: {saida}</p>
      </div>
    </div>
  )
}
