import type { ReactNode } from "react";

type MessageBarDescriptionProps = {
  description?: ReactNode;
};

export const MessageBarDescription = ({
  description,
}: MessageBarDescriptionProps) => {
  if (!description) {
    return null;
  }

  const Component = typeof description === "string" ? "p" : "div";

  return <Component className="af-message-bar__body">{description}</Component>;
};
