import { Meta, StoryObj } from "@storybook/react";
import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import { Skeleton } from "./Skeleton";
import "./Skeleton-demo.scss";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
};

export default meta;

const RenderWrapper = (props: ComponentPropsWithoutRef<typeof Skeleton>) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading((currentIsLoading) => !currentIsLoading);
    }, 5000);
    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <div className="skeleton-wrapper-demo">
      <Skeleton {...props} isLoading={isLoading}>
        <div className="skeleton-wrapper-content">
          <p>Ceci est mon contenu à charger</p>
          <p>Ceci est mon contenu à charger</p>
          <p>mon contenu</p>
        </div>
      </Skeleton>
    </div>
  );
};

export const WrapperMode: StoryObj<typeof Skeleton> = {
  args: {
    grid: [[8], [8], [5]],
  },
  render: RenderWrapper,
};
