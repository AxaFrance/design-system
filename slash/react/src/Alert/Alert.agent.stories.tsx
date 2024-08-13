import { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert.agent";

const MODIFIERS = ["success", "info", "danger", "error"];

const meta: Meta<typeof Alert> = {
  title: "Slash/Components/Alert",
  component: Alert,
};
export default meta;

export const Default: StoryObj<typeof Alert> = {
  name: "Default",
  args: {
    classModifier: "danger",
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
  name: "Danger Alert",
  args: {
    classModifier: "danger",
    title: "Attention: des informations sont manquantes",
    iconClassName: "glyphicon glyphicon-alert",
  },
};

export const InfoAlert: StoryObj<typeof Alert> = {
  name: "Info Alert",
  args: {
    classModifier: "info",
    title: "Attention: des informations sont manquantes",
    iconClassName: "glyphicon glyphicon-info-sign",
  },
};

export const SuccessAlert: StoryObj<typeof Alert> = {
  name: "Success Alert",
  args: {
    classModifier: "success",
    title: "Succès: votre demande a bien été enregistrée.",
    iconClassName: "glyphicon glyphicon-ok",
  },
};

export const ErrorAlert: StoryObj<typeof Alert> = {
  name: "Error Alert",
  args: {
    classModifier: "error",
    title: "Erreur dans les champs suivants :",
    iconClassName: "glyphicon glyphicon-minus-sign",
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
