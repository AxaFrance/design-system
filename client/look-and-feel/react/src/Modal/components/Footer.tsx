export type FooterProps = React.HTMLAttributes<HTMLDivElement>;

export const Footer = ({ className, ...rest }: FooterProps) => (
  <footer
    className={["af-modal__footer", className].filter(Boolean).join(" ")}
    {...rest}
  />
);
