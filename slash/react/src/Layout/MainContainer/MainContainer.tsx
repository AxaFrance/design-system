import { PropsWithChildren } from "react";

import "@axa-fr/design-system-slash-css/dist/Layout/MainContainer/MainContainer.css";

type MainContainerProps = PropsWithChildren;

export const MainContainer = ({ children }: MainContainerProps) => (
  <main className="af-main-container">{children}</main>
);
