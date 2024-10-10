export type BodyProps = {
  children: React.ReactNode;
  ariaLabelledby?: string;
};

const Body = ({ children, ariaLabelledby }: BodyProps) => {
  return (
    <div className="af-accordion__content" aria-labelledby={ariaLabelledby}>
      <div>{children}</div>
    </div>
  );
};

export { Body };
