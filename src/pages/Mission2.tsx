import { StreamLanguage } from '@codemirror/language';
import { javascript } from '@codemirror/legacy-modes/mode/javascript';
import CodeMirror from '@uiw/react-codemirror';
import { useNavigate } from "react-router-dom";
import { Button } from '../../@/components/ui/button';

const javascriptCode = `// Definindo duas variáveis
var a = 10;
var b = 20;

// Verificando qual variável é maior com erro de sintaxe
if (a > b) {
    console.log("a é maior que b")
} else
    console.log("a não é maior que b");
`;
const Mission2 = () => {

    const navigate = useNavigate()
    // function AvaliateCode() {
    //   return true
    // }

    const faseTwo = async () => {
        // const user = await AvaliateCode();
        console.log("passou")
        return navigate("/step/Mission3");;
    };

    return (
        <section className='px-10 py-16 bg-gray-200'>
            <div className='flex justify-center font-bold text-4xl pb-8'>
                <h1>Fase 2</h1>
            </div>
            <p className='text-lg'>Para avançar de fase e continuar salvando a empresa, é hora de corrigir o código vulnerável no código fonte da empresa, identifique os erros de declaração de variável e dê mais um passo rumo a vitória!</p>
            <div className='px-12 flex justify-center'>
                <CodeMirror className='w-full px-32 py-14 ' value={javascriptCode} height="200px" extensions={[StreamLanguage.define(javascript)]} />
            </div>
            <div className='flex justify-center'>
                <Button onClick={faseTwo} className='bg-indigo-600 rounded px-2 py-2 text-gray-800 hover:bg-indigo-400 hover:text-gray-100 transition ease-linear'>Avaliar Mudanças</Button>

            </div>
        </section>
    )
}

export default Mission2