import "@axa-fr/canopee-css/distributeur/Tabs/Tabs.css";
import { ReactNode } from "react";

export type TabProps = {
  title: ReactNode;
  children?: ReactNode;
  className?: string;
  classModifier?: string;
};

const Tab = () => <span />;

export { Tab };
