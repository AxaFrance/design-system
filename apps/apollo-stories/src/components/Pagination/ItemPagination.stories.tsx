import { ItemPagination } from "@axa-fr/design-system-apollo-react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ItemPagination> = {
  component: ItemPagination,
  title: "Components/Pagination/ItemPagination",
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof ItemPagination>;

export const Playground: Story = {
  render: (args) => <ItemPagination {...args} />,
  args: {
    page: 20,
    isCurrentPage: true,
    href: "/page/1",
    as: "a",
    "aria-label": "Page 20",
  },
};

export const Ellipsis: Story = {
  render: (args) => <ItemPagination {...args} />,
  args: {
    page: "...",
  },
};
