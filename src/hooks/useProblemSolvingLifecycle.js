// useProblemSolvingLifecycle.js
import { useState, useEffect } from 'react';

const useProblemSolvingLifecycle = () => {
  const [currentStep, setCurrentStep] = useState('problem-definition');

  const advanceToNextStep = () => {
    const steps = ['problem-definition', 'data-exploration', 'model-selection', 'model-training', 'solution-evaluation', 'deployment-monitoring'];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const resetLifecycle = () => {
    setCurrentStep('problem-definition');
  };

  return { currentStep, advanceToNextStep, resetLifecycle };
};

export default useProblemSolvingLifecycle;