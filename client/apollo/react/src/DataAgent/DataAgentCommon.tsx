import { type ComponentProps, ComponentType, useMemo } from "react";
import { getComponentClassName } from "../utilities/getComponentClassName";
import { Divider } from "../Divider/DividerCommon";
import {
  type ContentItemProps,
  type ContentMonoItemIconProps,
  type ContentMonoItemPictureProps,
  type ContentMonoItemStickProps,
} from "../ContentItemMono/ContentItemMonoCommon";

type Max3<T> = [T] | [T, T] | [T, T, T];

export type DataAgentProps = {
  className?: string;
  classModifier?: string;
  agentProps: ContentMonoItemPictureProps;
  agentContractProps: ContentMonoItemStickProps;
  contents?: Max3<ContentMonoItemIconProps>;
};

type DataAgentCommonProps = DataAgentProps & {
  DividerComponent: ComponentType<ComponentProps<typeof Divider>>;
  ContentItemMonoComponent: ComponentType<ContentItemProps>;
};

export const DataAgentCommon = ({
  className,
  classModifier,
  agentProps,
  agentContractProps,
  contents,
  DividerComponent,
  ContentItemMonoComponent,
}: DataAgentCommonProps) => {
  const componentClassName = useMemo(
    () =>
      getComponentClassName("af-apollo-data-agent", className, classModifier),
    [className, classModifier],
  );

  return (
    <section className={componentClassName}>
      <ContentItemMonoComponent {...agentProps} type="picture" />
      <ContentItemMonoComponent {...agentContractProps} type="stick" />
      <DividerComponent />
      {contents?.map((content) => (
        <>
          <ContentItemMonoComponent {...content} type="icon" />
          <DividerComponent />
        </>
      ))}
    </section>
  );
};
