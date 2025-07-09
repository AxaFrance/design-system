import close from "@material-symbols/svg-400/rounded/close.svg";
import type { ComponentPropsWithoutRef, ComponentType } from "react";
import { ClickIcon } from "../../ClickIcon/ClickIconCommon";
import type { HeadingProps } from "../../Heading/types";
import type { IconProps } from "../../Icon/IconCommon";

export type ModalCoreHeaderContainerProps = ComponentPropsWithoutRef<"header">;

export type ModalCoreHeaderCommonProps = ModalCoreHeaderContainerProps & {
  headingComponent: ComponentType<HeadingProps>;
  headingProps: HeadingProps;
  iconComponent?: ComponentType<IconProps>;
  iconProps?: IconProps;
  onClose?: VoidFunction;
  closeButtonAriaLabel?: string;
};

export const ModalCoreHeaderCommon = ({
  className,
  headingComponent: HeadingComponent,
  headingProps,
  iconComponent: IconComponent,
  iconProps,
  onClose,
  closeButtonAriaLabel = "Fermer la boite de dialogue",
  ...props
}: ModalCoreHeaderCommonProps) => (
  <header
    className={["af-apollo-modal__header", className].filter(Boolean).join(" ")}
    {...props}
  >
    <ClickIcon
      className="af-apollo-modal__header-close-btn"
      src={close}
      onClick={onClose}
      aria-label={closeButtonAriaLabel}
    />
    <div className="af-apollo-modal__header-title">
      {IconComponent && iconProps ? (
        <IconComponent size="M" {...iconProps} />
      ) : null}
      <HeadingComponent level={2} {...headingProps} />
    </div>
  </header>
);
