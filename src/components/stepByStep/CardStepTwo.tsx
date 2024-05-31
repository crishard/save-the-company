import { StreamLanguage } from '@codemirror/language';
import { javascript } from '@codemirror/legacy-modes/mode/javascript';
import CodeMirror from '@uiw/react-codemirror';

interface ICardStepTwoProps {
  title: string,
  text: string,
  code: string,
}

export const CardStepTwo = ({ title, text, code }: ICardStepTwoProps) => {

  const javascriptCode = code;
  return (
    <div>

      <h1>{title}</h1>
      <p>{text}</p>

      <div className='px-12 flex justify-center'>
        <CodeMirror className='w-full px-32 py-14 ' value={javascriptCode} height="200px" extensions={[StreamLanguage.define(javascript)]} />
      </div>
    </div>
  )
}
