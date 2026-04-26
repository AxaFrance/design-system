import close from "@material-symbols/svg-400/rounded/close.svg";
import type { ComponentPropsWithoutRef, ComponentType } from "react";
import { ClickIcon } from "../../ClickIcon/ClickIconCommon";
import type { HeadingProps } from "../../Heading/types";
import type { IconProps } from "../../Icon/IconCommon";

export type ModalCoreHeaderContainerProps = ComponentPropsWithoutRef<"header">;

export type ModalCoreHeaderCommonProps = ModalCoreHeaderContainerProps & {
  headingComponent: ComponentType<HeadingProps>;
  headingProps: HeadingProps;
  /**
   * @deprecated The icon is now rendered by the Heading molecule.
   * `iconComponent` is no longer used and will be removed in 2.0.0.
   */
  iconComponent?: ComponentType<IconProps>;
  /**
   * @deprecated Pass `icon` and `iconProps` (without `src`) inside
   * `headingProps` instead. The legacy `iconProps` is forwarded to the
   * Heading molecule for backward compatibility and will be removed in 2.0.0.
   */
  iconProps?: IconProps;
  onClose?: VoidFunction;
  closeButtonAriaLabel?: string;
};

export const ModalCoreHeaderCommon = (props: ModalCoreHeaderCommonProps) => {
  const {
    className,
    headingComponent: HeadingComponent,
    headingProps,
    iconProps,
    onClose,
    closeButtonAriaLabel = "Fermer la boite de dialogue",
    // `iconComponent` is intentionally consumed but no longer used: the icon
    // is rendered by the Heading molecule below.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    iconComponent,
    ...rest
  } = props;

  // Backward-compat: legacy `iconProps` (with `src`) is routed through the
  // Heading molecule, which already renders the icon and title together.
  const { src: legacyIconSrc, ...legacyIconRest } = iconProps ?? {};
  const mergedHeadingProps: HeadingProps = legacyIconSrc
    ? {
        ...headingProps,
        icon: headingProps.icon ?? legacyIconSrc,
        iconProps: { ...legacyIconRest, ...(headingProps.iconProps ?? {}) },
      }
    : headingProps;

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
        <HeadingComponent level={2} {...mergedHeadingProps} />
      </div>
    </header>
  );
};
