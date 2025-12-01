import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

import "@axa-fr/canopee-css/distributeur/common/breakpoints.css";

type MainContainerProps = ComponentPropsWithoutRef<"main"> & PropsWithChildren;

export const MainContainer = ({
  children,
  ...othersProps
}: MainContainerProps) => (
  <main className="af-container" {...othersProps}>
    {children}
  </main>
);
