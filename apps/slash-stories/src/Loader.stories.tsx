import {
  Button,
  Loader,
  MessageTypes,
  TextInput,
  Title,
} from "@axa-fr/canopee-react/distributeur";
import preview from "../.storybook/preview";

const meta = preview.meta({
  component: Loader,
  title: "Components/Loader",
  parameters: {
    layout: "fullscreen",
  },
});
export default meta;

export const Default = meta.story({
  name: "Loader",
  render: ({ children: text, ...args }) => <Loader {...args}>{text}</Loader>,
  args: {
    mode: "get",
    text: "",
    children: (
      <form style={{ height: "100vh", padding: "3rem" }}>
        <Title>A form asking for your name</Title>
        <TextInput
          label="name"
          message="error"
          messageType={MessageTypes.error}
        />
        <Button>Send</Button>
      </form>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
});
