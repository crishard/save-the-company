import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { Button } from "../../../@/components/ui/button";
import stepsMissionThree from '../../utils/stepsMissionThree';
import { CardStepOne } from './CardStepOneComponents/CardStepOne';
import { CardStepThree } from './CardStepThreeComponents/CardStepThree';
import { CardStepTwo } from './CardSteptwoComponents/CardStepTwo';
const steps = [
    <CardStepOne title={stepsMissionThree.title} textSubtitlePage={stepsMissionThree.textSubtitlePage} text1={stepsMissionThree.text1} text2={stepsMissionThree.text2} text3={stepsMissionThree.text3} exemplo1={''} exemplo2={''} exemplo3={''} subtitle1={stepsMissionThree.subtitle1} subtitle2={stepsMissionThree.subtitle2} subtitle3={stepsMissionThree.subtitle3} />,

    <CardStepTwo title={stepsMissionThree.titleCard2} text={stepsMissionThree.textCard2} code={stepsMissionThree.codigo} saida={stepsMissionThree.saida} text2={stepsMissionThree.text2Card2} text3={stepsMissionThree.text3Card2} popover1Text={stepsMissionThree.popover1Text} popover2Text={stepsMissionThree.popover2Text} popover3Text={stepsMissionThree.popover3Text} />,
    <CardStepThree textLeft={stepsMissionThree.textCardThree1} textRight={stepsMissionThree.textCardThree2} titleLeft={stepsMissionThree.title1} titleRight={stepsMissionThree.title2} />,
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
                    <Fade cascade direction="up" duration={1000} triggerOnce={true}><Link to='/fase3'>
                        <Button className="flex mx-auto mt-8 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Ir para 3° Fase</Button>
                    </Link> </Fade>}

            </div>
        </div>
    );
}

export default StepBystepMissionThree