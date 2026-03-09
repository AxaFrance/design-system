import type { ComponentType, PropsWithChildren } from "react";
import check from "@material-symbols/svg-400/rounded/check.svg";
import {
  type ExitLayoutWithSubComponents,
  type ExitLayoutProps,
} from "../../Layout/ExitLayout/ExitLayoutCommon";
import { type DataAgentProps } from "../../DataAgent/DataAgentCommon";
import { type LinkProps } from "../../Link/LinkCommon";

export type ValidPageProps = PropsWithChildren &
  Pick<ExitLayoutProps, "headingProps"> & {
    dataAgentProps?: DataAgentProps;
    linkProps?: LinkProps;
  };

type ValidPageCommonProps = ValidPageProps & {
  DataAgentComponent: ComponentType<DataAgentProps>;
  LinkComponent: ComponentType<LinkProps>;
  ExitLayoutComponent: ExitLayoutWithSubComponents;
};

export const ValidPageCommon = ({
  headingProps,
  children,
  dataAgentProps,
  linkProps,
  DataAgentComponent,
  LinkComponent,
  ExitLayoutComponent,
}: ValidPageCommonProps) => (
  <ExitLayoutComponent
    headingProps={headingProps}
    iconProps={{
      src: check,
      hasBackground: true,
      variant: "success",
    }}
  >
    <ExitLayoutComponent.Content>{children}</ExitLayoutComponent.Content>

    {dataAgentProps ? (
      <ExitLayoutComponent.Agent>
        <DataAgentComponent {...dataAgentProps} />
      </ExitLayoutComponent.Agent>
    ) : null}

    {linkProps ? (
      <ExitLayoutComponent.Action>
        <LinkComponent className="af-btn-client" {...linkProps} />
      </ExitLayoutComponent.Action>
    ) : null}
  </ExitLayoutComponent>
);
