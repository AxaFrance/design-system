import {
  type ComponentProps,
  type ComponentType,
  forwardRef,
  type ReactNode,
} from "react";
import { BasePicture } from "../../../BasePicture/BasePicture";
import type { Icon as IconCommon } from "../../../Icon/IconCommon";
import type { Radio } from "../Radio/RadioCommon";

type BaseCardRadioOptionProps = Omit<ComponentProps<typeof Radio>, "size"> & {
  label: ReactNode;
  description?: ReactNode;
  subtitle?: ReactNode;
};

export type CardRadioOptionProps = BaseCardRadioOptionProps & {
  /**
   * @deprecated Use `position` instead.
   */
  type?: "vertical" | "horizontal";
  position?: "vertical" | "horizontal";
  icon?: ComponentProps<typeof IconCommon>["src"];
  src?: ComponentProps<typeof BasePicture>["src"];
  basePictureProps?: Omit<ComponentProps<typeof BasePicture>, "src">;
};

export type CardRadioOptionCommonProps = CardRadioOptionProps & {
  RadioComponent: ComponentType<ComponentProps<typeof Radio>>;
  IconComponent: ComponentType<ComponentProps<typeof IconCommon>>;
};

export const CardRadioOptionCommon = forwardRef<
  HTMLInputElement,
  CardRadioOptionCommonProps
>(
  (
    {
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
    },
    ref,
  ) => {
    const isCardRadioOptionHorizontal = [position, type].includes("horizontal");

    return (
      <label
        className={[
          "af-card-radio-option",
          isInvalid && "af-card-radio-option--invalid",
          isCardRadioOptionHorizontal && "af-card-radio-option--horizontal",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {icon ? <IconComponent src={icon} role="presentation" /> : null}
        {isCardRadioOptionHorizontal && src ? (
          <BasePicture src={src} {...basePictureProps} />
        ) : null}
        <div className="af-card-radio-option__content">
          <p className="af-card-radio-option__label">{label}</p>
          {Boolean(description) && (
            <p className="af-card-radio-option__description">{description}</p>
          )}
          {Boolean(subtitle) && (
            <p className="af-card-radio-option__subtitle">{subtitle}</p>
          )}
        </div>
        <RadioComponent {...inputProps} isInvalid={isInvalid} ref={ref} />
      </label>
    );
  },
);

CardRadioOptionCommon.displayName = "CardRadioOptionCommon";
