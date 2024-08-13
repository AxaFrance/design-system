import chevron from "@material-symbols/svg-400/outlined/chevron_right.svg";
import { useMemo, type ComponentProps, type ReactNode } from "react";
import { Svg } from "../../../Svg";

type TClickItem = ComponentProps<"button"> &
  ComponentProps<"a"> & {
    label: ReactNode;
    icon?: ReactNode;
  };

export const ClickItem = ({
  label,
  icon,
  href,
  disabled,
  ...otherProps
}: TClickItem) => {
  const ClickComponent = useMemo(
    () => (href && !disabled ? "a" : "button"),
    [disabled, href],
  );

  const clickComponentProps: ComponentProps<"button"> & ComponentProps<"a"> =
    useMemo(
      () =>
        ClickComponent === "a"
          ? { href, ...otherProps }
          : {
              type: "button",
              disabled,
              ...otherProps,
            },
      [ClickComponent, disabled, href, otherProps],
    );

  return (
    <ClickComponent className="af-list-item__button" {...clickComponentProps}>
      <div className="af-list-item__content">
        {icon && <div className="af-list-item-content__icon">{icon}</div>}
        <div className="af-list-item-content__label">{label}</div>
      </div>
      <div className="af-list-item__action">
        <Svg src={chevron} />
      </div>
    </ClickComponent>
  );
};
