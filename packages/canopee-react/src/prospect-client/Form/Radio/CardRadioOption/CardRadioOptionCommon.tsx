import {
  type ComponentProps,
  type ComponentType,
  forwardRef,
  type ReactNode,
} from "react";
import type { Icon as IconCommon } from "../../../Icon/IconCommon";
import { BasePicture } from "../../../BasePicture/BasePicture";
import type { Radio } from "../Radio/RadioCommon";

type BaseCardRadioOptionProps = Omit<ComponentProps<typeof Radio>, "size"> & {
  label: ReactNode;
  description?: ReactNode;
  subtitle?: ReactNode;
};

export type CardRadioOptionProps = BaseCardRadioOptionProps & {
  type?: "vertical" | "horizontal";
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
  ) => (
    <label
      className={[
        "af-card-radio-option",
        isInvalid && "af-card-radio-option--invalid",
        type === "horizontal" && "af-card-radio-option--horizontal",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {icon ? <IconComponent src={icon} role="presentation" /> : null}
      {type === "horizontal" && src ? (
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
  ),
);

CardRadioOptionCommon.displayName = "CardRadioOptionCommon";
