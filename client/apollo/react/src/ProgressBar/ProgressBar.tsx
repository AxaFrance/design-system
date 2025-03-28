const MAX_STEPPER_PROGRESS = 100;

export type ProgressBarProps = {
  value: number;
  active?: boolean;
};

export const ProgressBar = ({
  value = MAX_STEPPER_PROGRESS,
  active,
}: ProgressBarProps) => {
  return (
    <div
      className="af__progressbar"
      aria-current={active}
      aria-hidden={!active}
      aria-label={`${value}%`}
    >
      <div className="af__progress" style={{ width: `${value}%` }} />
    </div>
  );
};
