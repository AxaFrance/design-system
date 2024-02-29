import { ReactNode } from "react";
import "@axa-fr/design-system-css/dist/Header/Header.agent.scss";
import { getComponentClassName } from "../agent";

const defaultClassName = "af-header";

type Props = {
  children: ReactNode;
  className?: string;
  classModifier?: string;
};

const Header = ({ classModifier, className, children }: Props) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    defaultClassName,
  );
  return (
    <div className={componentClassName}>
      <div className={`container ${defaultClassName}__wrapper`}>
        <header className={`${defaultClassName}__content`} role="banner">
          {children}
        </header>
      </div>
    </div>
  );
};

export { Header };
