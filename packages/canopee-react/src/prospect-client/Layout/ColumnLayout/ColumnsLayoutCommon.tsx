import {
  Children,
  isValidElement,
  type ComponentType,
  type PropsWithChildren,
  type ReactElement,
} from "react";
import { type HeadingProps } from "../../Heading/types";
import "@axa-fr/canopee-css/prospect/Layout/ColumnLayout/ColumnsLayoutAll.css";
import { getClassName } from "../../utilities/getClassName";

export type ColumnsLayoutProps = {
  headingProps?: HeadingProps;
} & { className?: string; isFit?: boolean } & PropsWithChildren;

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
  const childrenArray = Children.toArray(children);

  const top = childrenArray.find(
    (child) => isValidElement(child) && child.type === Top,
  );
  const left = childrenArray.find(
    (child) => isValidElement(child) && child.type === Left,
  );
  const content = childrenArray.find(
    (child) => isValidElement(child) && child.type === Content,
  );
  const right = childrenArray.find(
    (child) => isValidElement(child) && child.type === Right,
  );

  return (
    <>
      {top ? (
        <article className={`${DEFAULT_CLASS_NAME}__top subgrid`}>
          {top}
        </article>
      ) : null}
      <section
        className={getClassName({
          baseClassName: DEFAULT_CLASS_NAME,
          modifiers: [isFit ? "fit" : ""],
          className,
        })}
        {...columnsLayoutProps}
      >
        {headingProps ? <HeadingComponent {...headingProps} /> : null}
        {left ? (
          <section className={`${DEFAULT_CLASS_NAME}__left subgrid`}>
            {left}
          </section>
        ) : null}
        {content ? (
          <section className={`${DEFAULT_CLASS_NAME}__content subgrid`}>
            {content}
          </section>
        ) : null}
        {right ? (
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
