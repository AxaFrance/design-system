import { Footer } from "@axa-fr/canopee-react/distributeur";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    options: {},
  },
};
export default meta;

type StoryProps = Omit<React.ComponentProps<typeof Footer>, "children"> & {
  children: string;
};
type Story = StoryObj<StoryProps>;

export const FooterStory: Story = {
  name: "Default",
  render: ({ children, ...args }) => <Footer {...args}>{children}</Footer>,
};

export const FooterCoreStory: Story = {
  name: "Core with HTML children",
  render: ({ ...args }) => (
    <Footer {...args}>
      <a href="https://www.axa.fr/" target="blank">
        <strong>@ {new Date().getFullYear()} AXA</strong>
      </a>
      <em>Tous droits réservés</em>
    </Footer>
  ),
};
