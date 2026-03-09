import "@axa-fr/canopee-css/prospect/Layout/ExitLayout/ExitLayoutAll.css";
import {
  Children,
  ComponentType,
  isValidElement,
  type PropsWithChildren,
} from "react";
import { useIsSmallScreen } from "../../utilities/hook/useIsSmallScreen";
import { BREAKPOINT } from "../../utilities/constants";
import { type HeadingProps } from "../../Heading/types";
import { type IconProps } from "../../Icon/IconCommon";

export type ExitLayoutProps = PropsWithChildren & {
  headingProps?: HeadingProps;
  iconProps?: Pick<IconProps, "variant" | "src" | "hasBackground">;
};

type ExitLayoutCommonProps = ExitLayoutProps & {
  HeadingComponent: ComponentType<HeadingProps>;
  IconComponent: ComponentType<IconProps>;
};

export const Agent = ({ children }: PropsWithChildren) =>
  Children.map(children, function (child) {
    if (isValidElement(child)) {
      const childProps =
        typeof child.props === "object" && child.props !== null
          ? child.props
          : {};
      const existingClassName =
        "className" in childProps && typeof childProps.className === "string"
          ? childProps.className
          : "";
      return {
        ...child,
        props: {
          ...childProps,
          className: `${existingClassName} af-exit-page__agent`,
        },
      };
    }
    return child;
  });

export const Action = ({ children }: PropsWithChildren) => children;
export const Content = ({ children }: PropsWithChildren) => children;

export const ExitLayoutCommon = ({
  headingProps,
  iconProps,
  children,
  HeadingComponent,
  IconComponent,
}: ExitLayoutCommonProps) => {
  const childrenArray = Children.toArray(children);
  const isMobile = useIsSmallScreen(BREAKPOINT.SM);
  const iconSize = isMobile ? "M" : "L";

  const agent = childrenArray.find(
    (child) => isValidElement(child) && child.type === Agent,
  );
  const action = childrenArray.find(
    (child) => isValidElement(child) && child.type === Action,
  );
  const content = childrenArray.find(
    (child) => isValidElement(child) && child.type === Content,
  );

  return (
    <section className="af-exit-page subgrid">
      <article className="af-exit-page__content subgrid">
        {iconProps ? (
          <IconComponent {...iconProps} size={iconSize} role="img" />
        ) : null}

        {headingProps ? (
          <HeadingComponent level={2} {...headingProps}>
            {headingProps.title}
          </HeadingComponent>
        ) : null}

        {content}
      </article>
      {agent}
      {action ? (
        <div className="af-exit-page__actions subgrid">{action}</div>
      ) : null}
    </section>
  );
};

ExitLayoutCommon.Agent = Agent;
ExitLayoutCommon.Action = Action;
ExitLayoutCommon.Content = Content;

type ExitLayoutSubComponents = Pick<
  typeof ExitLayoutCommon,
  "Agent" | "Action" | "Content"
>;

export type ExitLayoutWithSubComponents = ComponentType<ExitLayoutProps> &
  ExitLayoutSubComponents;
