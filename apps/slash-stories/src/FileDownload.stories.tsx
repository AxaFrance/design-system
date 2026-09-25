import type { ComponentProps } from "react";
import { FileDownload } from "@axa-fr/canopee-react/distributeur";
import { fn } from "storybook/test";
import preview from "../.storybook/preview";

type StoryProps = ComponentProps<typeof FileDownload>;

const meta = preview.type<{ args: StoryProps }>().meta({
  component: FileDownload,
  title: "Components/FileDownload",
  args: {
    label: "Mon superbe document",
    fileName: "mon-superbe-document.pdf",
    status: "En cours",
    consultButtonLabel: "Consulter",
    downloadButtonLabel: "Télécharger",
    onConsult: fn(),
    onDownload: fn(),
  },
});

export default meta;

export const Playground = meta.story({});

export const WithoutDownload = meta.story({
  name: "Without actions",
  args: { onDownload: undefined },
});

export const WithoutConsult = meta.story({
  name: "Without consult",
  args: { onConsult: undefined },
});
