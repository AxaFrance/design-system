import { useState, useEffect, useRef, ComponentPropsWithoutRef } from "react";
import { MaterialIcon } from "./types";

type IconProps = {
  name: MaterialIcon;
  styleType?: "filled" | "outlined" | "round" | "sharp" | "two-tone";
  size?: number;
  fill?: string;
} & ComponentPropsWithoutRef<"svg">;

const Icon = ({
  name,
  size = 24,
  fill = "inherited",
  styleType = "filled",
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
          `./svg/${styleType}/${name}.svg?react`
        );
        ImportedIconRef.current = namedImport;
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name, styleType]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    return <ImportedIcon width={size} height={size} fill={fill} {...others} />;
  }

  return null;
};

export { Icon };
