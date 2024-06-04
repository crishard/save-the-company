import { StreamLanguage } from '@codemirror/language';
import { javascript } from '@codemirror/legacy-modes/mode/javascript';
import CodeMirror from '@uiw/react-codemirror';
import { useState } from 'react';
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
          navigate("/step/Mission4");
        }, 2000);
      } else {
        toast.error('Código incorreto. Corrija a declaração do array e a estrutura do loop for.');
      }
    }, 2000)
  };

  return (
    <section className='px-10 py-16 bg-gray-200'>
      <Toaster />
      <div className='flex justify-center font-bold text-4xl pb-8'>
        <h1>Fase 3</h1>
      </div>
      <p className='text-lg'>Para avançar para a próxima fase, você precisa agora utilizar tudo o que aprendeu sobre o laço de repetição for e identificar os erros no código fonte. Assim que identificá-los, corrija-os e fique ainda mais próximo de salvar a SiliconTech Inc.</p>
      <p className='pt-4 text-green-600'>Dica: analise a estrutura do laço de repetição e a declaração das variáveis</p>
      <div className='px-12 flex justify-center'>
        <CodeMirror
          className='w-full px-32 py-14'
          value={code}
          height="200px"
          extensions={[StreamLanguage.define(javascript)]}
          onChange={handleCodeChange}
        />
      </div>
      <div className='flex justify-center'>
        <Button onClick={faseTwo} className='bg-indigo-600 rounded px-2 py-2 text-gray-800 hover:bg-indigo-400 hover:text-gray-100 transition ease-linear'>
          Avaliar Mudanças
        </Button>
      </div>
    </section>
  );
}

export default Mission3;
