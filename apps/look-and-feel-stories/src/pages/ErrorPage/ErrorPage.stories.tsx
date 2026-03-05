/* eslint-disable react/no-multi-comp */
import type { Meta, StoryObj } from "@storybook/react";
import { ErrorPage, Icon } from "@axa-fr/canopee-react/client";
import arrowLeftAlt from "@material-symbols/svg-400/outlined/arrow_left_alt.svg";
import type { ComponentProps } from "react";
import { LayoutDemo } from "../../layouts/LayoutDemo/LayoutDemo";

const meta: Meta = {
  title: "Pages/Error Page",
  parameters: { layout: "fullscreen" },
};

export default meta;

type StoryProps = ComponentProps<typeof ErrorPage>;

const Content = () => (
  <>
    <p>Une erreur technique est survenue et nous nous en excusons.</p>
    <p>
      Nous vous invitons à vous rapprocher d&apos;un conseiller AXA, qui vous
      recontactera rapidement pour vous proposer un devis.
    </p>
  </>
);

const Demo = ({ headingProps, linkProps, children }: StoryProps) => (
  <LayoutDemo title="Error Page Title">
    <ErrorPage headingProps={headingProps} linkProps={linkProps}>
      {children}
    </ErrorPage>
  </LayoutDemo>
);

export const Playground: StoryObj<StoryProps> = {
  render: Demo,
  args: {
    headingProps: {
      title: "Désolé, notre service est momentanément indisponible",
    },
    linkProps: {
      href: "/",
      children: "Trouver un conseiller",
    },
    children: <Content />,
  },
};

const Content404 = () => (
  <>
    <p>La page que vous recherchez est introuvable.</p>
    <p>
      Nous vous invitons à vous rapprocher d&apos;un conseiller AXA, qui vous
      recontactera rapidement pour vous proposer un devis.
    </p>
  </>
);

export const Erreur404: StoryObj<StoryProps> = {
  render: Demo,
  args: {
    headingProps: {
      title: "Page introuvable",
      tag: "Erreur 404",
      tagProps: {
        variant: "error",
      },
    },
    linkProps: {
      href: "/",
      children: "Revenir à l'accueil",
      leftIcon: <Icon src={arrowLeftAlt} />,
    },
    children: <Content404 />,
  },
};
