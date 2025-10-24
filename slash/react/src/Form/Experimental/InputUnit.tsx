import "@axa-fr/design-system-slash-css/dist/Form/Experimental/InputUnit.css";

import { PropsWithChildren } from "react";

export const InputUnit = ({ children }: PropsWithChildren) => (
  <span className="af-input__unit">{children}</span>
);
