import { ReactNode } from "react";
import "@axa-fr/design-system-css/dist/Header/Header.agent.scss";
import { getComponentClassName } from "../agent";

type Props = {
  children: ReactNode;
  className?: string;
  classModifier?: string;
};

const Header = ({ classModifier, className, children }: Props) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    "af-header",
  );
  return (
    <div className={componentClassName}>
      <div className="container af-header__wrapper">
        <header className="af-header__content" role="banner">
          {children}
        </header>
      </div>
    </div>
  );
};

export { Header };
