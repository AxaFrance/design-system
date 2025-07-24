import { NavBar, NavBarItem } from "@axa-fr/design-system-slash-react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React, { useState } from "react";

const LongPageContent = () => (
    <div style={{ minHeight: "3000px", padding: "20px" }}>
        <h1>Long Page Content</h1>
        {Array.from({ length: 50 }).map((_, index) => (
            <p key={index}>Paragraph {index + 1}</p>
        ))}
    </div>
);

const meta: Meta<typeof NavBar> = {
    title: "Components/NavBar/Sticky",
    component: NavBar,
    argTypes: {
        onClick: { action: "onClick" },
        positionInit: { control: { type: "number", min: 0, max: 3 } },
        isSticky: { control: { type: "boolean" } },
        isVisible: { control: { type: "boolean" } },
    },
    args: {
        onClick: fn(),
        isVisible: false, // Evite le mode drawer
    },
};
export default meta;

type StoryProps = React.ComponentProps<typeof NavBar>;
type Story = StoryObj<StoryProps>;

const withPreventDefaultClick =
    <T extends React.MouseEvent>(next?: (e: T) => void): ((e: T) => void) =>
        (e: T) => {
            e.preventDefault();
            next?.(e);
        };

const StickyTemplate = ({
    children,
    onClick,
    isSticky: initialSticky = true,
    ...args
}: StoryProps) => {
    const [isSticky, setIsSticky] = useState(initialSticky);

    return (
        <div style={{ height: "100vh", overflowY: "scroll", position: "relative" }}>
            <button
                onClick={() => setIsSticky(!isSticky)}
                style={{
                    margin: "10px",
                    padding: "10px",
                    fontSize: "16px",
                    zIndex: 1001,
                }}
            >
                Toggle Sticky: {isSticky ? "On" : "Off"}
            </button>
            <NavBar
                onClick={withPreventDefaultClick(onClick)}
                {...args}
                isSticky={isSticky}
            >
                <NavBarItem
                    actionElt={
                        <a
                            className="af-nav__link"
                            href="/home"
                            onClick={withPreventDefaultClick(onClick)}
                        >
                            Home
                        </a>
                    }
                />
                <NavBarItem
                    actionElt={
                        <a
                            className="af-nav__link"
                            href="/about"
                            onClick={withPreventDefaultClick(onClick)}
                        >
                            About
                        </a>
                    }
                />
            </NavBar>
            <LongPageContent />
        </div>
    );
};

export const NavBarSticky: Story = {
    name: "NavBar Sticky",
    render: StickyTemplate,
    args: {
        positionInit: 0,
        isSticky: true,
        isVisible: false,
    },
    argTypes: {
        positionInit: { control: { type: "number", min: 0, max: 1 } },
        isSticky: { control: { type: "boolean" } },
        isVisible: { control: { type: "boolean" } },
    },
    parameters: {
        docs: {
            description: {
                story:
                    "This story tests the sticky navbar behavior. Set `isSticky` to true to make the navbar stick to the top while scrolling. Set `isVisible` to false for desktop to avoid drawer mode.",
            },
        },
    },
};
