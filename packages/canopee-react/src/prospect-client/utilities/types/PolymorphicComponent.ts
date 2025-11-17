import type { ComponentPropsWithRef, ElementType } from "react";

type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>["ref"];

export type PolymorphicComponent<
  C extends ElementType,
  Props = object,
> = Props &
  Omit<ComponentPropsWithRef<C>, keyof Props | "as"> & {
    as?: C;
  } & {
    ref?: PolymorphicRef<C>;
  };
