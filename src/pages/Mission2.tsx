import { StreamLanguage } from '@codemirror/language';
import { javascript } from '@codemirror/legacy-modes/mode/javascript';
import CodeMirror from '@uiw/react-codemirror';
import { useState } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { Button } from '../../@/components/ui/button';

const initialJavascriptCode = `// Definindo duas variáveis
const valor1 = 10;
const valor2 = 20;

// Verificando qual variável é maior
if (valor1 > valor2) {
    console.log("valor1 é maior que valor2");
} else
    console.log("valor1 não é maior que valor2");
`;

const Mission2 = () => {
    const navigate = useNavigate();
    const [code, setCode] = useState(initialJavascriptCode);

    const handleCodeChange = (value: any) => {
        setCode(value);
    };

    const AvaliateCode = (code: any) => {
        const correctVarDeclaration = /const\s+valor1\s*=\s*\d+;\s*const\s+valor2\s*=\s*\d+;/;
        const correctIfElseStructure = /if\s*\(valor1\s*>\s*valor2\)\s*\{\s*console\.log\("valor1 é maior que valor2"\);\s*\}\s*else\s*\{\s*console\.log\("valor1 não é maior que valor2"\);\s*\}/;

        return correctVarDeclaration.test(code) && correctIfElseStructure.test(code);
    };

    const faseTwo = async () => {
        const loadingToastId = toast.loading("Validando alterações");
        const isValid = AvaliateCode(code);
        setTimeout(() => {
            toast.dismiss(loadingToastId);
            if (isValid) {
                toast.success('Código correto! Avançando para a próxima fase.');
                setTimeout(() => {
                    navigate("/step/mission3");
                }, 2000);
            } else {
                toast.error('Código incorreto. Corrija a estrutura do if-else.');
            }
        }, 2000)
    };

    return (
        <section className='px-10 py-16 bg-gray-200'>
            <Toaster />
            <Fade triggerOnce={true} duration={1000} direction='up'>
                <div className='flex justify-center font-bold text-4xl pb-8'>
                    <h1>Fase 2</h1>
                </div>
                <p className='text-lg'>Para avançar para a próxima fase, você precisa agora utilizar tudo o que aprendeu sobre o laço de repetição if e else e identificar os erros no código fonte. Assim que identificá-los, corrija-os e fique ainda mais próximo de salvar a SiliconTech Inc.</p>
                <p className='pt-4 text-green-600'>Dica: as variáveis já foram bem declaradas, foque na estrutura do if e else</p>
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

export default Mission2;
