import {
  Children,
  isValidElement,
  type ComponentProps,
  type ComponentType,
  type PropsWithChildren,
  type ReactNode,
} from "react";
import "@axa-fr/canopee-css/prospect/Layout/PatternWithAction/PatternWithActionAll.css";
import type { HeadingProps } from "../../Heading/types";
import { getClassName } from "../../utilities/getClassName";

const DEFAULT_CLASS_NAME = "af-pattern-with-action";

export type PatternWithActionProps = Omit<
  ComponentProps<"section">,
  "children"
> & {
  /** Section content. Wrap the call to action in `PatternWithAction.Action`. */
  children?: ReactNode;
  /** Section title. Rendered as a level 2 heading unless `level` is provided. */
  headingProps?: HeadingProps;
};

/** Call to action displayed next to the heading on desktop, after the content on mobile and tablet. */
export const Action = ({ children }: PropsWithChildren) => children;

type PatternWithActionCommonProps = PatternWithActionProps & {
  HeadingComponent: ComponentType<HeadingProps>;
};

export const PatternWithActionCommon = ({
  children,
  headingProps,
  className,
  HeadingComponent,
  ...sectionProps
}: PatternWithActionCommonProps) => {
  const childrenArray = Children.toArray(children);
  const isAction = (child: (typeof childrenArray)[number]) =>
    isValidElement(child) && child.type === Action;
  const action = childrenArray.find(isAction);
  const content = childrenArray.filter((child) => !isAction(child));

  return (
    <section
      {...sectionProps}
      className={getClassName({
        baseClassName: DEFAULT_CLASS_NAME,
        className: `subgrid ${className ?? ""}`,
      })}
    >
      {headingProps || action ? (
        <div className={`${DEFAULT_CLASS_NAME}__header`}>
          {headingProps ? (
            <HeadingComponent level={2} {...headingProps} />
          ) : null}
          {action ? (
            <div className={`${DEFAULT_CLASS_NAME}__action`}>{action}</div>
          ) : null}
        </div>
      ) : null}
      {content}
    </section>
  );
};
