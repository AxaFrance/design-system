import { CardButton } from "@axa-fr/canopee-react/distributeur";
import preview from "../.storybook/preview";

const SampleIcon = (
  <svg
    width="32"
    height="48"
    viewBox="0 0 32 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.2264 0C20.6432 0 20.9811 0.337898 20.9811 0.754717V11.6981L31.5472 19.6981C31.7372 19.8406 31.8491 20.0643 31.8491 20.3019V47.2453C31.8491 47.6621 31.5112 48 31.0943 48H0.754717C0.337898 48 0 47.6621 0 47.2453V0.754717C0 0.337898 0.337898 0 0.754717 0H20.2264ZM30.3396 40.9057H20.9811V46.4906H30.3396V40.9057ZM12.5283 37.8113H8.37736V46.4906H12.5283V37.8113ZM19.4717 1.50943H1.50943V46.4906H6.86792V37.8113H5.50943C5.09262 37.8113 4.75472 37.4734 4.75472 37.0566C4.75472 36.6398 5.09262 36.3019 5.50943 36.3019H15.3962C15.813 36.3019 16.1509 36.6398 16.1509 37.0566C16.1509 37.4734 15.813 37.8113 15.3962 37.8113H14.0377V46.4906H19.4717V1.50943ZM20.9811 13.5925V39.3962H30.3396V20.6792L20.9811 13.5925ZM25.6604 32.9057C26.7024 32.9057 27.5472 33.7504 27.5472 34.7925C27.5472 35.8345 26.7024 36.6792 25.6604 36.6792C24.6183 36.6792 23.7736 35.8345 23.7736 34.7925C23.7736 33.7504 24.6183 32.9057 25.6604 32.9057ZM25.6604 34.4151C25.452 34.4151 25.283 34.584 25.283 34.7925C25.283 35.0009 25.452 35.1698 25.6604 35.1698C25.8688 35.1698 26.0377 35.0009 26.0377 34.7925C26.0377 34.584 25.8688 34.4151 25.6604 34.4151ZM25.6604 27.2453C26.7024 27.2453 27.5472 28.09 27.5472 29.1321C27.5472 30.1741 26.7024 31.0189 25.6604 31.0189C24.6183 31.0189 23.7736 30.1741 23.7736 29.1321C23.7736 28.09 24.6183 27.2453 25.6604 27.2453ZM5.21132 25.5103C6.44927 25.5103 7.45771 26.5046 7.47524 27.7424C7.49278 28.9802 6.51292 30.0027 5.27547 30.0377H5.14717C3.90972 30.0027 2.92986 28.9802 2.9474 27.7424C2.96494 26.5046 3.97337 25.5103 5.21132 25.5103ZM10.4906 25.5094C11.741 25.5094 12.7547 26.5231 12.7547 27.7736C12.7547 29.024 11.741 30.0377 10.4906 30.0377C9.24011 30.0377 8.22642 29.024 8.22642 27.7736C8.22642 26.5231 9.24011 25.5094 10.4906 25.5094ZM15.6226 25.5094C16.8731 25.5094 17.8868 26.5231 17.8868 27.7736C17.8868 29.024 16.8731 30.0377 15.6226 30.0377C14.3722 30.0377 13.3585 29.024 13.3585 27.7736C13.3585 26.5231 14.3722 25.5094 15.6226 25.5094ZM25.6604 28.7547C25.452 28.7547 25.283 28.9236 25.283 29.1321C25.283 29.3405 25.452 29.5094 25.6604 29.5094C25.8688 29.5094 26.0377 29.3405 26.0377 29.1321C26.0377 28.9236 25.8688 28.7547 25.6604 28.7547Z" />
  </svg>
);

const meta = preview.meta({
  title: "Components/CardButton",
  component: CardButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: { type: "select" },
    },
    component: {
      options: ["button", "label"],
      control: { type: "select" },
    },
  },
});
export default meta;

export const Default = meta.story({
  name: "CardButton",
  args: {
    icon: SampleIcon,
    children: "Card Button",
    component: "button",
    orientation: "horizontal",
  },
});

export const WithoutIcon = meta.story({
  name: "CardButton without Icon",
  args: {
    ...Default.input.args,
    icon: null,
  },
});

export const Vertical = meta.story({
  name: "CardButton Vertical",
  args: {
    ...Default.input.args,
    orientation: "vertical",
  },
});

export const VerticalWithoutIcon = meta.story({
  name: "CardButton Vertical without Icon",
  args: {
    ...Vertical.input.args,
    icon: null,
  },
});

export const AsLabel = meta.story({
  name: "CardButton as Label",
  args: {
    ...Default.input.args,
    component: "label",
    htmlFor: "example",
  },
});

export const AsLabelVertical = meta.story({
  name: "CardButton as Label Vertical",
  args: {
    ...AsLabel.input.args,
    orientation: "vertical",
  },
});
