import { MouseEvent } from "react";

type LiProps = {
  isVisible?: boolean;
  active?: boolean;
  value: number;
  onChange: (e: { value: number }) => void;
};

const onClick =
  ({ onChange, value }: LiProps) =>
  (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onChange({
      value: Number(value),
    });
  };

const Li = ({ isVisible, active, value, ...props }: LiProps) => {
  if (!isVisible) {
    return null;
  }
  return (
    <li className="af-pager__item">
      <a
        aria-current={active ? "page" : undefined}
        className="af-pager__item-link"
        href="/#"
        onClick={onClick({ ...props, value })}
      >
        <span>{value}</span>
      </a>
    </li>
  );
};

export { Li };
