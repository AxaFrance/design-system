import { type ComponentProps, type ComponentType, type ReactNode } from "react";
import { BasePicture } from "../../../BasePicture/BasePicture";
import type { Icon as IconCommon } from "../../../Icon/IconCommon";
import { getClassName } from "../../../utilities/getClassName";
import type { Radio } from "../Radio/RadioCommon";

type BaseCardRadioProps = Omit<ComponentProps<typeof Radio>, "size"> & {
  label: ReactNode;
  description?: ReactNode;
  subtitle?: ReactNode;
};

export type CardRadioProps = BaseCardRadioProps & {
  /**
   * @deprecated Use `position` instead.
   */
  type?: "vertical" | "horizontal";
  position?: "vertical" | "horizontal";
  icon?: ComponentProps<typeof IconCommon>["src"];
  src?: ComponentProps<typeof BasePicture>["src"];
  basePictureProps?: Omit<ComponentProps<typeof BasePicture>, "src">;
};

export type CardRadioCommonProps = CardRadioProps & {
  RadioComponent: ComponentType<ComponentProps<typeof Radio>>;
  IconComponent: ComponentType<ComponentProps<typeof IconCommon>>;
};

export const CardRadioCommon = ({
  label,
  position,
  type,
  description,
  subtitle,
  icon,
  src,
  basePictureProps,
  isInvalid,
  className,
  RadioComponent,
  IconComponent,
  ...inputProps
}: CardRadioCommonProps) => {
  const isCardRadioHorizontal = [position, type].includes("horizontal");

  return (
    <label
      className={getClassName({
        baseClassName: "af-card-radio",
        modifiers: [
          isInvalid && "invalid",
          isCardRadioHorizontal && "horizontal",
        ],
        className,
      })}
    >
      {icon ? <IconComponent src={icon} role="presentation" /> : null}
      {isCardRadioHorizontal && src ? (
        <BasePicture src={src} {...basePictureProps} />
      ) : null}
      <div className="af-card-radio__content">
        <p className="af-card-radio__label">{label}</p>
        {Boolean(description) && (
          <p className="af-card-radio__description">{description}</p>
        )}
        {Boolean(subtitle) && (
          <p className="af-card-radio__subtitle">{subtitle}</p>
        )}
      </div>
      <RadioComponent {...inputProps} isInvalid={isInvalid} />
    </label>
  );
};

CardRadioCommon.displayName = "CardRadioCommon";
