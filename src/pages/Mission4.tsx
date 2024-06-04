import { StreamLanguage } from '@codemirror/language';
import { javascript } from '@codemirror/legacy-modes/mode/javascript';
import CodeMirror from '@uiw/react-codemirror';
import { useState } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { Button } from '../../@/components/ui/button';

const initialJavascriptCode = `// Definindo um array
const array = [1, 2, 3, 4, 5];

// Usando um loop while para iterar sobre o array
let i = 0;
while (i < array.length) {
    console.log(array[i]);

}
`;

const Mission4 = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(initialJavascriptCode);

  const handleCodeChange = (value: any) => {
    setCode(value);
  };

  const AvaliateCode = (code: any) => {
    const correctArrayDeclaration = /const\s+array\s*=\s*\[.+\];/;
    const correctWhileLoopStructure = /let\s+i\s*=\s*0;\s*while\s*\(i\s*<\s*array.length\)\s*\{\s*console\.log\(array\[i\]\);\s*i\+\+\s*;\s*\}/;

    return correctArrayDeclaration.test(code) && correctWhileLoopStructure.test(code);
  };

  const faseTwo = async () => {
    const loadingToastId = toast.loading("Validando alterações");
    const isValid = AvaliateCode(code);
    setTimeout(() => {
      toast.dismiss(loadingToastId);
      if (isValid) {
        toast.success('Código correto! Avançando para a próxima fase.');
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error('Código incorreto. Corrija a estrutura do while.');
      }
    }, 2000)
  };

  return (
    <section className='px-10 py-16 bg-gray-200'>
      <Toaster />
      <Fade triggerOnce={true} duration={1000} direction='up'>
        <div className='flex justify-center font-bold text-4xl pb-8'>
          <h1>Fase 4</h1>
        </div>
        <p className='text-lg'>Para avançar de fase e continuar salvando a empresa, é hora de corrigir o código vulnerável no código fonte da empresa, identifique os erros de declaração de variável e dê mais um passo rumo a vitória!</p>
        <p className='pt-4 text-green-600'>Dica: analise a estrutura do laço de repetição e a declaração das variáveis</p>
      </Fade>
      <div className='px-12 flex justify-center'>
        <Slide triggerOnce duration={1000}>
          <CodeMirror
            className='w-full px-32 py-14'
            value={code}
            height="200px"
            extensions={[StreamLanguage.define(javascript)]}
            onChange={handleCodeChange}
          />
        </Slide>
      </div>
      <div className='flex justify-center'>
        <Fade triggerOnce={true} duration={1000} direction='down'>
          <Button onClick={faseTwo} className=' px-3 py-3  transition ease-linear bg-indigo-500 rounded text-white font-semibold  hover:bg-slate-300 hover:text-gray-700 border-2 hover:border-gray-700'>
            Avaliar Mudanças
          </Button>
        </Fade>
      </div>
    </section>
  );
}

export default Mission4;
