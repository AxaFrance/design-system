import {
  type ComponentProps,
  type ComponentType,
  Fragment,
  useMemo,
} from "react";
import type {
  ContentItemProps,
  ContentMonoItemIconProps,
  ContentMonoItemPictureProps,
  ContentMonoItemStickProps,
} from "../ContentItemMono/ContentItemMonoCommon";
import { Divider } from "../Divider/DividerCommon";
import type { ClickItemProps } from "../List/ClickItem/types";
import { BREAKPOINT } from "../utilities/constants";
import { getClassName } from "../utilities/getClassName";
import { useIsSmallScreen } from "../utilities/hook/useIsSmallScreen";

export type TupleMax3<T> = [T] | [T, T] | [T, T, T];

export type DataAgentClickItemProps = Omit<ClickItemProps, "variant"> & {
  /**
   * Ignored: the DataAgent always renders its click items with the `small`
   * Click Item of its mockup.
   */
  variant?: ClickItemProps["variant"];
};

export type DataAgentProps = {
  className?: string;
  agentProps: ContentMonoItemPictureProps;
  agentContractProps?: ContentMonoItemStickProps;
  contents?: TupleMax3<ContentMonoItemIconProps>;
  /** Click items, always rendered in the `small` style of the mockup. */
  clickContents?: TupleMax3<DataAgentClickItemProps>;
  texteOrias?: string;
  isCompact?: boolean;
  /** Display the compact layout (header only) regardless of screen size */
  variant?: "default" | "compact";
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
  variant = "default",
}: DataAgentCommonProps) => {
  const componentClassName = useMemo(
    () => getClassName({ baseClassName: "af-data-agent", className }),
    [className],
  );

  const isMobile = useIsSmallScreen(BREAKPOINT.SM);

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
          {contents.map((content: ContentMonoItemIconProps, index) => (
            <Fragment
              // The index is safe here: contents is a static tuple of at most three items
              // eslint-disable-next-line react/no-array-index-key
              key={`content--${index}`}
            >
              <ContentItemMonoComponent {...content} type="icon" />
              <DividerComponent className="af-data-agent__line" />
            </Fragment>
          ))}
        </section>
      ) : null}
      {clickContents && clickContents?.length > 0 ? (
        <section className="af-data-agent__info-click-content">
          {clickContents.map((clickContent: DataAgentClickItemProps, index) => (
            <Fragment
              // The index is safe here: clickContents is a static tuple of at most three items
              // eslint-disable-next-line react/no-array-index-key
              key={`clickContent--${index}`}
            >
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
          ...agentProps.basePictureProps,
        }}
        variant="agent"
      />
    </section>
  );

  return (
    <section className={componentClassName}>
      {(isMobile && isCompact) || variant === "compact"
        ? renderForMobileLayout()
        : renderForDefaultLayout()}
    </section>
  );
};
