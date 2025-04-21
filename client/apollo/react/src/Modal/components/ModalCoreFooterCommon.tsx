import { type ComponentType } from "react";
import type { ButtonProps, ButtonVariants } from "../../Button/ButtonCommon";

const renderFooterButtons = (
  ButtonComponent: ComponentType<ButtonProps> | undefined,
  buttons: [ButtonVariants, Partial<ButtonProps> | undefined][],
) =>
  ButtonComponent &&
  buttons.map(
    ([variant, props]) =>
      Boolean(props) && (
        <ButtonComponent
          key={variant}
          variant={variant}
          {...props}
          className={[props?.className, "af-modal__footer-button"]
            .filter(Boolean)
            .join(" ")}
        />
      ),
  );

export type ModalCoreFooterContainerProps =
  React.JSX.IntrinsicElements["footer"];

export type ModalCoreFooterCommonProps = ModalCoreFooterContainerProps & {
  buttonComponent: ComponentType<ButtonProps>;
  primaryButtonProps?: Partial<ButtonProps>;
  secondaryButtonProps?: Partial<ButtonProps>;
  tertiaryButtonProps?: Partial<ButtonProps>;
};

export const ModalCoreFooterCommon = ({
  className,
  buttonComponent: ButtonComponent,
  primaryButtonProps,
  secondaryButtonProps,
  tertiaryButtonProps,
  ...rest
}: ModalCoreFooterCommonProps) => (
  <footer
    className={["af-modal__footer", className].filter(Boolean).join(" ")}
    {...rest}
  >
    {renderFooterButtons(ButtonComponent, [
      ["tertiary", tertiaryButtonProps],
      ["secondary", secondaryButtonProps],
      ["primary", primaryButtonProps],
    ])}
  </footer>
);
