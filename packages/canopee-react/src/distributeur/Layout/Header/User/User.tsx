import "@axa-fr/canopee-css/distributeur/Layout/Header/User/User.css";
import { MouseEvent, ReactNode } from "react";
import { getComponentClassName } from "../../../utilities";
import { InnerUser } from "./InnerUser";

const defaultClassName = "af-info-user";

type Props = {
  /**
   * User's name
   */
  name: string;
  /**
   * User's profile or role, optional
   */
  profile?: string;
  /**
   * Children elements to be rendered next to the user's name and role
   */
  children?: ReactNode;
  /**
   * Class modifier to apply additional styles\
   * @example
   * ```tsx
   * <User classModifier="custom-class" />
   * ```
   * This will apply the class `af-info-user--custom-class` to the component.
   */
  classModifier?: string;
  /**
   * classNames to override completely the component's style
   */
  className?: string;
  /**
   * URL to navigate to when the user name is clicked
   * If provided, the user name will be wrapped in an anchor tag.
   * If not provided, the user name will be displayed as plain text.
   */
  href?: string;
  /**
   * Function to call when the user name link is clicked
   * @param action - Contains the event and optionally the path
   */
  onClick?: (action: {
    path?: string;
    event: MouseEvent<HTMLAnchorElement>;
  }) => void;
  /**
   * Optional path to be used in the onClick function
   * @example
   * ```tsx
   * <User onClick={({ path }) => console.log(path)} path="/user-profile" />
   * ```
   * This will log `/user-profile` when the user name link is clicked.
   */
  path?: string;
  /**
   * Title for the user link, defaults to "Voir mon profil"
   * This is used as the `title` attribute for the anchor tag if `href` is provided.
   * It provides additional context for screen readers and tooltips.
   */
  title?: string;
};

const User = ({
  children,
  classModifier,
  className,
  href,
  name,
  path,
  profile,
  onClick,
  title = "Voir mon profil",
}: Props) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    defaultClassName,
  );

  return (
    <div className={componentClassName}>
      {href ? (
        <a
          aria-label="user info link"
          className={`${defaultClassName}__link`}
          href={href}
          title={title}
          onClick={(event) => onClick && onClick({ path, event })}
        >
          <InnerUser name={name} profile={profile} />
        </a>
      ) : (
        <InnerUser name={name} profile={profile} />
      )}
      {children}
    </div>
  );
};

export { User };
