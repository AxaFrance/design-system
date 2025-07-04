import { type ComponentProps, ComponentType, Fragment, useMemo } from "react";
import { getComponentClassName } from "../utilities/getComponentClassName";
import { useIsSmallScreen } from "../utilities/hook/useIsSmallScreen";
import { BREAKPOINT } from "../utilities/constants";
import { Divider } from "../Divider/DividerCommon";
import type {
  ContentItemProps,
  ContentMonoItemIconProps,
  ContentMonoItemPictureProps,
  ContentMonoItemStickProps,
} from "../ContentItemMono/ContentItemMonoCommon";
import type { ClickItemProps } from "../List/ClickItem/types";

type Max3<T> = [T] | [T, T] | [T, T, T];

export type DataAgentProps = {
  className?: string;
  classModifier?: string;
  agentProps: ContentMonoItemPictureProps;
  agentContractProps?: ContentMonoItemStickProps;
  contents?: Max3<ContentMonoItemIconProps>;
  clickContents?: Max3<ClickItemProps>;
  texteOrias?: string;
};

type DataAgentCommonProps = DataAgentProps & {
  DividerComponent: ComponentType<ComponentProps<typeof Divider>>;
  ContentItemMonoComponent: ComponentType<ContentItemProps>;
  ClickItemComponent: ComponentType<ClickItemProps>;
};

export const DataAgentCommon = ({
  className,
  classModifier,
  agentProps,
  agentContractProps,
  contents,
  clickContents,
  texteOrias,
  DividerComponent,
  ContentItemMonoComponent,
  ClickItemComponent,
}: DataAgentCommonProps) => {
  const componentClassName = useMemo(
    () =>
      getComponentClassName("af-apollo-data-agent", className, classModifier),
    [className, classModifier],
  );

  const isMobile = useIsSmallScreen(BREAKPOINT.SM);

  const renderForDefaultLayout = () => {
    return (
      <>
        <section className="af-apollo-data-agent__intro">
          <ContentItemMonoComponent {...agentProps} type="picture" />
          {agentContractProps && (
            <ContentItemMonoComponent {...agentContractProps} type="stick" />
          )}
        </section>
        <DividerComponent />
        {contents && contents?.length > 0 && (
          <section className="af-apollo-data-agent__info">
            {contents.map((content: ContentMonoItemIconProps) => (
              <Fragment key={`content--${crypto.randomUUID()}`}>
                <ContentItemMonoComponent {...content} type="icon" />
                <DividerComponent className="af-apollo-data-agent__line" />
              </Fragment>
            ))}
          </section>
        )}
        {clickContents && clickContents?.length > 0 && (
          <section className="af-apollo-data-agent__info">
            {clickContents.map((clickContent: ClickItemProps) => (
              <Fragment key={`clickContent--${crypto.randomUUID()}`}>
                <ClickItemComponent {...clickContent} variant="small" />
                <DividerComponent className="af-apollo-data-agent__line" />
              </Fragment>
            ))}
          </section>
        )}
        {texteOrias ? (
          <p className="af-apollo-data-agent__texte-orias">{texteOrias}</p>
        ) : null}
      </>
    );
  };

  const renderForMobileLayout = () => {
    return (
      <section className="af-apollo-data-agent__intro">
        <ClickItemComponent
          {...agentProps}
          basePictureProps={{
            src: agentProps.picture,
            alt: agentProps.title,
          }}
          variant="agent"
        />
      </section>
    );
  };

  return (
    <section className={componentClassName}>
      {isMobile ? renderForMobileLayout() : renderForDefaultLayout()}
    </section>
  );
};
