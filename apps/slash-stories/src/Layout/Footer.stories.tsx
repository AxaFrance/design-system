import { Footer } from "@axa-fr/canopee-react/distributeur";
import preview from "../../.storybook/preview";

const meta = preview.meta({
  title: "Components/Footer",
  component: Footer,
  parameters: {
    options: {},
  },
});
export default meta;

export const FooterStory = meta.story({
  name: "Default",
  render: ({ children, ...args }) => <Footer {...args}>{children}</Footer>,
});

export const FooterCoreStory = meta.story({
  name: "Core with HTML children",
  render: ({ ...args }) => (
    <Footer {...args}>
      <a href="https://www.axa.fr/" target="blank">
        <strong>@ {new Date().getFullYear()} AXA</strong>
      </a>
      <em>Tous droits réservés</em>
    </Footer>
  ),
});
