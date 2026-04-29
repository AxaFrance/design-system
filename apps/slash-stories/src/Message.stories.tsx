import { Message } from "@axa-fr/canopee-react/distributeur";
import { InputType } from "storybook/internal/types";
import { fn } from "storybook/test";
import preview from "../.storybook/preview";

const MODIFIERS = [undefined, "success", "info", "warning", "error"];

const variantInputType: InputType = {
  options: MODIFIERS,
  control: {
    type: "inline-radio",
  },
  table: {
    type: {
      summary: "string",
    },
    category: "Style",
  },
  description:
    "Variant of the message. Used to determine the icon and style of the message.",
};

const meta = preview.meta({
  title: "Components/Message",
  component: Message,
  args: {
    onClose: fn(),
  },
  argTypes: {
    classModifier: variantInputType,
    variant: variantInputType,
    onClose: {
      action: "close",
      description: "Function called when the close button is clicked.",
      table: {
        category: "Events",
      },
    },
    closeButtonAriaLabel: {
      control: { type: "text" },
      description: "Aria label for the close button.",
      table: {
        category: "Accessibility",
      },
    },
    title: {
      control: { type: "text" },
      description: "Title of the message.",
      table: {
        category: "Content",
        type: {
          summary: "ReactNode",
        },
      },
    },
    children: {
      control: { type: "text" },
      table: {
        category: "Content",
        type: {
          summary: "ReactNode",
        },
      },
      description: "Content of the message.",
    },
  },
});

export const Default = meta.story({
  args: {
    title: "Error: some fields are invalid",
    closeButtonAriaLabel: "close message",
    children: (
      <ul>
        <li>
          Last name is <strong>required</strong>
        </li>
        <li>
          First name is <strong>required</strong>
        </li>
        <li>
          Email is <strong>required</strong>
        </li>
        <li>
          Date format is <strong>invalid</strong>
        </li>
      </ul>
    ),
  },
  argTypes: {
    classModifier: variantInputType,
    variant: variantInputType,
    title: {
      type: "string",
    },
  },
});

export const WarningMessage = meta.story({
  args: {
    variant: "warning",
    title: "Attention: des informations sont manquantes",
    closeButtonAriaLabel: "close",
  },
});

export const InfoMessage = meta.story({
  args: {
    variant: "info",
    title: "Attention: des informations sont manquantes",
    closeButtonAriaLabel: "close",
  },
});

export const SuccessMessage = meta.story({
  args: {
    variant: "success",
    title: "Succès: votre demande a bien été enregistrée.",
    closeButtonAriaLabel: "close alert",
  },
});

export const ErrorMessage = meta.story({
  args: {
    variant: "error",
    title: "Erreur dans les champs suivants :",
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
});
