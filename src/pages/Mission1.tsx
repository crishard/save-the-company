import { StreamLanguage } from '@codemirror/language';
import { javascript } from '@codemirror/legacy-modes/mode/javascript';
import CodeMirror from '@uiw/react-codemirror';
import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { Button } from '../../@/components/ui/button';

const initialJavascriptCode = `const a = 12
let b = "Juarez"
console.log("{b} tem 12 anos de {a}")`;

function Mission1() {
  const navigate = useNavigate();
  const [code, setCode] = useState(initialJavascriptCode);

  const handleCodeChange = (value: any) => {
    setCode(value);
  };

  const AvaliateCode = (code: any) => {
    const correctIdade = /const\s+idade\s*=\s*\d+/;
    const correctNome = /let\s+nome\s*=\s*".+"/;
    return correctIdade.test(code) && correctNome.test(code);
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
        toast.error('Código incorreto. Corrija as variáveis.');
      }
    }, 2000)

  };

  return (
    <section className='px-10 py-16 bg-gray-200'>
      <Toaster />
      <div className='flex justify-center font-bold text-4xl pb-8'>
        <h1>Fase 1</h1>
      </div>
      <p className='text-lg'>Para avançar de fase e continuar salvando a empresa, é hora de corrigir o código vulnerável no código fonte da empresa, identifique os erros de declaração de variável e dê mais um passo rumo a vitória!</p>
      <p className='pt-4 text-green-600'>Dica: leia o console.log do código para melhorara a compreensão quanto as variáveis</p>
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

export default Mission1;
