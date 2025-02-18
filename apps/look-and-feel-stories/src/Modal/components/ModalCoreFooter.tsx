export type ModalCoreFooterProps = React.HTMLAttributes<HTMLDivElement>;

export const ModalCoreFooter = ({
  className,
  ...rest
}: ModalCoreFooterProps) => (
  <footer
    className={["af-modal__footer", className].filter(Boolean).join(" ")}
    {...rest}
  />
);
