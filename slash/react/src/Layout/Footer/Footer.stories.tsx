import type { Meta, StoryObj } from "@storybook/react";
import { type ComponentProps } from "react";
import { Footer } from "./Footer";

const meta: Meta<typeof Footer> = {
  title: "Components/✅ Footer",
  component: Footer,
  parameters: {
    options: {},
  },
};
export default meta;

type StoryProps = Omit<ComponentProps<typeof Footer>, "children"> & {
  children: string;
};
type Story = StoryObj<StoryProps>;

export const FooterStory: Story = {
  name: "Default",
  render: ({ children, ...args }) => <Footer {...args}>{children}</Footer>,
  args: {
    version: "0.0.0",
  },
  parameters: {
    layout: "fullscreen",
  },
};

// export const FooterCoreStory: Story = {
//   name: "Core with HTML children",
//   render: () => (
//     <Footer>
//       <a href="https://www.axa.fr/" target="blank">
//         <strong>@ {new Date().getFullYear()} AXA</strong>
//       </a>
//       <em>Tous droits réservés</em>
//     </Footer>
//   ),
// };
