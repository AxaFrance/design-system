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

export type TupleMax3<T> = [T] | [T, T] | [T, T, T];

export type DataAgentProps = {
  className?: string;
  agentProps: ContentMonoItemPictureProps;
  agentContractProps?: ContentMonoItemStickProps;
  contents?: TupleMax3<ContentMonoItemIconProps>;
  clickContents?: TupleMax3<ClickItemProps>;
  texteOrias?: string;
  isCompact?: boolean;
  useIsSmallScreenFn?: typeof useIsSmallScreen;
};

type DataAgentCommonProps = DataAgentProps & {
  DividerComponent: ComponentType<ComponentProps<typeof Divider>>;
  ContentItemMonoComponent: ComponentType<ContentItemProps>;
  ClickItemComponent: ComponentType<ClickItemProps>;
};

export const DataAgentCommon = ({
  className,
  agentProps,
  agentContractProps,
  contents,
  clickContents,
  texteOrias,
  DividerComponent,
  ContentItemMonoComponent,
  ClickItemComponent,
  isCompact = true,
  useIsSmallScreenFn = useIsSmallScreen,
}: DataAgentCommonProps) => {
  const componentClassName = useMemo(
    () => getComponentClassName("af-data-agent", className),
    [className],
  );

  const isMobile = useIsSmallScreenFn(BREAKPOINT.SM);

  const renderForDefaultLayout = () => (
    <>
      <section className="af-data-agent__intro">
        <ContentItemMonoComponent {...agentProps} type="picture" />
        {agentContractProps ? (
          <ContentItemMonoComponent {...agentContractProps} type="stick" />
        ) : null}
      </section>
      <DividerComponent />
      {contents && contents?.length > 0 ? (
        <section className="af-data-agent__info-content">
          {contents.map((content: ContentMonoItemIconProps) => (
            <Fragment key={`content--${crypto.randomUUID()}`}>
              <ContentItemMonoComponent {...content} type="icon" />
              <DividerComponent className="af-data-agent__line" />
            </Fragment>
          ))}
        </section>
      ) : null}
      {clickContents && clickContents?.length > 0 ? (
        <section className="af-data-agent__info-click-content">
          {clickContents.map((clickContent: ClickItemProps) => (
            <Fragment key={`clickContent--${crypto.randomUUID()}`}>
              <ClickItemComponent {...clickContent} variant="small" />
              <DividerComponent className="af-data-agent__line" />
            </Fragment>
          ))}
        </section>
      ) : null}
      {Boolean(texteOrias) && (
        <p className="af-data-agent__text-orias">{texteOrias}</p>
      )}
    </>
  );

  const renderForMobileLayout = () => (
    <section className="af-data-agent__intro">
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

  return (
    <section className={componentClassName}>
      {isMobile && isCompact
        ? renderForMobileLayout()
        : renderForDefaultLayout()}
    </section>
  );
};
