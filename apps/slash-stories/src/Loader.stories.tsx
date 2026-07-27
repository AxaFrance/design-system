import {
  Button,
  Loader,
  SquareLoader,
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

export const InlineVariant = meta.story({
  name: "Loader - variant inline",
  render: ({ ...args }) => <Loader {...args} />,
  args: {
    variant: "inline",
    text: "Recherche en cours",
  },
});

export const ContentVariant = meta.story({
  name: "Loader - variant content",
  render: () => (
    <div>
      <Title>Contenu secondaire en cours de chargement</Title>
      <Loader variant="content" text="Recherche en cours" />
    </div>
  ),
});

export const FullScreenVariant = meta.story({
  name: "Loader - variant fullscreen",
  render: () => (
    <Loader variant="fullscreen" text="Recherche en cours">
      <form>
        <Title>A form asking for your name</Title>
        <TextInput
          label="name"
          message="error"
          messageType={MessageTypes.error}
        />
        <Button>Send</Button>
      </form>
    </Loader>
  ),
});

export const SquareLoaderComponent = meta.story({
  name: "SquareLoader (deprecated)",
  render: () => (
    <SquareLoader mode="get">
      <form>
        <Title>A form asking for your name</Title>
        <TextInput
          label="name"
          message="error"
          messageType={MessageTypes.error}
        />
        <Button>Send</Button>
      </form>
    </SquareLoader>
  ),
});
