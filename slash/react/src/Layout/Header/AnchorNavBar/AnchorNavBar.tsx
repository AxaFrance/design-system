import { ReactNode } from "react";
import classNames from "classnames";
import externalLinkIcon from "@material-symbols/svg-400/sharp/exit_to_app.svg";
import { Svg } from "../../../Svg";
import { Link } from "../../../Link/Link";
import { linkClassName } from "../../../Link/linkClassName";

import "@axa-fr/design-system-slash-css/dist/Layout/Header/AnchorNavBar/AnchorNavBar.css";

const defaultClassName = "af-anchor-navbar";

export type AnchorNavBarItem = {
  name: string;
  isActive?: boolean;
  onClick?: () => void;
  link?: string;
  externalLink?: boolean;
  render?: (props: { className: string }) => ReactNode;
};

export type AnchorNavBarProps = {
  items: AnchorNavBarItem[];
};

export const AnchorNavBar = ({ items }: AnchorNavBarProps) => {
  return (
    <nav className={defaultClassName}>
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
