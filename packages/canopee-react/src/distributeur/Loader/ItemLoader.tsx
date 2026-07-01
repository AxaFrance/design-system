import Loader from "@axa-fr/canopee-css/Item_Loader.svg";
import LoaderInverse from "@axa-fr/canopee-css/Item_Loader_Inverse.svg";

export type ItemLoaderVariant = "inline" | "fullscreen" | "content";

const DEFAULT_CLASS_NAME = "af-spinner-loader";

export const ItemLoader = ({ variant }: { variant: ItemLoaderVariant }) => {
  const isInverse = variant === "fullscreen";

  return (
    <img
      className={`${DEFAULT_CLASS_NAME}__icon`}
      src={isInverse ? LoaderInverse : Loader}
      aria-hidden="true"
      alt=""
    />
  );
};
