import arrowBack from "@material-symbols/svg-400/outlined/arrow_back.svg";
import arrowFront from "@material-symbols/svg-400/outlined/arrow_forward.svg";
import { type Args } from "storybook/internal/types";
import {
  Button,
  buttonVariants,
  type ButtonVariants,
  Svg,
} from "@axa-fr/canopee-react/prospect";

const ButtonBlock = ({
  variant,
  modifier,
  ...args
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
    <Button variant={variant} {...args}>
      {variant}
    </Button>
    <Button variant={variant} disabled {...args}>
      {variant}
    </Button>
    <Button variant={variant} iconLeft={<Svg src={arrowBack} {...args} />}>
      {variant}
    </Button>
    <Button variant={variant} iconRight={<Svg src={arrowFront} {...args} />}>
      {variant}
    </Button>
  </div>
);

export const renderButtonAll = (args: Args) => (
  <div className="af-btn-client-demo">
    {Object.values(buttonVariants).map((variant) => (
      <div key={variant} className="af-btn-client-demo-variant">
        <ButtonBlock
          variant={variant}
          modifier={/inverse/.test(variant) ? "blue" : undefined}
          {...args}
        />
      </div>
    ))}
  </div>
);

export const renderButton = ({
  children,
  variant,
  disabled,
  iconLeft,
  iconRight,
  ...args
}: Args) => (
  <Button
    variant={variant}
    iconLeft={iconLeft}
    iconRight={iconRight}
    disabled={disabled}
    {...args}
  >
    {children} {variant}
  </Button>
);
