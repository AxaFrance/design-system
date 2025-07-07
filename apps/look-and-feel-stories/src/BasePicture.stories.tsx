import { BasePicture } from "@axa-fr/design-system-look-and-feel-react";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof BasePicture> = {
  title: "Components/BasePicture",
  component: BasePicture,
};

export default meta;

export const Default: StoryObj<typeof BasePicture> = {
  name: "BasePicture",
  render: (args) => (
    <div>
      <BasePicture {...args} />
    </div>
  ),
};

export const BasePictureWithPic: StoryObj<typeof BasePicture> = {
  name: "BasePicture with pic",
  render: (args) => (
    <div>
      <BasePicture {...args} />
    </div>
  ),
  args: {
    src: "https://picsum.photos/48",
    alt: "random image",
  },
};
