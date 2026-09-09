import "@axa-fr/canopee-css/distributeur/Form/Experimental/InputUnit.css";

import type { PropsWithChildren } from "react";

export const InputUnit = ({ children }: PropsWithChildren) =>
  children ? <span className="af-input__unit">{children}</span> : null;
