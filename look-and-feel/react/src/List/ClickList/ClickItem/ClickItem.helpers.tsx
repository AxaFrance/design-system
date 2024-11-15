import type { ComponentProps, ComponentType, ElementType } from "react";
import type { TParentClickComponentProps } from "./types";

export const createClickItemParent = <TComponent extends ElementType>(
  Wrapper: ComponentType<TComponent> | TComponent,
  wrapperProps: ComponentProps<TComponent>,
) => {
  const ClickItemWrapper = ({
    children,
    ...clickItemProps
  }: TParentClickComponentProps) => (
    <Wrapper {...wrapperProps} {...clickItemProps}>
      {children}
    </Wrapper>
  );
  return ClickItemWrapper;
};
