import { Pagination } from "@axa-fr/design-system-apollo-react/lf";
import type { Meta, StoryObj } from "@storybook/react";
import { type ComponentProps, useState } from "react";

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  title: "Components/Pagination",
  parameters: {
    layout: "centered",
  },
};
export default meta;

type StoryProps = Omit<ComponentProps<typeof Pagination>, "onChangePage"> & {
  defaultPage?: number;
};
type Story = StoryObj<typeof Pagination>;

const renderPagination = ({
  numberPages,
  currentPage: defaultPage,
  asItem,
  hidePrevNext,
}: StoryProps) => {
  const [currentPage, setCurrentPage] = useState<number>(defaultPage || 1);

  const handleChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Pagination
      numberPages={numberPages}
      onChangePage={handleChange}
      currentPage={currentPage}
      asItem={asItem}
      hidePrevNext={hidePrevNext}
    />
  );
};

export const Playground: Story = {
  render: renderPagination,
  args: {
    numberPages: 20,
    currentPage: 1,
    asItem: "a",
    hidePrevNext: false,
  },
};
