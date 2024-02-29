import { MouseEvent } from "react";
import "@axa-fr/design-system-css/dist/Header/Name/Name.scss";
import "@axa-fr/design-system-css/dist/Header/Logo/Logo.scss";

import { getComponentClassName } from "../../agent";

type Props = {
  alt?: string;
  className?: string;
  classModifier?: string;
  img?: string;
  onClick?: (action: { event: MouseEvent<HTMLAnchorElement> }) => void;
  subtitle?: string;
  title: string;
};

const Name = ({
  alt = "logo",
  classModifier,
  className,
  img,
  onClick,
  subtitle,
  title,
}: Props) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    "af-header__name",
  );

  return (
    <div className={componentClassName}>
      <a
        className="af-logo"
        href="/"
        onClick={(event) => onClick && onClick({ event })}
      >
        <img className="af-logo__brand" src={img} alt={alt} />
      </a>
      <h2 className="af-header__title">
        {title}
        <span className="af-header__subtitle">{subtitle}</span>
      </h2>
    </div>
  );
};

export { Name };
