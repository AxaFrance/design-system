import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "./Pagination.client";

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  title: "Look-and-feel/Components/Pagination",
  parameters: {
    layout: "centered",
  },
};
export default meta;

type StoryProps = Omit<
  React.ComponentProps<typeof Pagination>,
  "numberPage"
> & {
  numberPage: number;
  onChangePage: (page: number) => void;
  defaultPage?: number;
};
type Story = StoryObj<StoryProps>;

export const Playground: Story = {
  name: "Pagination",
  render: ({ numberPage, onChangePage, defaultPage }) => (
    <Pagination
      numberPage={numberPage}
      defaultPage={defaultPage}
      onChangePage={onChangePage}
    />
  ),
  args: {
    numberPage: 20,
    defaultPage: 2,
    onChangePage: () => {},
  },
};
