
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { Button } from "../../../@/components/ui/button";
import stepsMissionOne from "../../utils/stepsMissionOne";
import { CardStepOne } from './CardStepOneComponents/CardStepOne';
import { CardStepThree } from './CardStepThreeComponents/CardStepThree';
import { CardStepTwo } from './CardSteptwoComponents/CardStepTwo';
const steps = [
  <CardStepOne title={stepsMissionOne.title} textSubtitlePage={stepsMissionOne.textSubtitlePage} text1={stepsMissionOne.text1} text2={stepsMissionOne.text2} text3={stepsMissionOne.text3} exemplo1={stepsMissionOne.exemplo1} exemplo2={''} exemplo3={''} subtitle1={stepsMissionOne.subtitle1} subtitle2={stepsMissionOne.subtitle2} subtitle3={stepsMissionOne.subtitle3} />,
  <CardStepTwo title={stepsMissionOne.titleCard2} text={stepsMissionOne.textCard2} code={stepsMissionOne.codigo} saida={stepsMissionOne.saida} text2={stepsMissionOne.text2Card2} text3={stepsMissionOne.text3Card2} popover1Text={stepsMissionOne.popover1Text} popover2Text={stepsMissionOne.popover2Text} popover3Text={stepsMissionOne.popover3Text} />,
  <CardStepThree textLeft={stepsMissionOne.textCardThree2} textRight={stepsMissionOne.textCardThree1} titleLeft={stepsMissionOne.title1} titleRight={stepsMissionOne.title2} />,
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
        {currentStep > 0 &&
          <Fade cascade direction="up" duration={1000} triggerOnce={true}>
            <Button className='bg-gray-600 text-gray-200 px-3 py-2 rounded-lg hover:bg-gray-400 hover:text-gray-700 transition ease-linear shadow-xl' variant="secondary" onClick={previousStep} disabled={currentStep === 0}>
              Anterior
            </Button></Fade>}


        {currentStep < steps.length - 1 && (
          <Fade cascade direction="up" duration={1000} triggerOnce={true}>
            <Button className='bg-gray-600 text-gray-200 px-3 py-2 rounded-lg hover:bg-gray-400 hover:text-gray-700 transition ease-linear shadow-xl' variant="secondary" onClick={nextStep} >
              Próximo
            </Button>
          </Fade>
        )}

      </div>
      <div>

        {currentStep >= steps.length - 1 &&
          <Fade cascade direction="up" duration={1000} triggerOnce={true}> <Link to='/fase1'>
            <Button className="flex mx-auto mt-8 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Ir para 1° Fase</Button>
          </Link> </Fade>}

      </div>
    </div>
  );
};

export default StepByStepMissionOne;
