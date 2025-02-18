export type ModalCoreBodyProps = React.HTMLAttributes<HTMLDivElement>;

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
