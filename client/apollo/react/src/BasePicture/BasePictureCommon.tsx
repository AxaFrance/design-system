import { useMemo } from "react";
import logo from "@axa-fr/design-system-apollo-css/logo-axa.svg";
import { getComponentClassName } from "../utilities/getComponentClassName";

export const BasePicture = ({
  className,
  src,
  ...rest
}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  const componentClassName = useMemo(
    () => getComponentClassName("af-basepicture", className),
    [className],
  );

  return (
    <img className={componentClassName} alt="" src={src || logo} {...rest} />
  );
};
