import { ReactNode } from "react";
import { Message, type MessageProps } from "../Messages/Message";
import { generateId } from "../utilities/helpers/generateId";

type SummaryProps = Omit<MessageProps, "title"> & {
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

  const variant = classModifier === "danger" ? "warning" : classModifier;

  return (
    <Message
      icon="glyphicon glyphicon-warning-sign"
      title={title}
      variant={variant}
      {...args}
    >
      <ul className="af-summary__message-list">
        {messages.map((message) => (
          <li
            className="af-summary__message-item"
            key={`message_${generateId({ message })}`}
          >
            {message}
          </li>
        ))}
      </ul>
    </Message>
  );
};
