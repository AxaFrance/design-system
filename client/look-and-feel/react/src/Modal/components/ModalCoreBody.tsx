export type ModalCoreBodyProps = React.HTMLAttributes<HTMLDivElement>;

/** @deprecated Use ModalCoreBody from \@axa-fr/design-system-apollo-react/lf instead */
export const ModalCoreBody = ({
  children,
  className,
  ...otherProps
}: ModalCoreBodyProps) => (
  <section
    className={["af-modal__body", className].filter(Boolean).join(" ")}
    {...otherProps}
  >
    {children}
  </section>
);
