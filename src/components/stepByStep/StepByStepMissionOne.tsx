
import { useState } from 'react';
import { Button } from "../../../@/components/ui/button";
import { CardStepOne } from './CardStepOne';
import { CardStepThree } from './CardStepThree';
const steps = [
  <CardStepOne />,
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
    </div>
  );
};

export default StepByStepMissionOne;
