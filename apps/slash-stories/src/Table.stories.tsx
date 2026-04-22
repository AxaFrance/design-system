import { Paging, Table } from "@axa-fr/canopee-react/distributeur";
import { fn } from "storybook/test";
import preview from "../.storybook/preview";

const meta = preview.meta({
  component: Paging,
  title: "Components/Table",
  argTypes: { onChange: { action: "onChange" } },
  args: { onChange: fn() },
});

export const Simple = meta.story({
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
});

export const WithPagination = meta.story({
  name: "Table with pagination",
  render: ({
    currentPage,
    numberItems,
    numberPages,
    mode,
    elementsLabel,
    selectPageSizeLabel,
    ...args
  }) => (
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
        elementsLabel={elementsLabel}
        selectPageSizeLabel={selectPageSizeLabel}
        {...args}
      />
    </>
  ),
  args: {
    currentPage: 3,
    numberItems: 1000,
    numberPages: 10,
    mode: "default",
    elementsLabel: "sinistres",
    items: [5, 10, 50, 100],
    selectAriaLabel: "Select",
  },
  argTypes: {
    currentPage: {
      control: { type: "number" },
      description: "Numéro de page actuelle",
    },
    numberItems: {
      control: { type: "number" },
      description: "Nombre d'élément à afficher",
    },
    numberPages: {
      control: { type: "number" },
      description: "Nombre de pages",
    },
    mode: {
      options: ["default", "light"],
      control: { type: "radio" },
      description: "Choix du mode d'affichage",
    },
    elementsLabel: {
      type: "string",
      description:
        "Label utilisé dans les liens vers les page. Doit représenter ce que contient le tableau associé",
    },
    selectPageSizeLabel: {
      description:
        "Label du select pour choisir le nombre d'éléments à afficher",
      control: { type: "text" },
      type: "string",
    },
    items: {
      description:
        "Les différentes options de choix pour le nombre d'élément à afficher",
    },
    onChange: { table: { disable: true } },
  },
});
