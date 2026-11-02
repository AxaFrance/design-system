import { Link, Icon, buttonVariants } from "@axa-fr/canopee-react/prospect";
import arrowLeftAlt from "@material-symbols/svg-400/outlined/arrow_left_alt.svg";
import personFill from "@material-symbols/svg-400/rounded/person-fill.svg";
import { Meta, StoryObj } from "@storybook/react";
import "../Button/Button.story.scss";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
};
export default meta;

export const Playground: StoryObj<typeof Link> = {
  args: {
    href: "https://fakelink.com",
    children: "My link",
  },
};

export const LinkInverse: StoryObj<typeof Link> = {
  args: {
    href: "https://fakelink.com",
    children: "My link",
    variant: "inverse",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "var(--rem-16)",
          backgroundColor: "var(--blue-1000)",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const LinkOpenInNewTab: StoryObj<typeof Link> = {
  args: {
    href: "https://fakelink.com",
    children: "My link",
    openInNewTab: true,
    rightIcon: <Icon src={personFill} />,
  },
};

export const LinkWithIcons: StoryObj<typeof Link> = {
  args: {
    href: "https://fakelink.com",
    children: "My link",
    leftIcon: <Icon src={arrowLeftAlt} />,
    rightIcon: <Icon src={personFill} />,
  },
};

export const LinkButtonStory: StoryObj<typeof Link> = {
  name: "Link button",
  render: ({ href, children }) => (
    <div className="af-btn-client-demo">
      {Object.values(buttonVariants).map((variant) => {
        const linkVariant = `button-${variant}` as const;
        return (
          <div key={variant} className="af-btn-client-demo-variant">
            <div
              className={[
                "af-btn-client-demo__bloc",
                variant.includes("inverse")
                  ? "af-btn-client-demo__bloc--blue"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <h2 className="af-title">{variant}</h2>
              <Link href={href} variant={linkVariant}>
                {children} {variant}
              </Link>
              <Link variant={linkVariant} role="link" aria-disabled="true">
                {children} {variant}
              </Link>
              <Link
                href={href}
                variant={linkVariant}
                leftIcon={<Icon src={arrowLeftAlt} />}
              >
                {children} {variant}
              </Link>
              <Link
                href={href}
                variant={linkVariant}
                rightIcon={<Icon src={personFill} />}
              >
                {children} {variant}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  ),
  args: {
    href: "https://fakelink.com",
    children: "LinkButton",
  },
};
