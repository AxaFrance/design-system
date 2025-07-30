const MAX_STEPPER_PROGRESS = 100;

export type ProgressBarProps = {
  value: number;
  active?: boolean;
  stepNumber?: number;
  totalSteps?: number;
};

export const ProgressBar = ({
  value = MAX_STEPPER_PROGRESS,
  active = true,
  stepNumber,
  totalSteps,
}: ProgressBarProps) => {
  const clampedValue = Math.max(0, Math.min(value, MAX_STEPPER_PROGRESS));
  const showStepNumber =
    totalSteps && totalSteps > 1 && stepNumber !== undefined;
  return (
    <div
      role="progressbar"
      className="af-progressbar"
      aria-valuemin={0}
      aria-valuemax={MAX_STEPPER_PROGRESS}
      aria-valuenow={clampedValue}
      aria-current={active}
      aria-hidden={!active}
      aria-label={`Progression : ${clampedValue}%`}
    >
      <div
        className="af-progressbar__progress"
        style={{ width: `${clampedValue}%` }}
      />
      <div />

      <div className="af-progressbar__step-indicator">
        {showStepNumber && (
          <span className="af-step-label">{`Étape ${stepNumber} sur ${totalSteps}`}</span>
        )}
        <span className="af-progressbar__text">{`Progression ${clampedValue}%`}</span>
      </div>
    </div>
  );
};
