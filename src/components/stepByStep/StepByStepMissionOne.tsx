
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "../../../@/components/ui/button";
import { CardStepOne } from './CardStepOne';
import { CardStepThree } from './CardStepThree';

const steps = [
  <CardStepOne title={'Primeiro Passo: Declaração de Variáveis'} textSubtitlePage={'CHEGOU A HORA DO SHOW'} text1={'Utilizar nomes que reflitam o propósito da variável facilita a leitura e a compreensão do código por outras pessoas, além de ajudar na manutenção futura.'} text2={'Declarar variáveis no escopo adequado: Variáveis locais são acessíveis apenas dentro do bloco de código onde foram definidas, enquanto variáveis globais podem ser acessadas por qualquer parte do programa.'} text3={'Declarar o tipo de dado adequado para a variável (inteiro, string, booleano, etc.) é importante para garantir que as operações realizadas com a variável sejam válidas e para aproveitar melhor os recursos de memória.'} exemplo1={'Exemplo: idade é mais claro que "i"'} exemplo2={''} exemplo3={''} subtitle1={'Escolha de nomes significativos:'} subtitle2={'Definição do escopo'} subtitle3={'Inicialização e tipo de dados:'} />,
  <CardStepThree />,
];

const StepByStepMissionOne = () => {
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
        {currentStep > 0 && <Link to='/fase1'>
          <Button className="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Ir para 1° Fase</Button>
        </Link>}
      </div>
    </div>
  );
};

export default StepByStepMissionOne;
