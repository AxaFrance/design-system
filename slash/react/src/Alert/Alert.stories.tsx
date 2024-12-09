import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Alert } from "./Alert";

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
  },
};

export const InfoAlert: StoryObj<typeof Alert> = {
  args: {
    classModifier: "info",
    title: "Attention: des informations sont manquantes",
    icon: "glyphicon glyphicon-info-sign",
  },
};

export const SuccessAlert: StoryObj<typeof Alert> = {
  args: {
    classModifier: "success",
    title: "Succès: votre demande a bien été enregistrée.",
    icon: "glyphicon glyphicon-ok",
  },
};

export const ErrorAlert: StoryObj<typeof Alert> = {
  args: {
    classModifier: "error",
    title: "Erreur dans les champs suivants :",
    icon: "glyphicon glyphicon-minus-sign",
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
