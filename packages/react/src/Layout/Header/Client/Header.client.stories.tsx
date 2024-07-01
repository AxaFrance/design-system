import type { Meta, StoryObj } from "@storybook/react";
import { HeaderClient } from "./Header.client";
import "./Header.client.stories.css";

const meta: Meta<typeof HeaderClient> = {
  component: HeaderClient,
  title: "Client/Components/Header",
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof HeaderClient>>;

export const Playground: Story = {
  name: "Header",
  render: ({ rightItem }) => <HeaderClient rightItem={rightItem} />,
};

export const HeaderWithLinks: StoryObj<typeof HeaderClient> = {
  name: "Header with links",
  render: ({ children }) => <HeaderClient>{children}</HeaderClient>,
  args: {
    children: [
      <a key="contrats" href="/">
        MES CONTRATS
      </a>,
      <a key="avantages" href="/">
        MES AVANTAGES
      </a>,
      <a key="documents" href="/">
        MES DOCUMENTS
      </a>,
    ],
  },
};

export const HeaderWithLinksAndRightItem: StoryObj<typeof HeaderClient> = {
  name: "Header with links and right item",
  render: ({ children, rightItem }) => (
    <HeaderClient rightItem={rightItem}>{children}</HeaderClient>
  ),
  args: {
    children: [
      <a key="contrats" href="/">
        MES CONTRATS
      </a>,
      <a key="avantages" href="/">
        MES AVANTAGES
      </a>,
      <a key="documents" href="/">
        MES DOCUMENTS
      </a>,
    ],
    rightItem: (
      <div
        style={{
          color: "#00008f",
          fontSize: "0.9rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "0.7rem",
        }}
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_320_699"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="20"
            height="21"
          >
            <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_320_699)">
            <path
              d="M10.0007 10.4805C9.08398 10.4805 8.33398 10.1888 7.75065 9.60547C7.16732 9.02214 6.87565 8.27214 6.87565 7.35547C6.87565 6.4388 7.16732 5.6888 7.75065 5.10547C8.33398 4.52214 9.08398 4.23047 10.0007 4.23047C10.9173 4.23047 11.6673 4.52214 12.2507 5.10547C12.834 5.6888 13.1257 6.4388 13.1257 7.35547C13.1257 8.27214 12.834 9.02214 12.2507 9.60547C11.6673 10.1888 10.9173 10.4805 10.0007 10.4805ZM3.33398 17.168V15.2096C3.33398 14.6819 3.46593 14.2305 3.72982 13.8555C3.99371 13.4805 4.33398 13.1957 4.75065 13.0013C5.68121 12.5846 6.57357 12.2721 7.42773 12.0638C8.2819 11.8555 9.13954 11.7513 10.0007 11.7513C10.8618 11.7513 11.7159 11.8589 12.5632 12.0742C13.4104 12.2895 14.2993 12.5985 15.2298 13.0013C15.6604 13.1957 16.0076 13.4805 16.2715 13.8555C16.5354 14.2305 16.6673 14.6819 16.6673 15.2096V17.168H3.33398Z"
              fill="#00008F"
            />
          </g>
        </svg>
        <span>MON PROFIL</span>
        <svg
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.86422 0.303942C7.7792 0.218158 7.66018 0.166687 7.54116 0.166687C7.42214 0.166687 7.30311 0.218158 7.2181 0.303942L4.03 3.52085H3.97049L0.782391 0.303942C0.697375 0.218158 0.578353 0.166687 0.45933 0.166687C0.340308 0.166687 0.221286 0.218158 0.13627 0.303942C0.0512537 0.389726 0.000244141 0.509824 0.000244141 0.629922C0.000244141 0.750021 0.0512537 0.870118 0.13627 0.955903L3.32437 4.16424L3.97899 4.83335L4.67612 4.17281L7.86422 0.947324C7.94923 0.86154 8.00024 0.741442 8.00024 0.621344C8.00024 0.501246 7.94923 0.389726 7.86422 0.303942Z"
            fill="#00008F"
          />
        </svg>
      </div>
    ),
  },
};
