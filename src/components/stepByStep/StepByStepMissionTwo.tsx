import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "../../../@/components/ui/button";
import stepsMissionTwo from '../../utils/stepsMissionTwo';
import { CardStepOne } from './CardStepOneComponents/CardStepOne';
import { CardStepThree } from './CardStepThreeComponents/CardStepThree';
import { CardStepTwo } from './CardSteptwoComponents/CardStepTwo';
const steps = [
    <CardStepOne title={stepsMissionTwo.title} textSubtitlePage={stepsMissionTwo.textSubtitlePage} text1={stepsMissionTwo.text1} text2={stepsMissionTwo.text2} text3={stepsMissionTwo.text3} exemplo1={''} exemplo2={''} exemplo3={''} subtitle1={stepsMissionTwo.subtitle1} subtitle2={stepsMissionTwo.subtitle2} subtitle3={stepsMissionTwo.subtitle3} />,
    <CardStepTwo title={stepsMissionTwo.titleCard2} text={stepsMissionTwo.textCard2} code={stepsMissionTwo.codigo} saida={stepsMissionTwo.saida} text2={''} text3={''} />,
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
            <div className='py-4'>
                {currentStep >= steps.length - 1 && <Link to='/fase2'>
                    <Button className="flex mx-auto mt-8 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Ir para 2° Fase</Button>
                </Link>}
            </div>
        </div>
    );
}

export default StepByStepMissionTwo