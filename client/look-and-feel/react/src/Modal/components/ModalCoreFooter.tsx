/**
 * @deprecated Use `ModalCoreFooterProps` from `@axa-fr/design-system-apollo-react/lf` instead.
 */
export type ModalCoreFooterProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * @deprecated Use `ModalCoreFooter` from `@axa-fr/design-system-apollo-react/lf` instead.
 */
export const ModalCoreFooter = ({
  className,
  ...rest
}: ModalCoreFooterProps) => (
  <footer
    className={["af-modal__footer", className].filter(Boolean).join(" ")}
    {...rest}
  />
);
