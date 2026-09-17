import {
  ButtonMultiActions,
  Link,
  Svg,
  Table,
  Tr,
  Th,
} from "@axa-fr/canopee-react/distributeur";
import type { ButtonMultiActionsProps } from "@axa-fr/canopee-react/distributeur";
import editIcon from "@material-symbols/svg-400/outlined/edit.svg";

import preview from "../.storybook/preview";

const menuContent = (
  <>
    <Link href="#" leftIcon={<Svg src={editIcon} />}>
      Modifier
    </Link>
    <Link href="#" leftIcon={<Svg src={editIcon} />}>
      Dupliquer
    </Link>
    <button type="button" className="af-slash-link" data-close-menu="true">
      Archiver
    </button>
  </>
);

const meta = preview.type<{ args: ButtonMultiActionsProps }>().meta({
  title: "Components/ButtonMultiActions",
  parameters: {
    layout: "centered",
  },
  args: {
    label: "Actions",
    menuLabel: "Actions supplementaires",
    align: "left",
    disabled: false,
    children: menuContent,
  },
  argTypes: {
    align: {
      options: ["left", "right"],
      control: { type: "inline-radio" },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
  tags: ["!autodocs"],
  render: ({ ...args }) => (
    <div style={{ minWidth: "240px", padding: "1rem" }}>
      <ButtonMultiActions {...args} />

      <Table>
        <thead>
          <Tr>
            <Th>Column 1</Th>
            <Th>Column 2</Th>
          </Tr>
        </thead>
      </Table>
    </div>
  ),
});

export default meta;

export const Playground = meta.story({
  args: {
    align: "left",
  },
});

export const AlignRight = meta.story({
  args: {
    align: "right",
  },
  render: ({ ...args }) => (
    <div style={{ minWidth: "240px", padding: "1rem" }}>
      <ButtonMultiActions {...args} />
    </div>
  ),
});
