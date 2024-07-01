import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Alert } from "../agent";

type SummaryProps = Omit<ComponentPropsWithoutRef<typeof Alert>, "title"> & {
  title?: string;
  messages?: ReactNode[];
  isVisible?: boolean;
};

export const Summary = ({
  messages = [],
  isVisible = true,
  title = "Invalid form",
  ...args
}: SummaryProps) => {
  if (!messages || !isVisible) {
    return null;
  }

  const messagesNotBlank = messages.filter((message) => Boolean(message));
  if (!messagesNotBlank.length) {
    return null;
  }

  return (
    <Alert
      iconClassName="glyphicon glyphicon-warning-sign"
      title={title}
      classModifier="error"
      {...args}
    >
      <ul className="af-summary__message-list">
        {messages.map((message) => {
          return (
            <li className="af-summary__message-item" key={`message_${message}`}>
              {message}
            </li>
          );
        })}
      </ul>
    </Alert>
  );
};
