export type TDefaultProps = {
  onlyOne: boolean;
  className: string;
};

export type AccordionAction = {
  key: string;
  label: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onClick: () => void;
};

export type AccordionActions = readonly [AccordionAction, AccordionAction?];
