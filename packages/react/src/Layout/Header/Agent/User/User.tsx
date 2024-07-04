import { MouseEvent, ReactNode } from "react";
import { InnerUser } from "./InnerUser";
import "@axa-fr/design-system-css/dist/Layout/Header/Agent/User/User.scss";
import { getComponentClassName } from "../../../../agent";

const defaultClassName = "af-info-user";

type Props = {
  children?: ReactNode;
  classModifier?: string;
  className?: string;
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
