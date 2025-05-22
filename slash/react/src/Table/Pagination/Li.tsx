import classNames from "classnames";
import { MouseEvent } from "react";

type LiProps = {
  isVisible?: boolean;
  active?: boolean;
  value: number;
  pageLinkLabel: string;
  onChange: (e: { value: number }) => void;
};

const onClick =
  ({ onChange, value }: Pick<LiProps, "onChange" | "value">) =>
  (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onChange({
      value: Number(value),
    });
  };

const Li = ({ isVisible, active, value, pageLinkLabel, onChange }: LiProps) => {
  if (!isVisible) {
    return null;
  }
  return (
    <li
      className={classNames("af-pager__item", {
        "af-pager__item--active": active,
      })}
    >
      <a
        className="af-pager__item-link"
        href="/#"
        aria-label={`Page ${value} des ${pageLinkLabel}`}
        onClick={onClick({ onChange, value })}
      >
        <span>{value}</span>
      </a>
    </li>
  );
};

export { Li };
