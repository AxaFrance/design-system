import "@axa-fr/design-system-slash-css/dist/Tabs/Tabs.agent.scss";
import { ReactNode } from "react";

export type TabProps = {
  title: ReactNode;
  children?: ReactNode;
  className?: string;
  classModifier?: string;
};

const Tab = () => <span />;

export { Tab };
