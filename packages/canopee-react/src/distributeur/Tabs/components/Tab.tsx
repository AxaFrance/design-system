import "@axa-fr/canopee-css/distributeur/Tabs/Tabs.css";
import { ReactNode } from "react";

export type TabProps = {
  title: ReactNode;
  children?: ReactNode;
  className?: string;
  /**
   * @deprecated Use className instead
   */
  classModifier?: string;
};

const Tab = () => null;

export { Tab };
