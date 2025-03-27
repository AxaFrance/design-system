import { Link } from "@axa-fr/design-system-apollo-react";
import { type Args } from "storybook/internal/types";

const LinkBlock = () => (
  <div>
    <Link href="https://example.com" />
  </div>
);

export const renderLinkAll = () => (
  <div className="af-link-demo">
    <LinkBlock />
  </div>
);

export const renderLink = ({
  href,
  openInNewTab,
  leftIcon,
  rightIcon,
  className,
  classModifier,
  ...args
}: Args) => (
  <Link
    href={href}
    openInNewTab={openInNewTab}
    leftIcon={leftIcon}
    rightIcon={rightIcon}
    className={className}
    classModifier={classModifier}
    {...args}
  />
);
