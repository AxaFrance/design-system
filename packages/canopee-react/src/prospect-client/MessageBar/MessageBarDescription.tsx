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

  if (typeof description === "string") {
    return <p className="af-message-bar__body">{description}</p>;
  }

  return <div className="af-message-bar__body">{description}</div>;
};
