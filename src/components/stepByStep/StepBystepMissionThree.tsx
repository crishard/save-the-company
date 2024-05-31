import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "../../../@/components/ui/button";
import { CardStepOne } from './CardStepOneComponents/CardStepOne';
import { CardStepThree } from './CardStepThreeComponents/CardStepThree';
import { CardStepTwo } from './CardSteptwoComponents/CardStepTwo';
const steps = [
    <CardStepOne title={'Operadores Lógicos 2: for'} textSubtitlePage={'HORA DE DAR SEGUIMENTO'} text1={'O operador for é usado para criar loops, permitindo a repetição de um bloco de código um número específico de vezes. A estrutura básica de um loop for em JavaScript contém: Inicialização, Condição e Incremento'} text2={'O loop for é frequentemente usado para iterar sobre elementos de arrays ou outras estruturas de dados iteráveis. Isso permite acessar e manipular cada elemento individualmente.'} text3={'O loop for oferece um controle preciso sobre a execução do loop, permitindo que você ajuste a inicialização, condição e incremento conforme necessário. Isso torna o for muito flexível para uma variedade de situações, como loops com passos variáveis, decrementos, ou iterações complexas.'} exemplo1={''} exemplo2={''} exemplo3={''} subtitle1={'Estrutura de Repetição'} subtitle2={'Iteração sobre Estruturas de Dados'} subtitle3={'Flexibilidade e Controle'} />,

    <CardStepTwo title={'Exemplo do uso em uma implementação real:'} text={`Explicação do Código abaixo: Um array chamado array é definido com os valores [1, 2, 3, 4, 5] O loop for começa com a inicialização var i = 0, onde i é a variável de controle do loop, A condição i < array.length é verificada antes de cada iteração do loop. Enquanto i for menor que o comprimento do array (array.length), o loop continuará, O incremento i++ é executado após cada iteração, aumentando o valor de i em 1.`} code={`// Definindo um array
    var array = [1, 2, 3, 4, 5];
    
    // Usando um loop for para iterar sobre o array
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
    
    `} saida={'ppaaoiehei'} />,
    <CardStepThree />,
];
const StepBystepMissionThree = () => {
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
          <div className='py-4'>
              {currentStep >= steps.length -1 && <Link to='/fase3'>
                  <Button className="flex mx-auto mt-8 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Ir para 3° Fase</Button>
              </Link>}
          </div>
      </div>
  );
}

export default StepBystepMissionThree