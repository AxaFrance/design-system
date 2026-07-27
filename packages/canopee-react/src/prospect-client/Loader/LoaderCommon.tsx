import { type ComponentType, type ElementType, useId } from "react";
import { getClassName } from "../utilities/getClassName";

import { type SpinnerProps } from "../Spinner/SpinnerCommon";
import type { PolymorphicComponent } from "../utilities/types/PolymorphicComponent";

export type LoaderProps = {
  isDialog?: boolean;
  title: string;
  subtitle?: string;
  spinnerProps?: SpinnerProps;
};

export type LoaderCommonProps<T extends ElementType> = PolymorphicComponent<
  T,
  LoaderProps
> & {
  SpinnerComponent: ComponentType<SpinnerProps>;
};

export const LoaderCommon = ({
  title,
  subtitle,
  SpinnerComponent,
  spinnerProps,
  className,
  isDialog,
  ...rest
}: LoaderCommonProps<ElementType>) => {
  const baseClassName = "af-loader";
  const titleId = useId();
  const Component = (isDialog && "dialog") || "article";

  return (
    <Component
      className={getClassName({
        baseClassName,
        className,
      })}
      aria-labelledby={titleId}
      {...rest}
    >
      <SpinnerComponent {...spinnerProps} />
      <div className={`${baseClassName}__content`}>
        <span id={titleId} className={`${baseClassName}__title`}>
          {title}
        </span>
        {subtitle ? (
          <span className={`${baseClassName}__subtitle`}>{subtitle}</span>
        ) : null}
      </div>
    </Component>
  );
};

LoaderCommon.displayName = "LoaderCommon";
