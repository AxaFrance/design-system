import close from "@material-symbols/svg-400/rounded/close.svg";
import type { ComponentPropsWithoutRef, ComponentType } from "react";
import { ClickIcon } from "../../ClickIcon/ClickIconCommon";
import type { HeadingProps } from "../../Heading/types";

export type ModalCoreHeaderContainerProps = ComponentPropsWithoutRef<"header">;

export type ModalCoreHeaderCommonProps = ModalCoreHeaderContainerProps & {
  headingComponent: ComponentType<HeadingProps>;
  headingProps: HeadingProps;
  onClose?: VoidFunction;
  closeButtonAriaLabel?: string;
};

export const ModalCoreHeaderCommon = (props: ModalCoreHeaderCommonProps) => {
  const {
    className,
    headingComponent: HeadingComponent,
    headingProps,
    onClose,
    closeButtonAriaLabel = "Fermer la boite de dialogue",
    ...rest
  } = props;

  return (
    <header
      className={["af-modal__header", className].filter(Boolean).join(" ")}
      {...rest}
    >
      <ClickIcon
        className="af-modal__header-close-btn"
        src={close}
        onClick={onClose}
        aria-label={closeButtonAriaLabel}
      />
      <div className="af-modal__header-title">
        <HeadingComponent level={2} {...headingProps} />
      </div>
    </header>
  );
};
