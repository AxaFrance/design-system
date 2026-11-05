import {
  type ComponentProps,
  type ComponentPropsWithoutRef,
  type ComponentType,
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

/**
 * One to three items: the DataAgent mockup has three content slots and three
 * click slots, the second and third ones being optional.
 */
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
  /** Agent header (picture, name and role), always displayed. */
  agentProps: ContentMonoItemPictureProps;
  /** Contract attached to the agent, displayed under the agent header. */
  agentContractProps?: ContentMonoItemStickProps;
  /** One to three contact details (address, phone, opening hours…). */
  contents?: TupleMax3<ContentMonoItemIconProps>;
  /**
   * One to three click items, always rendered in the `small` style of the
   * mockup.
   */
  clickContents?: TupleMax3<DataAgentClickItemProps>;
  /** Legal ORIAS mention displayed at the bottom of the card. */
  oriasText?: string;
  /** @deprecated Use `oriasText` instead. */
  texteOrias?: string;
  /**
   * Display the compact layout (header only) on small screens.
   * @default true
   */
  isCompact?: boolean;
  /** Display the compact layout (header only) regardless of screen size */
  variant?: "default" | "compact";
  /**
   * Props of the Click Item shown in the compact layout, such as `onClick` to
   * make it interactive. Its picture, title and subtitle come from
   * `agentProps`.
   */
  compactClickItemProps?: Omit<
    ClickItemProps,
    "variant" | "basePictureProps" | "title" | "subtitle"
  >;
} & Omit<ComponentPropsWithoutRef<"section">, "children">;

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
  oriasText,
  texteOrias,
  DividerComponent,
  ContentItemMonoComponent,
  ClickItemComponent,
  isCompact = true,
  variant = "default",
  compactClickItemProps,
  ...sectionProps
}: DataAgentCommonProps) => {
  const componentClassName = useMemo(
    () => getClassName({ baseClassName: "af-data-agent", className }),
    [className],
  );

  const isMobile = useIsSmallScreen(BREAKPOINT.SM);
  const orias = oriasText ?? texteOrias;

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
        <ul className="af-data-agent__info-content">
          {contents.map((content: ContentMonoItemIconProps, index) => (
            <li
              // The index is safe here: contents is a static tuple of at most three items
              // eslint-disable-next-line react/no-array-index-key
              key={`content--${index}`}
              className="af-data-agent__item"
            >
              <ContentItemMonoComponent {...content} type="icon" />
              {index < contents.length - 1 ? (
                <DividerComponent className="af-data-agent__line" />
              ) : null}
            </li>
          ))}
        </ul>
      ) : null}
      {clickContents && clickContents?.length > 0 ? (
        <ul className="af-data-agent__info-click-content">
          {clickContents.map((clickContent: DataAgentClickItemProps, index) => (
            <li
              // The index is safe here: clickContents is a static tuple of at most three items
              // eslint-disable-next-line react/no-array-index-key
              key={`clickContent--${index}`}
              className="af-data-agent__item"
            >
              <ClickItemComponent {...clickContent} variant="small" />
              {index < clickContents.length - 1 ? (
                <DividerComponent className="af-data-agent__line" />
              ) : null}
            </li>
          ))}
        </ul>
      ) : null}
      {orias ? <p className="af-data-agent__text-orias">{orias}</p> : null}
    </>
  );

  const renderForMobileLayout = () => (
    <section className="af-data-agent__intro">
      <ClickItemComponent
        {...compactClickItemProps}
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
    <section className={componentClassName} {...sectionProps}>
      {(isMobile && isCompact) || variant === "compact"
        ? renderForMobileLayout()
        : renderForDefaultLayout()}
    </section>
  );
};
