import { StreamLanguage } from '@codemirror/language';
import { javascript } from '@codemirror/legacy-modes/mode/javascript';
import CodeMirror from '@uiw/react-codemirror';
import { MdOutlineControlPoint } from "react-icons/md";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../../@/components/ui/popover";


interface ICardStepTwoProps {
  title: string,
  text: string,
  text2: string,
  text3: string,
  code: string,
  saida: string,
  popover1Text: string,
  popover2Text: string,
  popover3Text: string,
}

export const CardStepTwo = ({ title, text, code, saida, text2, text3, popover1Text, popover2Text, popover3Text}: ICardStepTwoProps) => {

  const javascriptCode = code;
  return (
    <div className='px-12 py-6'>
      <div className='flex justify-center py-3'>

        <h1 className='text-bold text-4xl'>{title}</h1>
      </div>
      <div className='pb-2'>
        <div className='flex gap-2 items-center text-2xl pb-3'>
          <Popover>
            <PopoverTrigger><MdOutlineControlPoint className='text-indigo-500' /></PopoverTrigger>
            <PopoverContent className='bg-gray-400 rounded mx-20  font-medium'>{popover1Text}</PopoverContent>
          </Popover>
          <p className='text-xl font-medium py-1 '>{text}</p></div>
        <div className='flex gap-2 items-center text-2xl pb-3'>
          <Popover>
            <PopoverTrigger><MdOutlineControlPoint className='text-indigo-500' /></PopoverTrigger>
            <PopoverContent className='bg-gray-400 rounded mx-20 font-medium'>{popover2Text}</PopoverContent>
          </Popover>
          <p className='text-xl font-medium py-1 '>{text2}</p>
        </div>
        <div className='flex gap-2 items-center text-2xl'>
          <Popover>
            <PopoverTrigger><MdOutlineControlPoint className='text-indigo-500' /></PopoverTrigger>
            <PopoverContent className='bg-gray-400 rounded mx-20  font-medium'>{popover3Text}</PopoverContent>
          </Popover>
          <p className='text-xl font-medium py-1 '>{text3}</p>
        </div>



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
