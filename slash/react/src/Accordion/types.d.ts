export type TDefaultProps = {
  onlyOne: boolean;
  className: string;
};

type AccordionAction = {
  key: string;
  label: string;
  onClick: () => void;
};

export type AccordionActions = readonly [AccordionAction, AccordionAction?];
