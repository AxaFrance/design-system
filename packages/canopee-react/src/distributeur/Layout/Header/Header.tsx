import "@axa-fr/canopee-css/distributeur/Layout/Header/Header.css";
import classNames from "classnames";
import { type ReactNode } from "react";
import { getClassName } from "../../utilities/helpers/getClassName";

const defaultClassName = "af-header";

type Props = {
  children: ReactNode;
  /** @deprecated Use `className` instead. */
  classModifier?: string;
  className?: string;
};

const Header = ({ classModifier, className, children }: Props) => {
  const componentClassName = getClassName({
    baseClassName: defaultClassName,
    modifiers: classModifier?.split(" "),
    className,
  });

  return (
    <div className={classNames("af-container", componentClassName)}>
      <header className={`${defaultClassName}__content`} role="banner">
        {children}
      </header>
    </div>
  );
};

export { Header };
