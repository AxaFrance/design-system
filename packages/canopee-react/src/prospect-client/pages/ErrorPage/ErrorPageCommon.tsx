import type { ComponentType, PropsWithChildren } from "react";
import close from "@material-symbols/svg-400/rounded/close.svg";
import {
  type ExitLayoutWithSubComponents,
  type ExitLayoutProps,
} from "../../Layout/ExitLayout/ExitLayoutCommon";
import { type LinkProps } from "../../Link/LinkCommon";

export type ErrorPageProps = PropsWithChildren &
  Pick<ExitLayoutProps, "headingProps"> & {
    linkProps?: LinkProps;
  };

type ErrorPageCommonProps = ErrorPageProps & {
  LinkComponent: ComponentType<LinkProps>;
  ExitLayoutComponent: ExitLayoutWithSubComponents;
};

export const ErrorPageCommon = ({
  headingProps,
  children,
  linkProps,
  LinkComponent,
  ExitLayoutComponent,
}: ErrorPageCommonProps) => (
  <ExitLayoutComponent
    headingProps={headingProps}
    iconProps={{
      src: close,
      hasBackground: true,
      variant: "error",
    }}
  >
    <ExitLayoutComponent.Content>{children}</ExitLayoutComponent.Content>

    {linkProps ? (
      <ExitLayoutComponent.Action>
        <LinkComponent className="af-btn-client" {...linkProps} />
      </ExitLayoutComponent.Action>
    ) : null}
  </ExitLayoutComponent>
);
