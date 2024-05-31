import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "../../../@/components/ui/button";
import { CardStepOne } from './CardStepOne';
import { CardStepThree } from './CardStepThree';
import { CardStepTwo } from './CardStepTwo';
const steps = [
    <CardStepOne title={'Operadores Lógicos 1: if & else'} textSubtitlePage={'HORA DE DAR SEGUIMENTO'} text1={'O uso dos operadores if e else permite que você controle o fluxo de execução do seu programa com base em condições específicas. O if avalia uma condição booleana (True ou False). Se a condição for True, o bloco de código indentado abaixo dele será executado. Caso contrário, o programa saltará para o bloco de código abaixo do else, se ele existir.'} text2={'Você pode aninhar várias instruções if e else para lidar com múltiplas condições e cenários complexos usando elif (abreviação de "else if") Isso permite verificar diversas condições em sequência, onde cada elif é avaliado somente se todas as condições anteriores forem False.'} text3={'A utilização correta de if e else é crucial para implementar a lógica de negócios de um programa, desde simples verificações até decisões complexas. Isso torna esses operadores fundamentais em quase todas as linguagens de programação'} exemplo1={''} exemplo2={''} exemplo3={''} subtitle1={'Estrutura de Decisão Condicional'} subtitle2={'Blocos Aninhados e Múltiplas Condições'} subtitle3={'Importância na Lógica de Programação'} />,

    <CardStepTwo title={'Exemplo do uso em uma implementação real:'} text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor sunt aliquam deserunt dolore, a beatae atque necessitatibus ipsam numquam natus nostrum quae, blanditiis dignissimos dolorem!'} code={`// Definindo duas variáveis
    var a = 10;
    var b = 20;
    
    // Verificando qual variável é maior
    if (a > b) {
        console.log("a é maior que b");
    } else {
        console.log("a não é maior que b");
    }
    `} />,
    <CardStepThree />,
];

const StepByStepMissionTwo = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const previousStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <div>
            <div className="card">
                {steps[currentStep]}
            </div>
            <div className='flex justify-around'>
                {currentStep > 0 && <Button className='bg-gray-600 text-gray-200 px-3 py-2 rounded-lg hover:bg-gray-400 hover:text-gray-700 transition ease-linear shadow-xl' variant="secondary" onClick={previousStep} disabled={currentStep === 0}>
                    Anterior
                </Button>}

                {currentStep < steps.length - 1 && (
                    <Button className='bg-gray-600 text-gray-200 px-3 py-2 rounded-lg hover:bg-gray-400 hover:text-gray-700 transition ease-linear shadow-xl' variant="secondary" onClick={nextStep} >
                        Próximo
                    </Button>
                )}

            </div>
            <div>

                {currentStep > 0 && <Link to='/fase2'>
                    <Button className="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Ir para 2° Fase</Button>
                </Link>}
            </div>
        </div>
    );
}

export default StepByStepMissionTwo