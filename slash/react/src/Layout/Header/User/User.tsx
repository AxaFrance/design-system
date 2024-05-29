import { MouseEvent, ReactNode } from "react";
import { InnerUser } from "./InnerUser";
import "@axa-fr/design-system-slash-css/dist/Layout/Header/User/User.scss";

const defaultClassName = "af-info-user";

type Props = {
  children?: ReactNode;
  href?: string;
  name: string;
  onClick?: (action: {
    path?: string;
    event: MouseEvent<HTMLAnchorElement>;
  }) => void;
  path?: string;
  profile?: string;
  title?: string;
};

const User = ({
  children,
  href,
  name,
  path,
  profile,
  onClick,
  title = "Voir mon profil",
}: Props) => (
  <div className={defaultClassName}>
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

export { User };
