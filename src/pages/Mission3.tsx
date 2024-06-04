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

// Usando um loop for com um erro na estrutura
for let i = 0; i < array.length; i++ {
    console.log(array[i]);
}
`;

const Mission3 = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(initialJavascriptCode);

  const handleCodeChange = (value: any) => {
    setCode(value);
  };

  const AvaliateCode = (code: any) => {
    const correctForLoopStructure = /for\s*\(let\s+i\s*=\s*0;\s*i\s*<\s*array.length;\s*i\+\+\)\s*\{\s*console\.log\(array\[i\]\);\s*\}/;

    return correctForLoopStructure.test(code);
  };

  const faseTwo = async () => {

    const loadingToastId = toast.loading("Validando alterações");
    const isValid = AvaliateCode(code);
    setTimeout(() => {
      toast.dismiss(loadingToastId);
      if (isValid) {
        toast.success('Código correto! Avançando para a próxima fase.');
        setTimeout(() => {
          navigate("/step/mission4");
        }, 2000);
      } else {
        toast.error('Código incorreto. Corrija a declaração do array e a estrutura do loop for.');
      }
    }, 2000)
  };

  return (
    <section className='px-10 py-16 bg-gray-200'>
      <Toaster />
      <Fade triggerOnce={true} duration={1000} direction='up'>
        <div className='flex justify-center font-bold text-4xl pb-8'>
          <h1>Fase 3</h1>
        </div>
        <p className='text-lg'>Para avançar para a próxima fase, você precisa agora utilizar tudo o que aprendeu sobre o laço de repetição for e identificar os erros no código fonte. Assim que identificá-los, corrija-os e fique ainda mais próximo de salvar a SiliconTech Inc.</p>
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

export default Mission3;
