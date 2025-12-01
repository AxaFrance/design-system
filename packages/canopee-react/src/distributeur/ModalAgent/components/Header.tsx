import closeIcon from "@material-symbols/svg-400/outlined/close.svg";
import type { MouseEventHandler, ReactNode } from "react";
import { getComponentClassName, Svg } from "../../../distributeur";

export type HeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Text displayed in the header.
   * @deprecated Use `children` instead to allow for more flexible content.
   */
  title?: string;
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
   * Class modifier for the header. Can be used to apply custom styles.
   */
  classModifier?: string;
  /**
   * Prop to override the style of the header. Will totally remove the default styles.
   */
  className?: string;
};

const Header = ({
  className,
  classModifier,
  title,
  closeButtonAriaLabel = "Fermer la boite de dialogue",
  onCancel,
  children,
  ...props
}: HeaderProps) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    "af-modal__header",
  );

  return (
    <header className={componentClassName} {...props}>
      <h4 className="af-modal__header-title">{children ?? title}</h4>
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
