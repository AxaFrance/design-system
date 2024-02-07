import { ReactNode } from "react";

type LiPointProps = { isVisible?: boolean; children?: ReactNode };

const LiPoint = ({ isVisible, children }: LiPointProps) => {
  if (!isVisible) {
    return null;
  }
  return (
    <li className="af-pager__item af-pager__item--disabled">
      <span className="af-pager__item-link">{children}</span>
    </li>
  );
};
export { LiPoint };
