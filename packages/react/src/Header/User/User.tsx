import { MouseEvent, ReactNode } from "react";
import { getComponentClassName } from "../../agent";
import { InnerUser } from "./InnerUser";
import "@axa-fr/design-system-css/dist/Header/User/User.scss";

const defaultClassName = "af-info-user";

type Props = {
  name: string;
  path?: string;
  profile?: string;
  href?: string;
  title?: string;
  children?: ReactNode;
  className?: string;
  classModifier?: string;
  onClick?: (action: {
    path?: string;
    event: MouseEvent<HTMLAnchorElement>;
  }) => void;
};

const User = ({
  path,
  name,
  profile,
  href,
  title = "Voir mon profil",
  children,
  className,
  classModifier,
  onClick,
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
          className="af-info-user__link"
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
