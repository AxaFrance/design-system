import { type Args } from "storybook/internal/types";
import {
  Button,
  Link,
  MessageBar,
  messageBarVariants,
} from "@axa-fr/canopee-react/prospect";

export const renderMessageBarAll = () => (
  <div className="af-message-demo">
    {Object.values(messageBarVariants).map((variant) => (
      <MessageBar
        key={variant}
        variant={variant}
        title={`Title for ${variant} with Button`}
        action={<Button variant="ghost">Call to action</Button>}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt non,
        praesentium inventore dolor in saepe harum ad ducimus sapiente tenetur,
        deleniti fugit provident necessitatibus? Vero reiciendis doloremque eos
        nemo cum.
      </MessageBar>
    ))}
    {Object.values(messageBarVariants).map((variant) => (
      <MessageBar
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
      </MessageBar>
    ))}
  </div>
);

export const renderMessageBar = ({ variant, onClick, ...args }: Args) => (
  <MessageBar
    variant={variant}
    onClick={onClick}
    {...args}
    title="Title message"
  >
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt non,
    praesentium inventore dolor in saepe harum ad ducimus sapiente tenetur,
    deleniti fugit provident necessitatibus? Vero reiciendis doloremque eos nemo
    cum.
  </MessageBar>
);
