import { useCallback, useEffect, useRef, useState } from "react";

const getProgressValues = (
  currentStepIndex: number,
  stepPercentage: number,
  steps: number,
): number[] => {
  const values = Array(steps).fill(0);
  for (let i = 0; i < steps; i++) {
    if (i < currentStepIndex) {
      values[i] = 1;
    } else if (i === currentStepIndex) {
      values[i] = stepPercentage;
      break;
    }
  }

  return values;
};

/**
 * useSequentialProgress
 *
 * A custom React hook to manage the animated progress values for a multi-step progress bar (stepper).
 *
 * This hook returns an array of numbers (between 0 and 1) representing the fill percentage of each progress bar step.
 * It animates the transition between steps, smoothly updating the progress values when the current step or percentage changes.
 *
 * @param stepPercentage - The completion percentage (between 0 and 1) of the current step.
 * @param currentStepIndex - The index (starting from 0) of the current step.
 * @param steps - The total number of steps in the progress bar.
 * @param duration - (Optional) Animation duration in milliseconds for each update (default: 750ms).
 *
 * @returns number[] - An array of progress values for each step (0 = empty, 1 = full, value between 0 and 1 = partial).
 *
 * Example usage:
 *   const progressValues = useSequentialProgress(0.5, 1, 3);
 *   // progressValues might be: [1, 0.5, 0]
 */
export const useSequentialProgress = (
  stepPercentage: number,
  currentStepIndex: number,
  steps: number,
  duration = 750,
): number[] => {
  const [progressValues, setProgressValues] = useState<number[]>(
    getProgressValues(currentStepIndex, stepPercentage, steps),
  );
  const currentAnimationStep = useRef<number>(
    currentStepIndex + stepPercentage,
  );
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const animate = useCallback(() => {
    const targetStep = currentStepIndex + stepPercentage;

    if (currentAnimationStep.current === targetStep) {
      return;
    }

    const diff = targetStep - currentAnimationStep.current;
    if (
      !Number.isInteger(currentAnimationStep.current) &&
      Math.floor(currentAnimationStep.current) !== currentStepIndex
    ) {
      currentAnimationStep.current =
        diff > 0
          ? Math.ceil(currentAnimationStep.current)
          : Math.floor(currentAnimationStep.current);
    } else if (Math.abs(diff) > 1) {
      currentAnimationStep.current += Number(Math.sign(diff)) * 1;
    } else if (Math.abs(diff) > 0) {
      currentAnimationStep.current = targetStep;
    }

    setProgressValues(
      getProgressValues(
        Math.floor(currentAnimationStep.current),
        currentAnimationStep.current - Math.floor(currentAnimationStep.current),
        steps,
      ),
    );
    timeoutRef.current = setTimeout(animate, duration);
  }, [currentStepIndex, duration, stepPercentage, steps]);

  // Reset the array and animation if the number of steps changes
  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    setProgressValues(
      getProgressValues(currentStepIndex, stepPercentage, steps),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [steps]);

  // Animate only when currentStepIndex or stepPercentage changes
  useEffect(() => {
    animate();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stepPercentage, currentStepIndex]);

  return progressValues;
};
