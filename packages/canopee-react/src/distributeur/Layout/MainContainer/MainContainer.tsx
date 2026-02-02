import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

import "@axa-fr/canopee-css/distributeur/common/breakpoints.css";
import "@axa-fr/canopee-css/distributeur/MainContainer/MainContainer.css";

type MainContainerProps = ComponentPropsWithoutRef<"main"> & PropsWithChildren;

export const MainContainer = ({
  children,
  ...othersProps
}: MainContainerProps) => (
  <main className="af-container af-main-container" {...othersProps}>
    {children}
  </main>
);
