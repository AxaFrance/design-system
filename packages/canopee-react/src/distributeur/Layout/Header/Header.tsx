import { ReactNode } from "react";
import "@axa-fr/design-system-slash-css/dist/Layout/Header/Header.scss";
import classNames from "classnames";
import { getComponentClassName } from "../../utilities";

const defaultClassName = "af-header";

type Props = {
  children: ReactNode;
  classModifier?: string;
  className?: string;
};

const Header = ({ classModifier, className, children }: Props) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    defaultClassName,
  );

  return (
    <div className={classNames("af-container", componentClassName)}>
      <header className={`${defaultClassName}__content`} role="banner">
        {children}
      </header>
    </div>
  );
};

export { Header };
