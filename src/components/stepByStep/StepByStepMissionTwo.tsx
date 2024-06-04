import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { Button } from "../../../@/components/ui/button";
import stepsMissionTwo from '../../utils/stepsMissionTwo';
import { CardStepOne } from './CardStepOneComponents/CardStepOne';
import { CardStepThree } from './CardStepThreeComponents/CardStepThree';
import { CardStepTwo } from './CardSteptwoComponents/CardStepTwo';
const steps = [
    <CardStepOne title={stepsMissionTwo.title} textSubtitlePage={stepsMissionTwo.textSubtitlePage} text1={stepsMissionTwo.text1} text2={stepsMissionTwo.text2} text3={stepsMissionTwo.text3} exemplo1={''} exemplo2={''} exemplo3={''} subtitle1={stepsMissionTwo.subtitle1} subtitle2={stepsMissionTwo.subtitle2} subtitle3={stepsMissionTwo.subtitle3} />,
    <CardStepTwo title={stepsMissionTwo.titleCard2} text={stepsMissionTwo.textCard2} code={stepsMissionTwo.codigo} saida={stepsMissionTwo.saida} text2={stepsMissionTwo.text2Card2} text3={stepsMissionTwo.text3Card2} popover1Text={stepsMissionTwo.popover1Text} popover2Text={stepsMissionTwo.popover2Text} popover3Text={stepsMissionTwo.popover3Text} />,
    <CardStepThree textLeft={stepsMissionTwo.textLeft} textRight={stepsMissionTwo.textRight} titleLeft={stepsMissionTwo.titleLeft} titleRight={stepsMissionTwo.titleRight} />,
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

                    <Fade cascade direction="up" duration={1000} triggerOnce={true}>
                        <Link to='/fase2'>
                            <Button className="flex mx-auto mt-8 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Ir para 2° Fase</Button>
                        </Link>  </Fade>}

            </div>
        </div>
    );
}

export default StepByStepMissionTwo