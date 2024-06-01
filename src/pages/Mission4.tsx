import { StreamLanguage } from '@codemirror/language';
import { javascript } from '@codemirror/legacy-modes/mode/javascript';
import CodeMirror from '@uiw/react-codemirror';
import { useState } from 'react';
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

  const handleCodeChange = (value:any) => {
    setCode(value);
  };

  const AvaliateCode = (code: any) => {
    // Verifica se o array é declarado corretamente com const
    const correctArrayDeclaration = /const\s+array\s*=\s*\[.+\];/;
    // Verifica se a estrutura do loop while está correta
    const correctWhileLoopStructure = /let\s+i\s*=\s*0;\s*while\s*\(i\s*<\s*array.length\)\s*\{\s*console\.log\(array\[i\]\);\s*i\+\+\s*;\s*\}/;

    return correctArrayDeclaration.test(code) && correctWhileLoopStructure.test(code);
  };

  const faseTwo = async () => {
    const isValid = AvaliateCode(code);
    if (isValid) {
      toast.success('Código correto! Avançando para a próxima fase.');
      console.log("passou");
      return navigate("/");
    } else {
      toast.error('Código incorreto. Corrija a declaração do array e a estrutura do loop while.');
      console.log("Código incorreto. Corrija a declaração do array e a estrutura do loop while.");
    }
  };

  return (
    <section className='px-10 py-16 bg-gray-200'>
      <Toaster />
      <div className='flex justify-center font-bold text-4xl pb-8'>
        <h1>Fase 4</h1>
      </div>
      <p className='text-lg'>Para avançar de fase e continuar salvando a empresa, é hora de corrigir o código vulnerável no código fonte da empresa, identifique os erros de declaração de variável e dê mais um passo rumo a vitória!</p>
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

export default Mission4;
