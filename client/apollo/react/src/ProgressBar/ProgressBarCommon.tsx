const MAX_STEPPER_PROGRESS = 100;

export type ProgressBarProps = {
  value: number;
  active?: boolean;
};

export const ProgressBar = ({
  value = MAX_STEPPER_PROGRESS,
  active = true,
}: ProgressBarProps) => {
  const clampedValue = Math.max(0, Math.min(value, MAX_STEPPER_PROGRESS));
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
    </div>
  );
};
