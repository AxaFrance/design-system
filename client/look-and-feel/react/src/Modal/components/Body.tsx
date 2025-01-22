export type BodyProps = React.HTMLAttributes<HTMLDivElement>;

export const Body = ({ children, className, ...otherProps }: BodyProps) => (
  <section
    className={["af-modal__body", className].filter(Boolean).join(" ")}
    {...otherProps}
  >
    {children}
  </section>
);
