import { ReactNode } from "react";
import "@axa-fr/design-system-slash-css/dist/Layout/Header/Header.agent.scss";

const defaultClassName = "af-header";

type Props = {
  children: ReactNode;
};

const HeaderAgent = ({ children }: Props) => (
  <div className={defaultClassName}>
    <div className={`container ${defaultClassName}__wrapper`}>
      <header className={`${defaultClassName}__content`} role="banner">
        {children}
      </header>
    </div>
  </div>
);

export { HeaderAgent };
