import { Button, MainContainer } from "@axa-fr/canopee-react/distributeur";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MainContainer> = {
  title: "Components/MainContainer",
  component: MainContainer,
};
export default meta;

type StoryProps = Omit<
  React.ComponentProps<typeof MainContainer>,
  "children"
> & {
  children: string;
};
type Story = StoryObj<StoryProps>;

export const MainContainerStory: Story = {
  name: "Default",
  render: () => (
    <MainContainer>
      <Button>Button</Button>
    </MainContainer>
  ),
};
