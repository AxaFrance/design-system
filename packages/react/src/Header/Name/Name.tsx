import { MouseEvent } from "react";
import { getComponentClassName } from "../../agent";
import "@axa-fr/design-system-css/dist/Header/Name/Name.scss";
import "@axa-fr/design-system-css/dist/Header/Logo/Logo.scss";

type Props = {
  title: string;
  subtitle?: string;
  img?: string;
  alt?: string;
  className?: string;
  classModifier?: string;
  onClick?: (action: { event: MouseEvent<HTMLAnchorElement> }) => void;
};

const Name = ({
  title,
  subtitle,
  img,
  alt = "logo",
  className,
  classModifier,
  onClick,
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
