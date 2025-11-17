import classnames from "classnames";

import "@axa-fr/canopee-css/distributeur/Divider/Divider.css";
import { ComponentProps } from "react";

type DividerProps = ComponentProps<"hr"> & {
  mode?: "horizontal" | "vertical";
};

export const Divider = ({
  mode = "horizontal",
  className,
  ...props
}: DividerProps) => {
  const componentClassName = classnames(
    "af-divider",
    {
      "af-divider--horizontal": mode === "horizontal",
      "af-divider--vertical": mode === "vertical",
    },
    className,
  );

  return <hr className={componentClassName} {...props} />;
};
