import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

import "@axa-fr/design-system-slash-css/dist/common/breakpoints.css";

type MainContainerProps = ComponentPropsWithoutRef<"main"> & PropsWithChildren;

export const MainContainer = ({
  children,
  ...othersProps
}: MainContainerProps) => (
  <main className="af-container" {...othersProps}>
    {children}
  </main>
);
