import type { ComponentProps } from "react";
import logo from "@axa-fr/design-system-apollo-css/logo-axa.svg";

import "@axa-fr/design-system-apollo-css/dist/BasePicture/BasePictureAll.css";

type BasePictureProps = ComponentProps<"img">;

export const BasePicture = ({ className, src, ...props }: BasePictureProps) => (
  <img
    className={["af-basepicture", className].filter(Boolean).join(" ")}
    alt=""
    src={src || logo}
    {...props}
  />
);
