import {
  isValidElement,
  type ComponentProps,
  type ComponentType,
  type PropsWithChildren,
  type ReactElement,
  type ReactNode,
} from "react";
import { type HeadingProps } from "../../Heading/types";
import "@axa-fr/canopee-css/prospect/Layout/ColumnLayout/ColumnsLayoutAll.css";
import { getClassName } from "../../utilities/getClassName";
import { flattenFragments } from "../../utilities/flattenFragments";

export type ColumnsLayoutProps = ComponentProps<"section"> & {
  headingProps?: HeadingProps;
  isFit?: boolean;
};

export const Top = ({ children }: PropsWithChildren) => children;
export const Left = ({ children }: PropsWithChildren) => children;
export const Content = ({ children }: PropsWithChildren) => children;
export const Right = ({ children }: PropsWithChildren) => children;

const DEFAULT_CLASS_NAME = "af-columns-layout";

type ColumnsLayoutCommonProps = ColumnsLayoutProps & {
  HeadingComponent: ComponentType<HeadingProps>;
};

export const ColumnsLayoutCommon = ({
  children,
  className,
  headingProps,
  HeadingComponent,
  isFit,
  ...columnsLayoutProps
}: ColumnsLayoutCommonProps) => {
  const childrenArray = flattenFragments(children);
  const isSlot = (
    child: ReactNode,
    slot: ComponentType<PropsWithChildren>,
  ): child is ReactElement<PropsWithChildren> =>
    isValidElement(child) && child.type === slot;
  const top = childrenArray.filter((child) => isSlot(child, Top));
  const left = childrenArray.filter((child) => isSlot(child, Left));
  const right = childrenArray.filter((child) => isSlot(child, Right));
  const content = childrenArray.filter(
    (child) =>
      !isSlot(child, Top) && !isSlot(child, Left) && !isSlot(child, Right),
  );
  const invalidFit = Boolean(isFit) && (left.length > 0 || right.length > 0);

  return (
    <>
      {top.length > 0 ? (
        <article className={`${DEFAULT_CLASS_NAME}__top subgrid`}>
          {top}
        </article>
      ) : null}
      <section
        className={getClassName({
          baseClassName: DEFAULT_CLASS_NAME,
          modifiers: [isFit && !invalidFit ? "fit" : ""],
          className: `grid subgrid ${className ?? ""}`,
        })}
        {...columnsLayoutProps}
      >
        {headingProps ? <HeadingComponent {...headingProps} /> : null}
        {left.length > 0 ? (
          <section className={`${DEFAULT_CLASS_NAME}__left subgrid`}>
            {left}
          </section>
        ) : null}
        {content.length > 0 ? (
          <section className={`${DEFAULT_CLASS_NAME}__content subgrid`}>
            {content}
          </section>
        ) : null}
        {right.length > 0 ? (
          <section className={`${DEFAULT_CLASS_NAME}__right subgrid`}>
            {right}
          </section>
        ) : null}
      </section>
    </>
  );
};

ColumnsLayoutCommon.Top = Top;
ColumnsLayoutCommon.Left = Left;
ColumnsLayoutCommon.Content = Content;
ColumnsLayoutCommon.Right = Right;

type ColumnsLayoutSubComponents = Pick<
  typeof ColumnsLayoutCommon,
  "Top" | "Left" | "Right" | "Content"
>;

export type ColumnsLayoutWithSubComponents = ((
  props: ColumnsLayoutProps,
) => ReactElement) &
  ColumnsLayoutSubComponents;
