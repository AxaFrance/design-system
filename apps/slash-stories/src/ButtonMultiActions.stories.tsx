import {
  ButtonMultiActions,
  Link,
  Svg,
} from "@axa-fr/canopee-react/distributeur";
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

const meta = preview.meta({
  title: "Components/ButtonMultiActions",
  component: ButtonMultiActions,
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
});

export default meta;

export const Playground = meta.story({
  args: {
    children: menuContent,
  },
  render: ({ ...args }) => (
    <div style={{ minWidth: "240px", padding: "1rem" }}>
      <ButtonMultiActions {...args} />
    </div>
  ),
});

export const AlignRight = meta.story({
  args: {
    ...Playground.input.args,
    align: "right",
  },
  render: Playground.input.render,
});
