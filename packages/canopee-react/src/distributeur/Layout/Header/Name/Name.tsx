import "@axa-fr/canopee-css/distributeur/Layout/Header/Logo/Logo.css";
import "@axa-fr/canopee-css/distributeur/Layout/Header/Name/Name.css";
import { type MouseEvent } from "react";
import { getClassName } from "../../../utilities/helpers/getClassName";

const defaultClassName = "af-header__name";

type Props = {
  alt?: string;
  /** @deprecated Use `className` instead. */
  classModifier?: string;
  className?: string;
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
  const componentClassName = getClassName({
    baseClassName: defaultClassName,
    modifiers: classModifier?.split(" "),
    className,
  });

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
