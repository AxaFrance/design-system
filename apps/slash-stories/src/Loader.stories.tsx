import {
  ArticleRestitution,
  Footer,
  Header,
  HeaderRestitution,
  HeaderTitle,
  Loader,
  MainContainer,
  Name,
  Restitution,
  SectionRestitution,
  Title,
} from "@axa-fr/design-system-slash-react";
import type { Meta, StoryObj } from "@storybook/react";
import logo from "@axa-fr/design-system-slash-css/logo-axa.svg";

const meta: Meta<typeof Loader> = {
  component: Loader,
  title: "Components/Loader",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type StoryProps = React.ComponentProps<typeof Loader>;
type Story = StoryObj<StoryProps>;

export const Default: Story = {
  name: "Loader",
  render: ({ ...args }) => (
    <div style={{ height: "100vh" }}>
      <Loader {...args} />
    </div>
  ),
  args: {
    variant: "inline",
    text: "Recherche en cours",
  },
};

export const ContentVariant: Story = {
  name: "Loader avec variant content",
  render: () => (
    <>
      <Header>
        <Name title="Application AXA" img={logo} alt="Logo Axa" />
      </Header>
      <HeaderTitle title="Titre de la page" />
      <MainContainer>
        <Title>Contenu principal</Title>
        <ArticleRestitution>
          <HeaderRestitution title="Titre de l'article de restitution" />
          <SectionRestitution>
            <Restitution label="Contenu secondaire 1">
              Valeur Contenu secondaire 1
            </Restitution>
            <Restitution label="Contenu secondaire 2">
              Valeur Contenu secondaire 2
            </Restitution>
            <Restitution label="Contenu secondaire 3">
              Valeur Contenu secondaire 3
            </Restitution>
          </SectionRestitution>
        </ArticleRestitution>

        <Title>Contenu secondaire en cours de chargement</Title>
        <Loader variant="content" text="Recherche en cours" />
      </MainContainer>
      <Footer>{`© ${new Date().getFullYear()} Tous droits réservés`}</Footer>
    </>
  ),
};

export const FullScreenVariant: Story = {
  name: "Loader avec variant fullScreen",
  render: () => (
    <>
      <Header>
        <Name title="Application AXA" img={logo} alt="Logo Axa" />
      </Header>
      <HeaderTitle title="Titre de la page" />
      <MainContainer>
        <Loader variant="content" text="Recherche en cours" />
      </MainContainer>
      <Footer>{`© ${new Date().getFullYear()} Tous droits réservés`}</Footer>
    </>
  ),
};
