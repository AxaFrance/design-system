import closeIcon from "@material-symbols/svg-400/outlined/close.svg";
import type { MouseEventHandler, ReactNode } from "react";
import { Svg } from "../../../distributeur";
import { getClassName } from "../../utilities/helpers/getClassName";

export type HeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Text displayed in the header, overrides `title` if both are set.
   */
  children?: ReactNode;
  /**
   * Callback function called when the close button is clicked.
   */
  onCancel: MouseEventHandler<HTMLButtonElement>;
  /**
   * Aria label for the close button, used for accessibility.
   */
  closeButtonAriaLabel?: string;
  /**
   * Prop to override the style of the header. Will totally remove the default styles.
   */
  className?: string;
};

const Header = ({
  className,
  closeButtonAriaLabel = "Fermer la boite de dialogue",
  onCancel,
  children,
  ...props
}: HeaderProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-modal__header",
    className,
  });

  return (
    <header className={componentClassName} {...props}>
      <h4 className="af-modal__header-title">{children}</h4>
      <button
        className="af-modal__header-close-btn"
        type="button"
        aria-label={closeButtonAriaLabel}
        onClick={onCancel}
      >
        <Svg src={closeIcon} />
      </button>
    </header>
  );
};

export { Header };
