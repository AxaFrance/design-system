import { Link, Svg } from "@axa-fr/canopee-react/distributeur";
import editIcons from "@material-symbols/svg-400/outlined/edit.svg";
import saveIcons from "@material-symbols/svg-400/outlined/save.svg";
import preview from "../.storybook/preview";

const CssIcons = {
  "(none)": "none",
  "/public/save.svg": saveIcons,
  "/public/edit.svg": editIcons,
} as const;

type AnchorStoryType = {
  leftIcon: keyof typeof CssIcons;
  rightIcon: keyof typeof CssIcons;
  disabled: boolean;
  children: string;
  href: string;
  className?: string;
  variant?: "default" | "reverse";
};

const meta = preview.type<{ args: AnchorStoryType }>().meta({
  title: "Components/Link",
});

export const LinkAsAnchorStory = meta.story({
  name: "Link",
  render: ({ rightIcon, leftIcon, variant, ...args }) => {
    const getIcon = (type: keyof typeof CssIcons) => {
      if (type === "/public/save.svg") {
        return <Svg src={saveIcons} />;
      }
      if (type === "/public/edit.svg") {
        return <Svg src={editIcons} />;
      }
      return undefined;
    };

    const leftIconProps = getIcon(leftIcon);
    const rightIconProps = getIcon(rightIcon);

    const backgroundColor = variant === "reverse" ? "#00008f" : "#ffffff";

    return (
      <div
        style={{
          maxWidth: "150px",
          height: "50px",
          padding: "10px",
          backgroundColor,
        }}
      >
        <Link
          {...args}
          target="_blank"
          leftIcon={leftIconProps}
          rightIcon={rightIconProps}
          variant={variant}
        />
      </div>
    );
  },
  args: {
    href: "https://www.axa.fr",
    children: "axa.fr",
    leftIcon: "(none)",
    rightIcon: "(none)",
    disabled: false,
    variant: "default",
  },
  argTypes: {
    leftIcon: {
      options: Object.keys(CssIcons),
      control: { type: "select" },
    },
    rightIcon: {
      options: Object.keys(CssIcons),
      control: { type: "select" },
    },
    className: {
      table: {
        disable: true,
      },
    },
    variant: {
      options: ["default", "reverse"],
      control: { type: "radio" },
      description: "Use 'reverse' to change the color of the link",
    },
  },
});

export const CustomLinkStory = meta.story({
  name: "Custom Link, using a button",
  render: () => (
    <Link
      render={({ className }) => (
        <button
          type="button"
          className={className}
          // eslint-disable-next-line no-alert
          onClick={() => alert("Button clicked!")}
        >
          This link is actually a button 🤯
        </button>
      )}
    />
  ),
  args: {},
  argTypes: {},
});
