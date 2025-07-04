import { Paging, Table } from "@axa-fr/design-system-slash-react";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta: Meta<typeof Paging> = {
  component: Paging,
  title: "Components/Table",
  argTypes: { onChange: { action: "onChange" } },
  args: { onChange: fn() },
};

export default meta;

export const Simple: StoryObj<typeof Table> = {
  name: "Simple table",
  render: () => (
    <Table>
      <Table.THead>
        <Table.Tr>
          <Table.Th colSpan={3}>Some text</Table.Th>
        </Table.Tr>
        <Table.Tr>
          <Table.Th rowSpan={2}>Some text</Table.Th>
          <Table.Td>
            <strong>Some bold text</strong>
          </Table.Td>
          <Table.Td>Some text</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Some text</Table.Td>
          <Table.Td>Some text</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Some text</Table.Td>
          <Table.Td>Some text</Table.Td>
          <Table.Td>Some text</Table.Td>
        </Table.Tr>
      </Table.THead>
    </Table>
  ),
  args: {},
  argTypes: {},
};

export const WithPagination: StoryObj<typeof Paging> = {
  name: "Table with pagination",
  render: ({ currentPage, numberItems, numberPages, mode, ...args }) => (
    <>
      <Table>
        <Table.THead>
          <Table.Tr>
            <Table.Th colSpan={3}>Some text</Table.Th>
          </Table.Tr>
          <Table.Tr>
            <Table.Th rowSpan={2}>Some text</Table.Th>
            <Table.Td>
              <strong>Some bold text</strong>
            </Table.Td>
            <Table.Td>Some text</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Some text</Table.Td>
            <Table.Td>Some text</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Some text</Table.Td>
            <Table.Td>Some text</Table.Td>
            <Table.Td>Some text</Table.Td>
          </Table.Tr>
        </Table.THead>
      </Table>
      <Paging
        currentPage={currentPage}
        numberItems={numberItems}
        numberPages={numberPages}
        mode={mode}
        {...args}
      />
    </>
  ),
  args: {
    currentPage: 3,
    numberItems: 10,
    numberPages: 10,
    mode: "default",
    items: [5, 10, 50, 100],
    selectAriaLabel: "Select",
  },
  argTypes: {
    currentPage: { control: { type: "number" } },
    numberItems: { control: { type: "number" } },
    numberPages: { control: { type: "number" } },
    mode: { options: ["default", "light"], control: { type: "radio" } },
    onChange: { table: { disable: true } },
  },
};
