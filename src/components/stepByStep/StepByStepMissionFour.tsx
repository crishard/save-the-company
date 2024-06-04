import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { Button } from "../../../@/components/ui/button";
import stepsMissionFour from '../../utils/stepsMissionFour';
import { CardStepOne } from './CardStepOneComponents/CardStepOne';
import { CardStepThree } from './CardStepThreeComponents/CardStepThree';
import { CardStepTwo } from './CardSteptwoComponents/CardStepTwo';

const steps = [
    <CardStepOne title={stepsMissionFour.title} textSubtitlePage={stepsMissionFour.textSubtitlePage} text1={stepsMissionFour.text1} text2={stepsMissionFour.text2} text3={stepsMissionFour.text3} exemplo1={stepsMissionFour.exemplo1} exemplo2={stepsMissionFour.exemplo2} exemplo3={stepsMissionFour.exemplo3} subtitle1={stepsMissionFour.subtitle1} subtitle2={stepsMissionFour.subtitle2} subtitle3={stepsMissionFour.subtitle3} />,

    <CardStepTwo title={stepsMissionFour.titleCard2} text={stepsMissionFour.textCard2} code={stepsMissionFour.codigo} saida={stepsMissionFour.saida} text2={stepsMissionFour.text2Card2} text3={stepsMissionFour.text3Card2} popover1Text={stepsMissionFour.popover1Text} popover2Text={stepsMissionFour.popover2Text} popover3Text={stepsMissionFour.popover3Text} />,

    <CardStepThree textLeft={stepsMissionFour.textCardThree1} textRight={stepsMissionFour.textCardThree2} titleLeft={stepsMissionFour.title1} titleRight={stepsMissionFour.title2} />,
];
const StepByStepMissionFour = () => {
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
                        <Fade cascade direction="up" duration={1000} triggerOnce={true}><Link to='/fase4'>
                        <Button className="flex mx-auto mt-8 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Ir para 4° Fase</Button>
                    </Link> </Fade>}
                
            </div>
        </div>
    );
}

export default StepByStepMissionFour