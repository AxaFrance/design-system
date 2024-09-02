import { ReactNode } from "react";
import "@axa-fr/design-system-slash-css/dist/Layout/Header/Agent/Header.agent.scss";
import { getComponentClassName } from "../../../utilities";

const defaultClassName = "af-header";

type Props = {
  children: ReactNode;
  classModifier?: string;
  className?: string;
};

const HeaderAgent = ({ classModifier, className, children }: Props) => {
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

export { HeaderAgent };
