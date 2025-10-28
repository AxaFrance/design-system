import { ReactNode } from "react";
import classNames from "classnames";
import externalLinkIcon from "@material-symbols/svg-400/sharp/exit_to_app.svg";
import { Svg } from "../../../Svg";
import { Link } from "../../../Link/Link";
import { linkClassName } from "../../../Link/linkClassName";

import "@axa-fr/design-system-slash-css/dist/Layout/Header/AnchorNavBar/AnchorNavBar.css";
import "@axa-fr/design-system-slash-css/dist/common/breakpoints.css";

const defaultClassName = "af-anchor-navbar";

export type AnchorNavBarItem = {
  /**
   * name - The display name of the navigation item.
   */
  name: string;
  /**
   * isActive - If true, the item is highlighted as active.
   */
  isActive?: boolean;
  /**
   * onClick - Optional click handler for the navigation item.
   */
  onClick?: () => void;
  /**
   * link - The URL or anchor to navigate to when the item is clicked.
   */
  link?: string;
  /**
   * externalLink - If true, the link will open in a new tab and show an external link icon.
   */
  externalLink?: boolean;
  /**
   * render - Optional custom render function for the navigation item. If provided, it overrides the default rendering.
   */
  render?: (props: { className: string }) => ReactNode;
};

/**
 * Props for the AnchorNavBar component.
 * items - An array of navigation items to display in the navigation bar.
 */
export type AnchorNavBarProps = {
  items: AnchorNavBarItem[];
};

export const AnchorNavBar = ({ items }: AnchorNavBarProps) => {
  return (
    <nav className={classNames("af-container", defaultClassName)}>
      <ul>
        {items.map((item) => {
          if (item.render) {
            return (
              <li key={`nav-item-${item.name}`}>
                <Link
                  render={item.render}
                  className={classNames(
                    `${linkClassName} ${defaultClassName}-link`,
                    {
                      [`${defaultClassName}-link--active`]: item.isActive,
                    },
                  )}
                />
              </li>
            );
          }

          return (
            <li key={`nav-item-${item.name}`}>
              <Link
                href={item.link}
                aria-current={item.isActive ? "page" : undefined}
                onClick={item.onClick}
                className={classNames(`${defaultClassName}-link`, {
                  [`${defaultClassName}-link--active`]: item.isActive,
                })}
                target={item.externalLink ? "_blank" : undefined}
              >
                {item.name}
                {item.externalLink ? (
                  <Svg
                    role="presentation"
                    src={externalLinkIcon}
                    className={`${defaultClassName}-external-link-svg`}
                  />
                ) : null}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
