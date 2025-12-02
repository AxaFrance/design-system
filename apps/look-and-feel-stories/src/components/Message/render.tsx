import { type Args } from "storybook/internal/types";
import {
  Button,
  Link,
  Message,
  messageVariants,
} from "@axa-fr/canopee-react/client";

export const renderMessageAll = () => (
  <div className="af-message-demo">
    {Object.values(messageVariants).map((variant) => (
      <Message
        key={variant}
        variant={variant}
        title={`Title for ${variant} with Button`}
        action={<Button variant="ghost">Call to action</Button>}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt non,
        praesentium inventore dolor in saepe harum ad ducimus sapiente tenetur,
        deleniti fugit provident necessitatibus? Vero reiciendis doloremque eos
        nemo cum.
      </Message>
    ))}
    {Object.values(messageVariants).map((variant) => (
      <Message
        key={variant}
        variant={variant}
        title={`Title for ${variant} with Link`}
        action={
          <Link href="https://www.axa.fr" openInNewTab>
            Axa.fr
          </Link>
        }
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt non,
        praesentium inventore dolor in saepe harum ad ducimus sapiente tenetur,
        deleniti fugit provident necessitatibus? Vero reiciendis doloremque eos
        nemo cum.
      </Message>
    ))}
  </div>
);

export const renderMessage = ({ variant, onClick, ...args }: Args) => (
  <Message variant={variant} onClick={onClick} {...args} title="Title message">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt non,
    praesentium inventore dolor in saepe harum ad ducimus sapiente tenetur,
    deleniti fugit provident necessitatibus? Vero reiciendis doloremque eos nemo
    cum.
  </Message>
);
