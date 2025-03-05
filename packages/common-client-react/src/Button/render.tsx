import arrowBack from "@material-symbols/svg-400/outlined/arrow_back.svg";
import arrowFront from "@material-symbols/svg-400/outlined/arrow_forward.svg";

import { type Args } from "storybook/internal/types";
import { Button, buttonVariants, type ButtonVariants } from "./Button";
import { Svg } from "../Svg/Svg";

const ButtonBlock = ({
  variant,
  modifier,
}: {
  variant: ButtonVariants;
  modifier?: string;
}) => (
  <div
    key={variant}
    className={[
      "af-btn-client-demo__bloc",
      modifier ? `af-btn-client-demo__bloc--${modifier}` : "",
    ]
      .filter(Boolean)
      .join(" ")}
  >
    <h2 className="af-title">{variant}</h2>
    <Button variant={variant}>{variant}</Button>
    <Button variant={variant} disabled>
      {variant}
    </Button>
    <Button variant={variant} iconLeft={<Svg src={arrowBack} />}>
      {variant}
    </Button>
    <Button variant={variant} iconRight={<Svg src={arrowFront} />}>
      {variant}
    </Button>
  </div>
);

export const renderAll = () => (
  <div className="af-btn-client-demo">
    {Object.values(buttonVariants).map((variant) => (
      <div key={variant} className="af-btn-client-demo-variant">
        <ButtonBlock variant={variant} />
        <ButtonBlock variant={variant} modifier="blue" />
      </div>
    ))}
  </div>
);

export const render = ({
  children,
  variant,
  disabled,
  iconLeft,
  iconRight,
  onClick,
  ...args
}: Args) => (
  <Button
    variant={variant}
    iconLeft={iconLeft}
    iconRight={iconRight}
    disabled={disabled}
    onClick={onClick}
    {...args}
  >
    {children} {variant}
  </Button>
);
