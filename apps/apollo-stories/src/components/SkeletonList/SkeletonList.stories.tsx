import { SkeletonList } from "@axa-fr/canopee-react/prospect";
import { Meta, StoryObj } from "@storybook/react";
import { SkeletonListPage } from "./SkeletonListPage";
import "./SkeletonList.stories.scss?inline";

const meta: Meta<typeof SkeletonList> = {
  title: "Components/SkeletonList",
  component: SkeletonList,
};

export default meta;

export const Default: StoryObj<typeof SkeletonList> = {
  args: {
    lists: [
      {
        grid: [
          [
            { colSize: 3, size: "XS" },
            { colSize: 9, size: "XS" },
          ],
        ],
        lines: 10,
      },
      {
        grid: [
          [
            { colSize: 3, size: "XS" },
            { colSize: 9, size: "XS" },
          ],
        ],
        lines: 3,
      },
      {
        grid: [
          [{ colSize: 6, size: "XS" }],
          [{ colSize: 12, size: "XS" }],
          [{ colSize: 12, size: "XS" }],
          [{ colSize: 12, size: "XS" }],
        ],
      },
    ],
    isLoading: true,
  },
  render: SkeletonListPage,
};
