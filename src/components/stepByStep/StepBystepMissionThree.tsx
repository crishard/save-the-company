import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "../../../@/components/ui/button";
import stepsMissionThree from '../../utils/stepsMissionThree';
import { CardStepOne } from './CardStepOneComponents/CardStepOne';
import { CardStepThree } from './CardStepThreeComponents/CardStepThree';
import { CardStepTwo } from './CardSteptwoComponents/CardStepTwo';
const steps = [
    <CardStepOne title={stepsMissionThree.title} textSubtitlePage={stepsMissionThree.textSubtitlePage} text1={stepsMissionThree.text1} text2={stepsMissionThree.text2} text3={stepsMissionThree.text3} exemplo1={''} exemplo2={''} exemplo3={''} subtitle1={'Estrutura de Repetição'} subtitle2={'Iteração sobre Estruturas de Dados'} subtitle3={'Flexibilidade e Controle'} />,

    <CardStepTwo title={stepsMissionThree.titleCard2} text={stepsMissionThree.textCard2} code={stepsMissionThree.codigo} saida={stepsMissionThree.saida} text2={stepsMissionThree.text2Card2} text3={stepsMissionThree.text3Card2} popover1Text={stepsMissionThree.popover1Text} popover2Text={stepsMissionThree.popover2Text} popover3Text={stepsMissionThree.popover3Text} />,
    <CardStepThree textLeft={''} textRight={''} titleLeft={''} titleRight={''} />,
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