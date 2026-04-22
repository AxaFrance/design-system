import { Button, MainContainer } from "@axa-fr/canopee-react/distributeur";
import preview from "../../../.storybook/preview";

const meta = preview.meta({
  title: "Components/MainContainer",
  component: MainContainer,
});

export default meta;

export const MainContainerStory = meta.story({
  name: "Default",
  render: () => (
    <MainContainer>
      <Button>Button</Button>
    </MainContainer>
  ),
});
