import chevron from "@material-symbols/svg-400/outlined/chevron_right.svg";
import { useMemo, type ComponentProps, type ReactNode } from "react";
import { Svg } from "../../../Svg";
import { getComponentClassName } from "../../../utilities";

type TClickItem = { classModifier?: string; isDisabled?: boolean } & Omit<
  ComponentProps<"button">,
  "disabled"
> &
  ComponentProps<"a"> & {
    label: ReactNode;
    icon?: ReactNode;
  };

export const ClickItem = ({
  label,
  icon,
  href,
  isDisabled = false,
  className,
  classModifier = "",
  ...otherProps
}: TClickItem) => {
  const componentClassName = useMemo(
    () =>
      getComponentClassName(
        className,
        `${classModifier}${isDisabled ? " disabled" : ""}`,
        "af-click-item",
      ),
    [className, classModifier, isDisabled],
  );

  const ClickComponent = useMemo(() => (href ? "a" : "button"), [href]);

  const clickComponentProps: ComponentProps<"button"> & ComponentProps<"a"> =
    useMemo(
      () =>
        href
          ? { href, "aria-disabled": isDisabled, ...otherProps }
          : {
              type: "button",
              disabled: isDisabled,
              ...otherProps,
            },
      [isDisabled, href, otherProps],
    );

  return (
    <ClickComponent className={componentClassName} {...clickComponentProps}>
      <div className="af-click-item__content">
        {icon && <div className="af-click-item__icon">{icon}</div>}
        <div className="af-click-item__label">{label}</div>
      </div>
      <div className="af-click-item__action">
        <Svg src={chevron} />
      </div>
    </ClickComponent>
  );
};
