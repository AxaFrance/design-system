import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Alert } from "../Alert/Alert";

type SummaryProps = Omit<ComponentPropsWithoutRef<typeof Alert>, "title"> & {
  title?: string;
  messages?: ReactNode[];
  isVisible?: boolean;
};

export const Summary = ({
  messages = [],
  isVisible = true,
  title = "Invalid form",
  classModifier = "error",
  ...args
}: SummaryProps) => {
  const messagesNotBlank = messages.filter((message) => Boolean(message));
  if (!messages || !isVisible || messagesNotBlank.length === 0) {
    return null;
  }

  return (
    <Alert
      icon="glyphicon glyphicon-warning-sign"
      title={title}
      classModifier={classModifier}
      {...args}
    >
      <ul className="af-summary__message-list">
        {messages.map((message) => (
          <li className="af-summary__message-item" key={`message_${message}`}>
            {message}
          </li>
        ))}
      </ul>
    </Alert>
  );
};
