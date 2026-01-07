import { SkeletonList } from "@axa-fr/canopee-react/client";
import { Meta, StoryObj } from "@storybook/react";
import { SkeletonListPage } from "./SkeletonListPage";
import "./SkeletonList.stories.scss?inline";

const meta: Meta<typeof SkeletonList> = {
  title: "Components/Skeleton/SkeletonList",
  component: SkeletonList,
};

export default meta;

export const Default: StoryObj<typeof SkeletonList> = {
  args: {
    lists: [
      { grid: [[3, 9]], lines: 10 },
      { grid: [[3, 9]], lines: 3 },
      { grid: [[6], [12], [12], [12]] },
    ],
    isLoading: true,
  },
  render: SkeletonListPage,
};
