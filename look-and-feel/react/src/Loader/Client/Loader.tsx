import "@axa-fr/design-system-look-and-feel-css/dist/Loader/Loader.client.scss";
import { ComponentPropsWithRef } from "react";

type Props = ComponentPropsWithRef<"input"> & {
  size: number;
  border: number;
};

const Loader = ({ size = 60, border = 5 }: Props) => (
  <div
    className="af-loader__container"
    style={{
      width: `${size}px`,
      height: `${size}px`,
      border: `${border}px solid #f3f3f3`,
      borderTop: `${border}px solid #00008f`,
    }}
  >
    <div className="af-loader__container-spin" aria-hidden="true" />
  </div>
);

Loader.displayName = "Loader";

export { Loader };
