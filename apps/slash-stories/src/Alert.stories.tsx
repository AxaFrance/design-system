import { Alert } from "@axa-fr/design-system-slash-react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

const MODIFIERS = ["success", "info", "danger", "error"];

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  args: {
    onClose: fn(),
  },
};
export default meta;

export const Default: StoryObj<typeof Alert> = {
  args: {
    title: "Attention: Ceci est une alerte",
    closeButtonAriaLabel: "close",
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: { type: "select" },
    },
  },
};

export const DangerAlert: StoryObj<typeof Alert> = {
  args: {
    classModifier: "danger",
    title: "Attention: des informations sont manquantes",
    icon: "glyphicon glyphicon-alert",
    closeButtonAriaLabel: "close",
  },
};

export const InfoAlert: StoryObj<typeof Alert> = {
  args: {
    classModifier: "info",
    title: "Attention: des informations sont manquantes",
    icon: "glyphicon glyphicon-info-sign",
    closeButtonAriaLabel: "close",
  },
};

export const SuccessAlert: StoryObj<typeof Alert> = {
  args: {
    classModifier: "success",
    title: "Succès: votre demande a bien été enregistrée.",
    icon: "glyphicon glyphicon-ok",
    closeButtonAriaLabel: "close alert",
  },
};

export const ErrorAlert: StoryObj<typeof Alert> = {
  args: {
    classModifier: "error",
    title: "Erreur dans les champs suivants :",
    icon: "glyphicon glyphicon-minus-sign",
    closeButtonAriaLabel: "close",
    children: (
      <ul>
        <li>Le nom est obligatoire</li>
        <li>Le prénom est obligatoire</li>
        <li>L&apos;email est obligatoire</li>
        <li>Le format de date est invalide</li>
      </ul>
    ),
  },
};
