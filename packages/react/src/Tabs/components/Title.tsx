import React from "react";
import { getComponentClassName } from "../../agent";

export type TitleComponentProps = {
  enable?: boolean | null;
  active: boolean;
  className?: string;
  classModifier?: string;
  id: string;
  children?: React.ReactNode;
  onChange: (event: React.MouseEvent<HTMLButtonElement>, index: string) => void;
};

const Title = ({
  active,
  onChange,
  children,
  classModifier,
  className,
  enable,
  id,
}: TitleComponentProps) => {
  const newClassModifier = (classModifier || "").concat(
    (enable === false ? " disabled" : "").concat(active ? " active" : ""),
  );

  const componentClassName = getComponentClassName(
    className,
    newClassModifier,
    "af-tabs__item",
  );

  return (
    <li className={componentClassName}>
      <button
        type="button"
        id={id}
        className="af-tabs__link"
        onClick={(event) => onChange(event, id)}
      >
        {children}
      </button>
    </li>
  );
};

Title.displayName = "Title";

export { Title };
