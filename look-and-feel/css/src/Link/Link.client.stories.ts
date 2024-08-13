import type { Meta, StoryObj } from "@storybook/html";
import "./Link.client.scss";

const meta: Meta = {
  title: "Look-and-feel/Components/Link",
};

export default meta;

export const Default: StoryObj = {
  render: (args) => {
    const link = document.createElement("a");
    link.className = `af-link ${args.openInNewTab ? " af-link--openInNewTab" : ""}`;
    link.href = args.url;
    if (args.openInNewTab) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
    link.innerHTML = `${args.children}${args.openInNewTab ? '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="OpenInNewIcon"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"></path></svg>' : ""}`;
    return link;
  },
  args: {
    url: "https://fakelink.com",
    openInNewTab: true,
    children: "My link",
  },
};
