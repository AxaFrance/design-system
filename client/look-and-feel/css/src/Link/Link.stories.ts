import type { Args, Meta, StoryObj } from "@storybook/html";
import "./Link.scss";

const meta: Meta = {
  title: "Components/Link",
};

export default meta;

const render = (args: Args) => {
  const link = document.createElement("a");
  link.className = `af-link ${
    args.openInNewTab ? " af-link--openInNewTab" : ""
  }`;
  link.href = args.url;
  if (args.openInNewTab) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }

  if (args.leftIcon) {
    link.innerHTML = args.leftIcon;
  }

  link.innerHTML += args.children;

  if (args.openInNewTab || args.rightIcon) {
    link.innerHTML +=
      args.rightIcon ??
      `<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="OpenInNewIcon">
        <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"></path>
      </svg>`;
  }

  return link;
};

export const Default: StoryObj = {
  render,
  args: {
    url: "https://fakelink.com",
    children: "My link",
    openInNewTab: true,
    leftIcon: undefined,
    rightIcon: undefined,
  },
};

export const LinkWithCustomIcons: StoryObj = {
  render,
  args: {
    url: "https://fakelink.com",
    children: "My link",
    openInNewTab: true,
    leftIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960">
                <path d="m275-450 147 147q9 9 8.5 21t-9.5 21q-9 9-21 9t-21-9L181-459q-9-9-9-21t9-21l199-199q9-9 21-9t21 9q9 9 9 21.5t-9 21.5L275-510h496q13 0 21.5 8.5T801-480q0 13-8.5 21.5T771-450H275Z"/>
              </svg>`,
    rightIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960">
                  <path d="M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160-220v-34q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5T731-360q31 14 50 41t19 65v34q0 25-17.5 42.5T740-160H220q-25 0-42.5-17.5T160-220Z"/>
                </svg>`,
  },
};
