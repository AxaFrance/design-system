import { SkeletonGrid } from "@axa-fr/canopee-react/prospect";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import "./SkeletonGrid.stories.scss?inline";

const meta: Meta<typeof SkeletonGrid> = {
  title: "Components/SkeletonGrid",
  component: SkeletonGrid,
};

export default meta;

const RenderWrapper = (
  props: ComponentPropsWithoutRef<typeof SkeletonGrid>,
) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading((currentIsLoading) => !currentIsLoading);
    }, 5000);
    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <div className="skeleton-wrapper-demo">
      <SkeletonGrid {...props} isLoading={isLoading}>
        <div className="skeleton-wrapper-content">
          <p>Ceci est mon contenu à charger</p>
          <p>Ceci est mon contenu à charger</p>
          <p>mon contenu</p>
        </div>
      </SkeletonGrid>
    </div>
  );
};

export const WrapperMode: StoryObj<typeof SkeletonGrid> = {
  args: {
    grid: [
      [{ colSize: 7, size: "XS" }],
      [{ colSize: 8, size: "XS" }],
      [{ colSize: 5, size: "XS" }],
    ],
  },
  render: RenderWrapper,
};
