import {
  Children,
  isValidElement,
  type ComponentProps,
  type ComponentType,
  type ReactNode,
  useId,
} from "react";
import { getClassName } from "../utilities/getClassName";
import type { TagProps } from "../Tag/TagCommon";

export type TagListProps = ComponentProps<"ul"> & {
  children: ReactNode;
  hideThreshold?: number;
  OverflowTagComponent: ComponentType<TagProps>;
};

export const TagListCommon = ({
  children,
  hideThreshold = 2,
  className = "",
  OverflowTagComponent: OverflowTag,
  ...divProps
}: TagListProps) => {
  const id = useId();
  const childArray = Children.toArray(children).filter(isValidElement);
  const total = childArray.length;
  const isOverflowing = total > hideThreshold;
  const visibleChildren = isOverflowing
    ? childArray.slice(0, hideThreshold)
    : childArray;
  const hiddenCount = total - hideThreshold;

  return (
    <ul
      className={getClassName({
        baseClassName: "af-tag-list",
        className,
      })}
      {...divProps}
    >
      {visibleChildren.map((child, index) => (
        <li key={(child.props as TagProps).id ?? `${id}-${index}`}>{child}</li>
      ))}
      {isOverflowing ? (
        <li>
          <OverflowTag>+{hiddenCount}</OverflowTag>
        </li>
      ) : null}
    </ul>
  );
};
