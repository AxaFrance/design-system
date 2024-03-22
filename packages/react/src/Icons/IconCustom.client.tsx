import { useState, useEffect, useRef, ComponentPropsWithoutRef } from "react";
import { CustomIcon } from "./types";

type IconProps = {
  name: CustomIcon;
  size?: number;
  fill?: string;
} & ComponentPropsWithoutRef<"svg">;

const IconCustom = ({
  name,
  size = 24,
  fill = "inherited",
  ...others
}: IconProps) => {
  const ImportedIconRef = useRef<React.FunctionComponent<
    React.ComponentProps<"svg"> & { title?: string }
  > | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        const { default: namedImport } = await import(
          `./svg_custom/${name}.svg?react`
        );
        ImportedIconRef.current = namedImport;
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    return <ImportedIcon width={size} height={size} fill={fill} {...others} />;
  }

  return null;
};

export { IconCustom };
